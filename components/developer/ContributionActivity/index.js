import React from 'react'
import ContributionCalendar from './ContributionCalendar'
import ListProjectContribution from './ListProjectContribution'

const ContributionActivity = () => {
    return (
        <div>
            <h2 className="title">
                CONTRIBUTIONs Activity
            </h2>
            <div className='mt-[48px] flex gap-[48px] justify-between'>
                <ContributionCalendar />
                <ListProjectContribution />
            </div>
        </div>
    )
}

export default ContributionActivity