import { useEffect, useState } from "react"
import ChartLayout from "../ChartLayout"

export default function ChartActiveAll({ data }) {
    function process() {
        return {
            labels: data?.map((dt) => dt?.year),
            datasets: [{
                label: 'TOTAL MONTHLY ACTIVE DEVS',
                data: data?.map((dt) => Number(dt?.total_full_time) + Number(dt?.total_part_time)),
                backgroundColor: '#BB86FC',
                borderColor: '#BB86FC',
            }]
        }
    }
    const [dataChart, setDataChart] = useState(process());

    useEffect(() => {
        setDataChart(process());
    }, [data])


    return <ChartLayout description={"ALL"} data={dataChart} />
}