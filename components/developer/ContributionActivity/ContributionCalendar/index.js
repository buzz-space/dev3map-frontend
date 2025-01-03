import React, { useEffect, useRef, useState } from 'react';
import TitleSecond from '../TitleSecond';
import Dropdown from '~/components/base/Dropdown';
import moment from 'moment';
import { handleMonth } from '~/utils/strings';
import { useDeveloperActivity } from '~/hooks/api/useDeveloper';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import Loading from '~/components/common/Loading';
import { Tooltip } from 'antd';

const ContributionCalendar = () => {
  const [valueMonth, setValueMonth] = useState(handleMonth(moment().month()));
  const [valueYear, setValueYear] = useState(moment().year());
  const [numberOfDays, setNumberOfDays] = useState([]);
  const [total, setTotal] = useState([]);

  const monthRef = useRef();
  const yearRef = useRef();

  const {
    query: { slug },
  } = useRouter();

  const { data, isLoading } = useDeveloperActivity({
    slug: slug,
    month: valueMonth,
    year: valueYear,
  });

  useEffect(() => {
    monthRef.current.changeSelectedIndex(moment().month());
    yearRef.current.changeSelectedIndex(moment().year() - 2020);
  }, []);

  useEffect(() => {
    if (valueMonth && valueYear) {
      const days = moment(`${valueYear}-${valueMonth}`, 'YYYY-MM').daysInMonth();
      if (days >= 0) {
        setNumberOfDays(new Array(days).fill(1));
      }
    }
  }, [valueMonth, valueYear]);

  useEffect(() => {
    if (data) {
      setTotal(data?.data.map((item) => item.total));
    }
  }, [data]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[16px]">
        <Tooltip
          title="Contributions consist of Commits, Pull Requests opened and Issues created by this developer"
          trigger="hover"
          color="#2d2d2d"
        >
          <TitleSecond>{total?.reduce((a, b) => a + b, 0)} CONTRIBUTIONS</TitleSecond>
          <span></span>
        </Tooltip>
        <div className="flex items-center gap-[8px] sm:gap-[12px] flex-wrap">
          <Dropdown
            options={moment.months().map((item, index) => {
              return {
                text: item,
                value: handleMonth(index + 1),
              };
            })}
            onChange={(e) => {
              setValueMonth(e?.value);
            }}
            ref={monthRef}
          />
          <Dropdown
            options={new Array(moment().year() + 1 - 2020).fill(1).map((item, index) => {
              return {
                text: 2020 + index,
                value: 2020 + index,
              };
            })}
            onChange={(e) => {
              setValueYear(e?.value);
            }}
            ref={yearRef}
          />
        </div>
      </div>
      <div
        className={`bg-[#202020] rounded-[12px] px-[24px] py-[24px] md:py-[32px] mt-[40px] 
            w-full md:w-[calc(32px*7+14px*8)] lg:w-[calc(44px*7+18px*8)] xl:w-[calc(56px*7+24px*8)]`}
      >
        <div
          className={clsx(
            `
                gap-x-[12px] md:gap-x-[14px] lg:gap-x-[18px] xl:gap-x-[24px] 
                gap-y-[12px] md:gap-y-[14px] xl:gap-y-[16px] 
                min-h-[calc(((100vw/8)-12px)*4+12px*5)] md:min-h-[calc(32px*4+14px*5)] lg:min-h-[calc(44px*4+14px*5)] xl:min-h-[calc(56px*4+16px*5)]`,
            {
              ['grid grid-cols-7']: !isLoading,
              ['flex items-center justify-center']: true,
            }
          )}
        >
          {isLoading ? (
            <>
              {/* <p className='text-white text-[24px] text-center w-full'>Loading...</p> */}
              <Loading type="CircleLoader" size={100} color="#fff" />
            </>
          ) : (
            <>
              {data?.data
                ? data?.data?.map((item, index) => {
                    return (
                      <Tooltip
                        key={index}
                        title={
                          <div className="flex flex-col gap-[4px]">
                            <p>{item?.total} contribution(s):</p>
                            <ul className="list-disc pl-8">
                              <li>{item?.commit} Commit(s)</li>
                              <li>{item?.issue} Issue(s)</li>
                              <li>{item?.pull} Pull Request(s)</li>
                            </ul>
                            <p>
                              on{' '}
                              {moment(`${index + 1}-${valueMonth}-${valueYear}`, 'DD-MM-YYYY').format('MMM DD, YYYY')}
                            </p>
                          </div>
                        }
                        trigger="hover"
                        color="#2d2d2d"
                      >
                        <div
                          className={clsx(
                            `
                                        flex items-center justify-center group
                                        w-[calc(100vw/8-12px)] sm:w-[calc(100vw/8-24px)] md:w-[32px] lg:w-[44px] xl:w-[56px]
                                        h-[calc(100vw/8-12px)] sm:h-[calc(100vw/8-24px)] md:h-[32px] lg:h-[44px] xl:h-[56px] 
                                        rounded-[8px]
                                        `,
                            (function () {
                              let bg = 'bg-[#2D2D2D]';
                              const contributions = item?.total;

                              if (contributions > 20) {
                                bg = 'bg-[#5224B2]';
                              } else if (contributions > 15) {
                                bg = 'bg-[#7945D6]';
                              } else if (contributions > 10) {
                                bg = 'bg-[#BB86FC]';
                              } else if (contributions > 5) {
                                bg = 'bg-[#DDB6FE]';
                              } else if (contributions > 1) {
                                bg = 'bg-[#F6E6FE]';
                              }
                              return bg;
                            })()
                          )}
                        >
                          {/* <label className='text-white text-[100%] font-[500] flex items-center justify-center rounded-[6px] bg-[#1e1e1e] p-2 w-[60%] h-[60%] opacity-0 group-hover:opacity-100 transition-all duration-300'>{item}</label> */}
                        </div>
                      </Tooltip>
                    );
                  })
                : numberOfDays?.map((item, index) => {
                    return (
                      <div
                        className={clsx(`
                                            w-[calc(100vw/8-12px)] sm:w-[calc(100vw/8-24px)] md:w-[32px] lg:w-[44px] xl:w-[56px]
                                            h-[calc(100vw/8-12px)] sm:h-[calc(100vw/8-24px)] md:h-[32px] lg:h-[44px] xl:h-[56px] 
                                            rounded-[8px] bg-[#2D2D2D]
                                            `)}
                      ></div>
                    );
                  })}
            </>
          )}
        </div>
        <div className="flex items-center mt-[24px] sm:mt-[32px] lg:mt-[40px] gap-[8px] sm:gap-[12px]">
          <span className="text-[16px] lg:text-[18px] text-white">Less</span>
          <Tooltip title="1 - 5 contributions" trigger="hover" color="#2d2d2d">
            <span className="w-[16px] sm:w-[20px] lg:w-[24px] h-[16px] sm:h-[20px] lg:h-[24px] bg-[#F6E6FE] rounded-[6px]"></span>
          </Tooltip>
          <Tooltip title="6 - 10 contributions" trigger="hover" color="#2d2d2d">
            <span className="w-[16px] sm:w-[20px] lg:w-[24px] h-[16px] sm:h-[20px] lg:h-[24px] bg-[#DDB6FE] rounded-[6px]"></span>
          </Tooltip>
          <Tooltip title="11 - 15 contributions" trigger="hover" color="#2d2d2d">
            <span className="w-[16px] sm:w-[20px] lg:w-[24px] h-[16px] sm:h-[20px] lg:h-[24px] bg-[#BB86FC] rounded-[6px]"></span>
          </Tooltip>
          <Tooltip title="16 - 20 contributions" trigger="hover" color="#2d2d2d">
            <span className="w-[16px] sm:w-[20px] lg:w-[24px] h-[16px] sm:h-[20px] lg:h-[24px] bg-[#7945D6] rounded-[6px]"></span>
          </Tooltip>
          <Tooltip title="More than 21 contributions" trigger="hover" color="#2d2d2d">
            <span className="w-[16px] sm:w-[20px] lg:w-[24px] h-[16px] sm:h-[20px] lg:h-[24px] bg-[#5224B2] rounded-[6px]"></span>
          </Tooltip>
          <span className="text-[16px] lg:text-[18px] text-white">More</span>
        </div>
      </div>
    </div>
  );
};

export default ContributionCalendar;
