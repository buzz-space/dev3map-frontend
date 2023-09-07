import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import { plugin } from '~/utils/pluginChart';

ChartJS.register(...registerables);
ChartJS.register({
    id: 'margin',
    beforeInit: function (chart, args, options) {
        const fitValue = chart.legend.fit;
        chart.legend.fit = function fit() {
            fitValue.bind(chart.legend)();
            return (this.height += 60);
        };
    },
});

const MonthlyActiveDevs = ({ data }) => {
    function process() {
        return {
            labels: data?.map((dt) => moment(dt?.exact_date).format('YYYY')),
            datasets: [
                {
                    label: 'TOTAL ACTIVE DEVS',
                    data: data?.map((dt) => Number(dt?.active_developer)),
                    labelT: data?.map((dt) => `${dt?.exact_date}`),
                    backgroundColor: '#BB86FC',
                    borderColor: '#BB86FC',
                },
            ],
        };
    }
    const [dataChart, setDataChart] = useState(process());

    useEffect(() => {
        setDataChart(process());
    }, [data]);
    return (
        <div className={styles['chart-layout']}>
            <h6 className={styles['title']}>ACTIVE DEVS</h6>
            <div className={styles['chart']}> <Line data={dataChart} plugins={[plugin]} options={{


                // animations: {
                //     tension: {
                //         duration: 1000,
                //         easing: 'linear',
                //         from: 1,
                //         to: 0,
                //         loop: true
                //     }
                // },
                responsive: true,
                tension: 0.3,
                elements: {
                    point: {
                        radius: 0,
                    },
                },
                maintainAspectRatio: false,
                borderWidth: 1,
                borderStyle: 'dotted',
                plugins: {
                    corsair: {
                        color: '#999',
                    },
                    legend: {
                        align: 'start',
                        labels: {
                            usePointStyle: true,
                            boxWidth: 6,
                            boxHeight: 6,
                            color: '#FFFFFF',
                            font: {
                                family: 'Montserrat',
                                size: 14,
                                weight: '600',
                            },
                        },
                    },
                    tooltip: {
                        callbacks: {
                            title: function (context) {
                                let label = context[0]?.dataset?.labelT[context[0]?.dataIndex];
                                return `${label}`;
                            },
                        },
                    },
                },
                scales: {
                    y: {
                        border: {
                            display: false,
                            dash: [4, 4],
                        },
                        ticks: {
                            color: '#fff',
                            maxTicksLimit: 6,
                            font: {
                                family: 'Montserrat',
                                weight: 600,
                                size: 14,
                            },
                            beginAtZero: true,


                        },

                        grid: {
                            color: function (context) {
                                if (context.tick.value != 0) {
                                    return 'rgba(255, 255, 255, 0.4)';
                                }
                                return '#fff';
                            },
                            drawOnChartArea: true,
                            drawTicks: true,
                        },
                    },
                    x: {
                        border: {
                            display: false,
                            color: 'white',
                        },
                        ticks: {
                            maxTicksLimit: 4,
                            color: '#fff',
                            font: {
                                family: 'Montserrat',
                                weight: 600,
                                size: 14,
                            },
                            beginAtZero: true,
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0)',
                            borderColor: 'rgba(255, 255, 255, 0)', // <-- this line is answer to initial question
                        },
                    },
                },
            }}
            />
            </div>
        </div>
    );
};

export default MonthlyActiveDevs;
