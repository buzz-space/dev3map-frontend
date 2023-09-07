import React from 'react';
import Container from '~/components/base/Container';
import styles from './styles.module.scss';
import { CommitHorizontal, Fork, Issue, Person, PullRequest, Star } from '~/public/assets/svgs';
import BoardMetric from './BoardMetric';

const data = [
  {
    icon: <CommitHorizontal />,
    color: '#03DAC6',
    title: 'COMMITS',
    des: 'This is the number of times the source code has been updated. A higher commit count indicates that there are more development activities going into the repository.',
  },
  {
    icon: <Person />,
    color: '#18A0FB',
    title: 'CONTRIBUTORS',
    des: 'This is anyone who has made a change to a GitHub repository. This can include adding code, fixing bugs, uploading new files or writing documentation. The more active contributors a project has, the more likely it will ship new features in the future.',
  },
  {
    icon: <Issue />,
    color: '#03DAC6',
    title: 'ISSUES',
    des: 'There are developers who scrutinized the code and found bugs that need to be fixed by the core team. Projects that have no Issue can indicate one of two things: either there is no bug with the repository or no one is interested in the coin to even file an Issue request.',
  },
  {
    icon: <PullRequest />,
    color: '#18A0FB',
    title: 'PULL REQUEST',
    des: 'In simple terms, a pull request is a way for contributors to tell the core developers that they have improved the source code and would like the core developer to merge it into the source code. A higher Merged Pull Request figure indicates that more developers are contributing more features and code to the repository.',
  },
  {
    icon: <Star />,
    color: '#03DAC6',
    title: 'STARS',
    des: 'This is the Github version of the Facebook Like button. Similar to the Facebook Like count, a higher Github Star count indicates that more developers appreciate the work that is being done on this code repository.',
  },
  {
    icon: <Fork />,
    color: '#18A0FB',
    title: 'FORKS',
    des: 'Developers who are interested in contributing to the source code will also need to fork the source code first before they can contribute. A higher fork count indicates that there are more developers who are interested in copying or contributing to this source code. This indicates a higher developer interest in the source code and potentially some sort of technical innovation where developers are interested in forking the code to launch their own token.',
  },
];

const OurMetrics = () => {
  return (
    <Container className={styles['container']}>
      <h3 className="title">Our Metrics</h3>
      <p className={styles['des']}>
        After conducting multiple research and findings, we concluded that there are six GitHub indicators we should
        look into in order to measure a project's developer activity.
      </p>
      <div className={styles['list-metrics']}>
        {data?.map((item, index) => {
          return <BoardMetric key={index} index={index} {...item} />;
        })}
      </div>
    </Container>
  );
};

export default OurMetrics;
