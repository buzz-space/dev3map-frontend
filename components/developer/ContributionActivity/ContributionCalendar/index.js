import React, { useEffect, useRef, useState } from 'react'
import TitleSecond from '../TitleSecond'
import Dropdown from '~/components/base/Dropdown'
import moment from 'moment'
import { handleMonth } from '~/utils/strings'
import { useDeveloperActivity } from '~/hooks/api/useDeveloper'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const ContributionCalendar = () => {
    const [valueMonth, setValueMonth] = useState('01');
    const [valueYear, setValueYear] = useState(moment().year());
    const [numberOfDays, setNumberOfDays] = useState([]);

    const { query: { slug } } = useRouter();

    const { data, isLoading } = useDeveloperActivity({
        slug: slug,
        month: valueMonth,
        year: valueYear
    })

    useEffect(() => {
        if (valueMonth && valueYear) {
            const days = moment(`${valueYear}-${valueMonth}`, "YYYY-MM").daysInMonth();
            setNumberOfDays(new Array(days).fill(1))
        }
    }, [valueMonth, valueYear])

    return (
        <div>
            <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[16px]'>
                <TitleSecond>142 CONTRIBUTIONS</TitleSecond>
                <div className='flex items-center gap-[8px] sm:gap-[12px] flex-wrap'>
                    <Dropdown options={
                        moment.months().map((item, index) => {
                            return {
                                text: item,
                                value: handleMonth(index + 1)
                            }
                        })
                    }
                        onChange={(e) => {
                            setValueMonth(e?.value);
                            console.log(e?.value, e?.options[e?.selectedIndex])
                        }
                        }
                    />
                    <Dropdown options={
                        new Array(moment().year() + 1 - 2020).fill(1).map((item, index) => {
                            return {
                                text: 2020 + index,
                                value: 2020 + index,
                            }
                        })
                    } onChange={(e) => {
                        setValueYear(e?.value);

                    }
                    }
                    />
                </div>
            </div>
            <div className={`bg-[#202020] rounded-[12px] px-[24px] py-[24px] md:py-[32px] mt-[40px] 
            w-full md:w-[calc(32px*7+14px*8)] lg:w-[calc(44px*7+18px*8)] xl:w-[calc(56px*7+24px*8)]`}>
                <div className={clsx(`
                gap-x-[12px] md:gap-x-[14px] lg:gap-x-[18px] xl:gap-x-[24px] 
                gap-y-[12px] md:gap-y-[14px] xl:gap-y-[16px] 
                min-h-[calc(((100vw/8)-12px)*4+12px*5)] md:min-h-[calc(32px*4+14px*5)] lg:min-h-[calc(44px*4+14px*5)] xl:min-h-[calc(56px*4+16px*5)]`,
                    {
                        ['grid grid-cols-7']: !isLoading,
                        ['flex items-center justify-center']: true
                    }
                )}>
                    {
                        isLoading ?
                            <>
                                <p className='text-white text-[24px] text-center w-full'>Loading...</p>
                            </>
                            :
                            <>
                                {
                                    data?.data ? data?.data?.map((item, index) => {
                                        return <div className={clsx(`
                                        w-[calc(100vw/8-12px)] sm:w-[calc(100vw/8-24px)] md:w-[32px] lg:w-[44px] xl:w-[56px]
                                        h-[calc(100vw/8-12px)] sm:h-[calc(100vw/8-24px)] md:h-[32px] lg:h-[44px] xl:h-[56px] 
                                        rounded-[8px]
                                        `, (
                                            function () {

                                                let bg = 'bg-[#2D2D2D]';
                                                const contributions = item?.commits;

                                                if (contributions > 20) {
                                                    bg = 'bg-[#5224B2]';
                                                }
                                                else if (contributions > 15) {
                                                    bg = 'bg-[#7945D6]';
                                                }
                                                else if (contributions > 10) {
                                                    bg = 'bg-[#BB86FC]';
                                                }
                                                else if (contributions > 5) {
                                                    bg = 'bg-[#DDB6FE]';
                                                }
                                                else if (contributions > 1) {
                                                    bg = 'bg-[#F6E6FE]';
                                                }
                                                return bg;
                                            }
                                        )())}></div>
                                    }) :
                                        numberOfDays?.map((item, index) => {
                                            return <div className={clsx(`
                                            w-[calc(100vw/8-12px)] sm:w-[calc(100vw/8-24px)] md:w-[32px] lg:w-[44px] xl:w-[56px]
                                            h-[calc(100vw/8-12px)] sm:h-[calc(100vw/8-24px)] md:h-[32px] lg:h-[44px] xl:h-[56px] 
                                            rounded-[8px] bg-[#2D2D2D]
                                            `)}></div>
                                        })
                                }
                            </>
                    }
                </div>
                <div className='flex items-center mt-[24px] sm:mt-[32px] lg:mt-[40px] gap-[8px] sm:gap-[12px]'>
                    <span className='text-[16px] lg:text-[18px] text-white'>Less</span>
                    <span className='w-[16px] sm:w-[20px] lg:w-[24px] h-[16px] sm:h-[20px] lg:h-[24px] bg-[#F6E6FE] rounded-[6px]'></span>
                    <span className='w-[16px] sm:w-[20px] lg:w-[24px] h-[16px] sm:h-[20px] lg:h-[24px] bg-[#DDB6FE] rounded-[6px]'></span>
                    <span className='w-[16px] sm:w-[20px] lg:w-[24px] h-[16px] sm:h-[20px] lg:h-[24px] bg-[#BB86FC] rounded-[6px]'></span>
                    <span className='w-[16px] sm:w-[20px] lg:w-[24px] h-[16px] sm:h-[20px] lg:h-[24px] bg-[#7945D6] rounded-[6px]'></span>
                    <span className='w-[16px] sm:w-[20px] lg:w-[24px] h-[16px] sm:h-[20px] lg:h-[24px] bg-[#5224B2] rounded-[6px]'></span>
                    <span className='text-[16px] lg:text-[18px] text-white'>More</span>
                </div>
            </div>
        </div >
    )
}

export default ContributionCalendar