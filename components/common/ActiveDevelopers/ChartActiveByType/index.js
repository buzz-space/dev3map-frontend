import ChartLayout from "../ChartLayout";
import { useEffect, useState } from "react";


export default function ChartActiveByType({ data }) {
    function process() {
        return {
            labels: data?.map((dt) => dt?.year),
            datasets: [{
                label: 'FULL-TIME DEVS',
                data: data?.map((dt) => dt?.total_full_time),
                backgroundColor: '#BB86FC',
                borderColor: '#BB86FC',
            }, {
                label: 'PART-TIME DEVS',
                data: data?.map((dt) => dt?.total_part_time),
                backgroundColor: '#03DAC6',
                borderColor: '#03DAC6',
            }, {
                label: 'ONE-TIME DEVS',
                data: data?.map((dt) => dt?.total_one_time),
                backgroundColor: '#18A0FB',
                borderColor: '#18A0FB',
            }]
        }
    }

    const [dataChart, setDataChart] = useState(process());

    useEffect(() => {
        setDataChart(process());
    }, [data])

    return <ChartLayout description={"BY DEVELOPER TYPE"} data={dataChart} />

}