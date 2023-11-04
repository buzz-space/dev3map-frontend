'use client';

import { Chart as ChartJS, registerables } from 'chart.js';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { Pie } from "react-chartjs-2";
import * as helpers from 'chart.js/helpers';
import('chart.js-plugin-labels-dv');
import ChartDataLabels from "chartjs-plugin-datalabels";
import { round } from 'lodash';
ChartJS.register(...registerables);

export default function PieceChart({ data, total = 1 }) {
    const chartRef = useRef();
    const [legend, setLegend] = useState([])
    useEffect(() => {
        ChartJS.helpers = helpers;
        function resize() {
            if (chartRef.current) chartRef.current.resize();
        }

        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);

        }
    }, [])

    function getChartLegend() {
        if (chartRef.current) {
            const x = chartRef.current.options.plugins.legend.labels.generateLabels(chartRef.current);
            setLegend(x);
        }
    }

    useEffect(() => {

        getChartLegend();

    }, [chartRef.current])

    return <div className='flex items-center gap-[60px]'>
        <div className='w-[312px] h-[312px]'>
            <Pie ref={chartRef} data={data}
                options={{

                    responsive: true,
                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    // maintainAspectRatio: true,
                    // aspectRatio: '1/2',
                    borderWidth: 1,
                    plugins: {
                        legend: {
                            // position: "right",
                            // align: "middle",
                            // labels: {
                            //     usePointStyle: true,
                            //     boxWidth: 6,
                            //     boxHeight: 6,
                            //     color: '#FFFFFF',
                            //     font: {
                            //         family: 'Montserrat',
                            //         size: 14,
                            //         weight: '600',
                            //     }
                            // }
                            display: false,
                        },

                        htmlLegend: {
                            containerID: "legend-container-personal-contribution",
                        },
                        datalabels: {
                            color: 'black',
                            formatter: (args) => {
                                return round((args / total) * 100) + '%'
                            },
                            font: {
                                size: 28,
                            },
                            labels: {
                                title: {
                                    font: {
                                        weight: 'bold'
                                    }
                                },
                                value: {
                                    color: 'black'
                                }
                            }
                        }
                    },

                }}
                plugins={[ChartDataLabels]}
            />
        </div>
        <div id="legend-container-personal-contribution">
            <ul className='list-none flex flex-col gap-[24px] pr-[40px]' >
                {
                    legend?.map((item, index) => {
                        return <li key={index} className={clsx('flex gap-[16px] items-center cursor-pointer decoration-white', {
                            ['line-through']: item?.hidden
                        })} onClick={() => {
                            console.log({ h: item?.hidden })
                            const chart = chartRef.current;
                            const { type } = chart.config;
                            if (type === 'pie' || type === 'doughnut') {
                                // Pie and doughnut charts only have a single dataset and visibility is per item
                                chart.toggleDataVisibility(item.index);
                            } else {
                                chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
                            }
                            chart.update();
                            getChartLegend();
                        }}>
                            <span className='w-[24px] h-[24px] rounded-[6px] block' style={{
                                backgroundColor: item?.fillStyle
                            }}>
                            </span>
                            <label className='text-white uppercase text-[14px] font-[600] cursor-pointer'>{item?.text}</label>
                        </li>
                    })
                }
            </ul>
        </div>
    </div>
}