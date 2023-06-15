import { useState } from "react"
import { data as datas } from "./data"
import ChartLayout from "../ChartLayout"
export default function ChartActiveAll() {
    const [data, setData] = useState(() => {
        return {
            labels: datas?.map((data) => data.year),
            datasets: [{
                label: 'TOTAL MONTHLY ACTIVE DEVS',
                data: datas?.map((data) => data.active),
                backgroundColor: '#BB86FC',
                borderColor: '#BB86FC',
            }]
        }
    })
    return <ChartLayout description={"ALL"} data={data} />
}