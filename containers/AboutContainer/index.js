import React from 'react'
import styles from './styles.module.scss';
import IntroAbout from '~/components/about/IntroAbout'
import BackedByTheBest from '~/components/about/BackedByTheBest';
import Disclaimer from '~/components/about/Disclaimer';
import HelpImprove from '~/components/about/HelpImprove';
import FrequentlyAskedQuestion from '~/components/about/FrequentlyAskedQuestion';
import OurMetrics from '~/components/about/OurMetrics';
import BackgroundAbout from '~/components/common/BackgroundAbout';

const AboutContainer = () => {
    return (
        <div className={styles['about-container']}>
            <BackgroundAbout />
            <div className={styles['inside']}>
                <IntroAbout />
                <BackedByTheBest />
                <OurMetrics />
                <FrequentlyAskedQuestion />
                <HelpImprove />
                <Disclaimer />
            </div>
        </div>
    )
}

export default AboutContainer