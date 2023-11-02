import React from 'react'
import Container from '~/components/base/Container'
import AccountInfor from '~/components/developer/AccountInfor'
import ContributionActivity from '~/components/developer/ContributionActivity'
import PersonalContribution from '~/components/developer/PersonalContribution'
import RepositoriesDev from '~/components/developer/RepositoriesDev'

const DeveloperDetailContainer = () => {
    return (
        <Container className='mt-[80px]'>
            <AccountInfor />
            <div className='mt-[48px] md:mt-[140px]'></div>
            <ContributionActivity />
            <PersonalContribution />
            <RepositoriesDev />
        </Container>
    )
}

export default DeveloperDetailContainer