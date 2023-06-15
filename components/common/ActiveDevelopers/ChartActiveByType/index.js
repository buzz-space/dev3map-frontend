import ChartLayout from "../ChartLayout";
import { useEffect, useState } from "react";
import { dataOneTime, dataPartime, data as datas } from "./data";

export default function ChartActiveByType() {
    const [data, setData] = useState(() => {
        return {
            labels: datas?.map((data) => data.year),
            datasets: [{
                label: 'FULL-TIME DEVS',
                data: datas?.map((data) => data.active),
                backgroundColor: '#BB86FC',
                borderColor: '#BB86FC',
            }, {
                label: 'PART-TIME DEVS',
                data: dataPartime?.map((data) => data.active),
                backgroundColor: '#03DAC6',
                borderColor: '#03DAC6',
            }, {
                label: 'ONE-TIME DEVS',
                data: dataOneTime?.map((data) => data.active),
                backgroundColor: '#18A0FB',
                borderColor: '#18A0FB',
            }]
        }
    })

    return <ChartLayout description={"BY DEVELOPER TYPE"} data={data} />

}