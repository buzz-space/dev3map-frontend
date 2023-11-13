'use client';

import React, { useEffect, useRef, useState } from 'react'
import { useDeveloperRepository } from '~/hooks/api/useDeveloper'
import { useRouter } from 'next/router';
// import NextArrow from '~/components/common/ArrowSlick/NextArrow';
// import PrevArrow from '~/components/common/ArrowSlick/PrevArrow';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
import Link from 'next/link';
import { CommitHorizontal, Issue, PullRequest } from '~/public/assets/svgs';
import { formatNumber } from '~/utils/number';
import { Tooltip } from 'antd';
import Button from '~/components/base/Button';
import Loading from '~/components/common/Loading';
import Dropdown from '~/components/base/Dropdown';

const RepositoriesDev = () => {
    const { query: { slug } } = useRouter();
    const [sortState, setSortState] = useState('');
    const { data, isFetching, refetch } = useDeveloperRepository({
        slug: slug,
        sort: sortState
    })
    const [more, setMore] = useState(false);
    const sortRef = useRef();
    // const settings = {
    //     className: 'mt-[50px] gap-[16px] flex-col sm:flex-row flex sm:block',
    //     centerPadding: '0px',
    //     centerMode: false,
    //     dots: false,
    //     infinite: false,
    //     speed: 500,
    //     autoplaySpeed: 3000,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     nextArrow: <NextArrow />,
    //     prevArrow: <PrevArrow />,
    //     responsive: [
    //         {
    //             breakpoint: 960,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //             },
    //         },
    //         {
    //             breakpoint: 640,
    //             settings: "unslick",
    //         },
    //     ],
    // };


    useEffect(() => {
        refetch();
    }, [])

    return (
        <div className='mt-[48px] md:mt-[128px]'>
            <div className='flex justify-between items-center gap-4'>
                <h2 className='title'>REPOSITORIES ({isFetching ? '...' : data?.data?.length})</h2>
                <Dropdown
                    options={[
                        {
                            text: 'Sort by',
                            value: 'default',
                        },
                        {
                            text: 'Most Contribution',
                            value: 'ASC',
                        },
                        {
                            text: 'Least Contribution',
                            value: 'DESC',
                        }
                    ]}
                    ref={sortRef}
                    onChange={() => {
                        setSortState(sortRef.current.selectedValue);
                        refetch();
                    }}
                />
            </div>
            {/* <Slider {...settings}>
                {data?.data.map((item, index) => (
                    // <div key={index}>
                    <div key={index}>
                        
                    </div>
                ))}
            </Slider> */}
            {
                isFetching ?
                    <div className='mt-12'>
                        <Loading type='PuffLoader' />
                    </div>
                    :
                    <>
                        <div className='flex grid-cols-2 lg:grid-cols-3 mt-[50px] gap-[16px] flex-col sm:flex-row sm:grid '>
                            {data?.data?.splice(0, more ? (data?.data?.length) : Math.min(6, data?.data?.length)).map((item, index) => (
                                // <div key={index}>
                                <div key={index}>
                                    <Link className='bg-[#202020] p-[24px] rounded-[8px] flex flex-col mx-0 sm:mx-[24px] first:ml-0' href={`https://github.com/${item?.github_prefix}`} target='_blank'>
                                        <h6 className='text-[24px] text-white uppercase font-[800]'>{item?.name}</h6>
                                        <div className='mt-[16px] flex items-center gap-[24px]'>
                                            <Tooltip title='Commits' trigger="hover" color="#2d2d2d">
                                                <div className='flex items-center gap-[8px]'>
                                                    <CommitHorizontal className="!text-[#03DAC6] w-[24px] h-[24px]" />
                                                    <span className='text-[16px] text-white'>{formatNumber(item?.total_commit)}</span>
                                                </div>
                                            </Tooltip>
                                            <Tooltip title='Pull Requests' trigger="hover" color="#2d2d2d">
                                                <div className='flex items-center gap-[8px]'>
                                                    <PullRequest className="!text-[#03DAC6] w-[24px] h-[24px]" />
                                                    <span className='text-[16px] text-white'>{formatNumber(item?.pull_request_closed)}</span>
                                                </div>
                                            </Tooltip>
                                            <Tooltip title='Commits' trigger="hover" color="#2d2d2d">
                                                <div className='flex items-center gap-[8px]'>
                                                    <Issue className="!text-[#03DAC6] w-[24px] h-[24px]" />
                                                    <span className='text-[16px] text-white'>{formatNumber(item?.total_issue_solved)}</span>
                                                </div>
                                            </Tooltip>
                                        </div>
                                        <p className='text-[#7E7E7E] text-[16px] line-clamp-2 mt-[16px] leading-[24px] h-[48px]'>{item?.description}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        {
                            data?.data?.length > 6 ? <div className='mt-8 w-full flex justify-center items-center' onClick={() => { setMore(prev => !prev) }}>
                                <Button outline>
                                    {more ? 'Collapse' : 'LOAD MORE'}
                                </Button>
                            </div> : <></>
                        }
                    </>
            }
        </div>
    )
}

export default RepositoriesDev