import styles from "./styles.module.scss";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from "react-chartjs-2";

ChartJS.register(...registerables);
ChartJS.register(
    {
        id: 'margin',
        beforeInit: function (chart, args, options) {
            const fitValue = chart.legend.fit;
            chart.legend.fit = function fit() {
                fitValue.bind(chart.legend)();
                return this.height += 60;
            }
        }
    }
)
export default function ChartLayout({ description, data }) {
    return <div className={styles['chart-layout']}>
        <h6 className={styles['title']}>MONTHLY ACTIVE DEVS</h6>
        <label className={styles['description']}>
            {description}
        </label>
        <div className={styles['chart']}> <Line data={data} options={{
            // animations: {
            //     tension: {
            //         duration: 1000,
            //         easing: 'linear',
            //         from: 1,
            //         to: 0,
            //         loop: true
            //     }
            // },
            tension: 0.3,
            elements: {
                point: {
                    radius: 0
                }
            },
            maintainAspectRatio: false,
            borderWidth: 1,
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
                    },
                    ticks: {
                        color: '#fff',
                        maxTicksLimit: 6,
                        font: {
                            family: 'Montserrat',
                            weight: 600,
                            size: 14,
                        },
                        padding: 12,

                    },
                },
                x: {
                    beginAtZero: false,
                    border: {
                        color: 'white',
                    },
                    ticks: {
                        maxTicksLimit: 4,
                        color: '#fff',
                        font: {
                            family: 'Montserrat',
                            weight: 600,
                            size: 14,
                        }
                    }
                }
            }
        }} /></div></div>
}