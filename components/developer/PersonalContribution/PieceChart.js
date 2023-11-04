import { Chart as ChartJS, registerables } from 'chart.js';
import { useEffect, useRef } from 'react';
import { Pie } from "react-chartjs-2";

ChartJS.register(...registerables);

export default function PieceChart({ data }) {
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

    return <Pie ref={chartRef} data={data} options={{

        responsive: true,
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
        },
    }} />
}