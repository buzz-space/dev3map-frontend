import { handleMonth } from "~/utils/strings";
import ChartLayout from "../ChartLayout";
import { useEffect, useState } from "react";
import moment from "moment";


export default function ChartActiveByType({ data }) {
    function process() {
        return {
            labels: data?.map((dt) => moment(dt?.day).format('YYYY')),
            datasets: [{
                label: 'FULL-TIME DEVS',
                data: data?.map((dt) => dt?.total_full_time),
                labelT: data?.map((dt) => {
                    // `${handleMonth(dt?.month)}/${dt?.year}`
                    return moment(dt?.day).format('DD-MM-YYYY');
                }),
                backgroundColor: '#BB86FC',
                borderColor: '#BB86FC',
            }, {
                label: 'PART-TIME DEVS',
                data: data?.map((dt) => dt?.total_part_time),
                labelT: data?.map((dt) => {
                    // `${handleMonth(dt?.month)}/${dt?.year}`
                    return moment(dt?.day).format('DD-MM-YYYY');
                }),
                backgroundColor: '#03DAC6',
                borderColor: '#03DAC6',
            }, {
                label: 'ONE-TIME DEVS',
                data: data?.map((dt) => dt?.total_one_time),
                labelT: data?.map((dt) => {
                    // `${handleMonth(dt?.month)}/${dt?.year}`
                    return moment(dt?.day).format('DD-MM-YYYY');
                }),
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