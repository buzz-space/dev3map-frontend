import React, { useEffect, useState } from 'react'
import TabDynamic from '~/components/base/TabDynamic'
import PieceChart from './PieceChart'
import { CommitHorizontal, Infor, Issue, PullRequest, Ratio } from '~/public/assets/svgs'
import { formatNumber } from '~/utils/number'
import { useDeveloperStatistic } from '~/hooks/api/useDeveloper'
import { useRouter } from 'next/router'



const ItemPersonalContributions = ({ icon = () => { }, value, title, tooltip }) => {
    return <div className='bg-[#202020] rounded-[8px] p-[24px] gap-[16px] flex flex-col self-stretch'>
        {icon({ className: "!text-[#BB86FC] w-[24px] lg:w-[32px] h-[24px] lg:h-[32px]" })}
        <p className='text-[18px] lg:text-[32px] text-[#fff] font-[800]'>{formatNumber(Number(value))}</p>
        <div className='flex items-center gap-[8px] group relative'>
            <span className='text-white text-[14px] uppercase font-[600]'>{title}</span>
            {
                tooltip && <>
                    <Infor className="w-[20px] h-[20px] flex-shrink-0 flex-grow-0" />
                    <div className={`bg-[#2d2d2d] text-white absolute rounded-[8px] p-[24px] left-0 bottom-full max-w-full opacity-0 invisible transition-all duration-300
            group-hover:opacity-100 group-hover:visible
            `}>{tooltip}</div>
                </>
            }
        </div>
    </div>
}

const PersonalContribution = () => {

    const { query: { slug } } = useRouter();

    const { data: dataStatistic } = useDeveloperStatistic({
        slug: slug
    });

    const [data, setData] = useState({});
    const [dataReadyChart, setDataReadyChart] = useState([]);

    const [active, setActive] = useState()
    const [dataChart, setDataChart] = useState(undefined);

    useEffect(() => {
        setDataChart(() => {
            return {
                labels: dataReadyChart?.map((data) => data.label),
                datasets: [{
                    label: 'Personal contributions',
                    data: dataReadyChart?.map((data) => data.number),
                    backgroundColor: ['rgba(24, 160, 251, 0.48)', 'rgba(3, 218, 198, 0.48)', '#BB86FC'],
                    borderColor: '#000',
                }]
            }
        })
    }, [dataReadyChart])

    useEffect(() => {
        let range = 'all'
        if (active == 1) {
            range = '7_days'
        } else if (active == 2) {
            range = '30_days'
        }
        const filter = dataStatistic?.data?.filter((item, index) => item.range == range);
        const dt = filter?.length > 0 ? filter[0] : {};

        setDataReadyChart([
            {
                label: 'Commits',
                number: dt?.total_commit,
            },
            {
                label: 'Issues',
                number: dt?.total_issue,
            },
            {
                label: 'Pull Requests',
                number: dt?.total_pull_request,
            }
        ])

        setData(dt)
    }, [dataStatistic, active])

    return (
        <div className='mt-[48px] md:mt-[128px]'>
            <div className='flex items-center gap-4 justify-between w-full flex-wrap'>
                <h2 className='title'>PERSONAL CONTRIBUTIONS</h2>
                <TabDynamic
                    data={[
                        {
                            label: 'All',
                        },
                        {
                            label: '7D',
                        },
                        {
                            label: '30D'
                        }
                    ]}
                    setIndexActive={setActive}
                />
            </div>
            <div className='flex flex-col md:flex-row gap-[16px] lg:gap-[24px] items-stretch mt-[40px]'>
                <div className='grid grid-cols-1 xs:grid-cols-2 gap-[16px] lg:gap-[24px] flex-1'>
                    <ItemPersonalContributions
                        icon={CommitHorizontal}
                        value={data?.total_commit}
                        title={'Commits'}
                    />
                    <ItemPersonalContributions
                        icon={PullRequest}
                        value={data?.total_pull_request}
                        title={'Pull requests'}
                    />
                    <ItemPersonalContributions
                        icon={Issue}
                        value={data?.total_issue}
                        title={'Issues'}
                    />
                    <ItemPersonalContributions
                        icon={Ratio}
                        value={data?.merge_ratio}
                        title={'Merge ratio'}
                    />
                </div>
                {
                    dataChart && <div className=' bg-[#202020] rounded-[8px] p-[24px] flex items-center'>
                        <PieceChart data={dataChart} total={
                            Number(data?.total_commit) + Number(data?.total_issue) + Number(data?.total_pull_request)
                        } />
                    </div>
                }
            </div>
        </div>
    )
}

export default PersonalContribution