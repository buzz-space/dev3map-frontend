import { Chart as ChartJS, registerables } from 'chart.js';
import { useEffect, useRef } from 'react';
import { Bar } from "react-chartjs-2";
import baseCss from '~/public/styles/base.module.scss';

ChartJS.register(...registerables);

export default function Chart({ data }) {
    const chartRef = useRef();

    useEffect(() => {
        function resize() {
            if (chartRef.current) chartRef.current.resize();
        }

        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        }
    }, [])

    return <Bar ref={chartRef} data={
        data
    } options={{
        barPercentage: 0.8,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        // backgroundColor: getBgColor(),
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
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
                    }
                }
            },
            tooltip: {
                callbacks: {
                    title: function (context) {
                        let label = context[0]?.dataset?.labelT[context[0]?.dataIndex]
                        return `${label}`
                    },
                }
            }
        },
        scales: {

            y: {
                beginAtZero: true,
                border: {
                    display: false,
                    dash: [4, 4],
                },
                ticks: {
                    color: '#fff',
                    font: {
                        family: 'Montserrat',
                        weight: 600,
                        size: 14,
                    },

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
                stacked: true
            },
            x: {
                beginAtZero: false,
                border: {
                    display: false,
                    color: 'white',
                },
                ticks: {
                    maxTicksLimit: 6,
                    color: '#fff',
                    font: {
                        family: 'Montserrat',
                        weight: 600,
                        size: 14,
                    }
                },
                stacked: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0)',
                    borderColor: 'rgba(255, 255, 255, 0)',  // <-- this line is answer to initial question
                }
            }
        }
    }} />
}