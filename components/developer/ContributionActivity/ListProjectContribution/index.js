import React, { useState } from 'react'
import TitleSecond from '../TitleSecond'
import { useDeveloperProjects } from '~/hooks/api/useDeveloper'
import { useRouter } from 'next/router'
import { round } from 'lodash'
import Link from 'next/link'
import IconSort from '~/components/home/StatisChainTable/IconSort'
import Loading from '~/components/common/Loading'

const ItemProjectContribution = ({ ...props }) => {
    // const percent = (props?.developer_commit / props?.total_commit) * 100;
    return <Link href={`/projects/${props?.github_prefix}`} className='flex gap-[24px] first:pt-0 pt-[32px] pb-[40px] border-b-[1px] last:border-b-0 border-[#ffffff3d] border-solid w-full md:w-auto'>
        <img src={props?.avatar} className='w-[36px] md:w-[44px] h-[36px] md:h-[44px] xl:w-[56px] xl:h-[56px] rounded-full ' />
        <div className='flex flex-col flex-1'>
            <span className='text-[16px] lg:text-[18px] text-white leading-[26px] font-[600] uppercase'>{props?.name}</span>
            <span className='text-[14px] lg:text-[16px] text-white leading-[24px] font-[400] uppercase'>{props?.symbol}</span>
            <div className='flex items-center gap-[36px] lg:gap-[50px] xl:gap-[80px] mt-[16px]'>
                <div className='flex-1  h-[6px] bg-[#ffffff1f] rounded-[40px]'>
                    <div className={`bg-[#BB86FC] h-full rounded-[40px]`} style={{
                        width: props?.percent + '%'
                    }}>
                    </div>
                </div>
                <span className='text-[16px] lg:text-[18px] text-white text-right leading-[26px] font-[600]'>{round(props?.percent, 2)}%</span>
            </div>
        </div>
    </Link>
}

const ListProjectContribution = () => {
    const { query: { slug } } = useRouter();
    const [sortState, setSortState] = useState('')
    const { data, isFetching, refetch } = useDeveloperProjects(
        {
            slug: slug,
            sort: sortState
        }
    );
    return (
        <div className='w-auto  md:w-[388px] lg:w-[410px] xl:w-[500px]'>
            <div className='flex items-center gap-4 justify-between w-full'>
                <TitleSecond>PROJECTS</TitleSecond>
                <div className='flex items-center gap-[8px] cursor-pointer select-none'
                    onClick={() => {
                        setSortState((prev) => {
                            if (prev === 'ASC') {
                                return 'DESC'
                            } else {
                                return 'ASC'
                            }
                        })
                        refetch();
                    }}
                >
                    <TitleSecond>CONTRIBUTIONS</TitleSecond>
                    <IconSort direct={sortState ? (sortState === 'ASC' ? 'up' : 'down') : ''} colorDisable="#FFFFFF66" />
                </div>
            </div>
            {
                isFetching ?
                    <div className='mt-14'><Loading type='ClipLoader' /></div> :
                    <div className='max-h-[584px] overflow-y-auto style-scroll pr-[16px] sm:pr-[24px] mt-[32px] sm:mt-[56px]'>
                        {
                            data?.data?.map((item, index) => {
                                return <ItemProjectContribution {...item} key={item?.chain} />
                            })
                        }
                    </div>
            }
        </div>
    )
}

export default ListProjectContribution