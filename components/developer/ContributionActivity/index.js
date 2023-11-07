import React from 'react'
import ContributionCalendar from './ContributionCalendar'
import ListProjectContribution from './ListProjectContribution'

const ContributionActivity = () => {
    return (
        <div className='pb-[48px] md:pb-[128px] border-b-[1px] border-solid border-[#ffffff3d]'>
            <h2 className="title">
                CONTRIBUTIONs Activity
            </h2>
            <div className='mt-[48px] flex gap-[32px] sm:gap-[48px] justify-between flex-col md:flex-row'>
                <ContributionCalendar />
                <ListProjectContribution />
            </div>
        </div>
    )
}

export default ContributionActivity