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
                stacked: true
            },
            x: {
                beginAtZero: false,
                border: {
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
            }
        }
    }} />
}