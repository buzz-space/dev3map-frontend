import React, { useEffect, useState } from 'react'
import TabDynamic from '~/components/base/TabDynamic'
import PieceChart from './PieceChart'

const data = [
    {
        label: 'Commits',
        number: 33,
    },
    {
        label: 'Issue',
        number: 33,
    },
    {
        label: 'Pull',
        number: 33,
    }
]

const PersonalContribution = () => {
    const [active, setActive] = useState()
    const [dataChart, setDataChart] = useState({
        labels: data.addition?.map((data) => data.label),
        datasets: [{
            label: data.addition?.map((data) => data.label),
            data: data?.map((data) => data.number),
            backgroundColor: ['rgba(24, 160, 251, 0.48)', 'rgba(3, 218, 198, 0.48)', '#BB86FC'],
            borderColor: '#000',
        }]
    });

    useEffect(() => {
        setDataChart(() => {
            return {
                labels: data.addition?.map((data) => data.label),
                datasets: [{
                    label: data.addition?.map((data) => data.label),
                    data: data?.map((data) => data.number),
                    backgroundColor: ['rgba(24, 160, 251, 0.48)', 'rgba(3, 218, 198, 0.48)', '#BB86FC'],
                    borderColor: '#000',
                }]
            }
        })
    }, [])

    return (
        <div className='mt-[128px]'>
            <div className='flex items-center gap-4 justify-between w-full'>
                <h2 className='title'>PERSONAL CONTRIBUTIONS</h2>
                <TabDynamic
                    data={[
                        {
                            label: 'All',
                        },
                        {
                            label: '7D',
                        },
                        {
                            label: '30D'
                        }
                    ]}
                    setIndexActive={setActive}
                />
            </div>
            <div>
                <PieceChart data={dataChart} />
            </div>
        </div>
    )
}

export default PersonalContribution