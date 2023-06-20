import { useEffect, useState } from "react"
import ChartLayout from "../ChartLayout"

export default function ChartActiveAll({ data }) {
    function process() {
        return {
            labels: data?.map((dt) => dt?.year),
            datasets: [{
                label: 'TOTAL MONTHLY ACTIVE DEVS',
                data: data?.map((dt) => dt?.total_developer),
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