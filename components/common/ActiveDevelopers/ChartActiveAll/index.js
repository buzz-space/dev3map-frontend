import { useEffect, useState } from 'react';
import ChartLayout from '../ChartLayout';
import { handleMonth } from '~/utils/strings';

export default function ChartActiveAll({ data }) {
  function process() {
    return {
      labels: data?.map((dt) => dt?.year),
      datasets: [
        {
          label: 'TOTAL ACTIVE DEVS',
          data: data?.map((dt) => Number(dt?.total_full_time) + Number(dt?.total_part_time)),
          labelT: data?.map((dt) => `${handleMonth(dt?.month)}/${dt?.year}`),
          backgroundColor: '#BB86FC',
          borderColor: '#BB86FC',
        },
      ],
    };
  }
  const [dataChart, setDataChart] = useState(process());

  useEffect(() => {
    setDataChart(process());
  }, [data]);

  return <ChartLayout description={'ALL'} data={dataChart} />;
}
