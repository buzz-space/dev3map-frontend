import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from "react-chartjs-2";
import baseCss from '~/public/styles/base.module.scss';

ChartJS.register(...registerables);

export default function Chart({ data }) {

    return <Bar data={
        data
    } options={{
        barPercentage: 0.8,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        // backgroundColor: getBgColor(),
        responsive: true,
        plugins: {
            legend: {
                display: false,

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
                    padding: 16,

                },
                grid: {
                    color: function (context) {
                        console.log('a', context.tick.value)
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