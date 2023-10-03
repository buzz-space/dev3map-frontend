import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import TabDynamic from '~/components/base/TabDynamic'

import { Chart as ChartJS, registerables } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { hasAllProperties } from '~/utils/base';

ChartJS.register(...registerables);
// ChartJS.register({
//     id: 'margin',
//     beforeInit: function (chart, args, options) {
//         const fitValue = chart.legend.fit;
//         chart.legend.fit = function fit() {
//             fitValue.bind(chart.legend)();
//             return (this.height += 60);
//         };
//     },
// });

const pointerLabelPlugin = {
    id: 'pointer-label-plugin',
    beforeDatasetsDraw(chart, args, pluginOptions) {
        const { ctx, scales: { r: { ticks } } } = chart
        const max = ticks.reduce(function (prev, current) {
            return (prev && prev.value > current.value) ? prev : current
        })?.value //returns object
        chart.options.ticksData = {
            max,
            list: ticks.map((item) => item.value)
        };
        ctx.save()

    },
    defaults: {
        color: 'lightGreen'
    }
}


const PerformanceChart = ({ data }) => {
    const chartRef = useRef()
    const [index, setIndex] = useState(0)

    const listPropData = ['commit_rank', 'dev_rank', 'star_rank', 'fork_rank', 'pr_rank', 'pull_rank', 'issue_rank']

    function process(data) {
        if (data) {
            return {
                // labels: data?.map((dt) => dt?.year),
                labels: [
                    [`${(101 - data[listPropData[0]])}/100`, 'Commits'],
                    [`${(101 - data[listPropData[1]])}/100`, 'Active Devs'],
                    [`${(101 - data[listPropData[2]])}/100`, 'Stars'],
                    [`${(101 - data[listPropData[3]])}/100`, 'Forks'],
                    [`${(101 - data[listPropData[4]])}/100`, 'Repos'],
                    [`${(101 - data[listPropData[5]])}/100`, 'Pulls'],
                    [`${(101 - data[listPropData[6]])}/100`, 'Issues'],
                ],
                datasets: [
                    {
                        label: '',
                        data: [data?.commit_rank, data?.dev_rank, data?.star_rank, data?.fork_rank, data?.pr_rank, data?.pull_rank, data?.issue_rank],
                        // labelT: data?.map((dt) => `${handleMonth(dt?.month)}/${dt?.year}`),
                        backgroundColor: 'rgba(187, 134, 252, 0.16)',
                        borderColor: '#BB86FC',
                        pointBackgroundColor: '#BB86FC',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(255, 99, 132)',
                    },
                ],
            };
        } else {
            return undefined
        }
    }
    const [dataChart, setDataChart] = useState(process());

    useEffect(() => {
        if (data) {
            var dataTemp = {}
            if (index === 0) {
                dataTemp = data?.filter(item => item.range === 'all')[0]
            }
            else if (index === 1) {
                dataTemp = data?.filter(item => item.range === '7_days')[0]
            }
            else {
                dataTemp = data?.filter(item => item.range === '30_days')[0]
            }
            if (hasAllProperties(dataTemp, listPropData)) {
                setDataChart(process(dataTemp));
            }
        }
    }, [data, index]);
    return (
        <div className={styles['performance-chart']}>
            <h6 className={styles['title']}>OVERALL GITHUB PERFORMANCE</h6>
            <TabDynamic data={[
                {
                    label: 'All'
                },
                {
                    label: '7D',
                },
                {
                    label: '30D'
                }
            ]} setIndexActive={setIndex} />

            <div className={styles['frame']}>
                {
                    dataChart && <Radar
                        data={dataChart}
                        plugins={[pointerLabelPlugin]}
                        ref={chartRef}
                        options={{
                            // circular: false,
                            borderJoinStyle: 'round',
                            responsive: true,
                            elements: {
                                line: {
                                    borderWidth: 3
                                },
                                point: {
                                    radius: 0,
                                },
                            },
                            plugins: {
                                legend: {
                                    display: false,
                                },
                            },

                            scales: {
                                r: {
                                    backgroundColor: '#292929',
                                    pointLabels: {
                                        // display: false // Hides the labels around the radar chart 
                                        font: function (context, pluginOptions) {
                                            return {
                                                family: 'Montserrat',
                                                size: 14,
                                                weight: '400',

                                            }
                                        },
                                        color: '#fff'
                                    },
                                    ticks: {
                                        display: false, // Hides the labels in the middel (numbers)
                                        max: 100,
                                        min: 0,
                                        stepSize: 10,
                                    },
                                    grid: {
                                        color: function (context, pluginOptions) {
                                            const list = chartRef.current.options?.ticksData?.list
                                            if (context.tick.value >= chartRef.current.options?.ticksData?.max) {
                                                return '#fff';
                                            } else {
                                                return `rgba(255,255,255,${context.index / list?.length})`
                                            }
                                            // return 'transparent';
                                            // return 'rgba(255, 255, 255, 0.04)'
                                        },

                                    },
                                    angleLines: {
                                        color: 'transparent'
                                    },

                                },


                            },
                            interaction: {
                                mode: 'index',
                                intersect: false,
                            },
                            scaleLineWidth: 16,
                            scaleLineColor: "#EEEEEE",
                        }}
                    />
                }
            </div>
        </div>
    )
}

export default PerformanceChart