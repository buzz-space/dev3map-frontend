import { useEffect, useState } from "react"
import ChartLayout from "../ChartLayout"
import { handleMonth } from "~/utils/strings";
import moment from "moment";

export default function ChartActiveAll({ data }) {
    function process() {
        return {
            labels: data?.map((dt) => moment(dt?.day).format('YYYY')),
            datasets: [{
                label: 'TOTAL MONTHLY ACTIVE DEVS',
                data: data?.map((dt) => Number(dt?.total_full_time) + Number(dt?.total_part_time)),
                labelT: data?.map((dt) => {
                    // `${handleMonth(dt?.month)}/${dt?.year}`
                    return moment(dt?.day).format('DD-MM-YYYY');
                }),
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