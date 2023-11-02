import React, { useRef } from 'react'
import TitleSecond from '../TitleSecond'
import Dropdown from '~/components/base/Dropdown'

const ContributionCalendar = () => {
    return (
        <div>
            <div className='flex items-center justify-between gap-[16px]'>
                <TitleSecond>142 CONTRIBUTIONS</TitleSecond>
                <div>
                    <Dropdown options={
                        [
                            {
                                text: 'January',
                                value: 'january'
                            },
                            {
                                text: 'February',
                                value: 'february'
                            }
                        ]
                    } />
                </div>
            </div>
        </div>
    )
}

export default ContributionCalendar