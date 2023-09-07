import { Chart as ChartJS, registerables } from 'chart.js';
import { useEffect, useRef } from 'react';
import { Bar, Line } from "react-chartjs-2";
import baseCss from '~/public/styles/base.module.scss';
import { plugin } from '~/utils/pluginChart';

ChartJS.register(...registerables,
    // {
    //     id: 'uniqueid5', //typescript crashes without id
    //     afterDraw: function (chart, easing) {
    //         if (chart.tooltip._active && chart.tooltip._active.length) {
    //             const activePoint = chart.tooltip._active[0];
    //             const ctx = chart.ctx;
    //             const x = activePoint.element.x;
    //             const y = activePoint.element.y;
    //             const topY = chart.scales.y.top;
    //             const bottomY = chart.scales.y.bottom;
    //             const left = chart.chartArea.left;
    //             const right = chart.chartArea.right;
    //             ctx.save();
    //             ctx.lineWidth = 1;
    //             ctx.setLineDash([3, 3]);
    //             ctx.strokeStyle = '#999';

    //             // draw vertical line      
    //             ctx.beginPath();
    //             ctx.moveTo(x, topY);
    //             ctx.lineTo(x, bottomY);
    //             ctx.stroke();

    //             // Draw horizontal line
    //             ctx.beginPath();
    //             ctx.moveTo(left, y);
    //             ctx.lineTo(right, y);
    //             ctx.stroke();

    //             ctx.restore();
    //         }
    //     }
    // }
);



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

    return <Line ref={chartRef} data={data} plugins={[plugin]} options={{
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
                radius: 0
            }
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
                }
            },
            x: {
                border: {
                    display: false,
                    color: 'white',
                },
                ticks: {
                    maxTicksLimit: 7,
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
                    borderColor: 'rgba(255, 255, 255, 0)',  // <-- this line is answer to initial question
                }
            }
        },
        interaction: {
            mode: 'index',
            intersect: false,
        }
    }} />
}