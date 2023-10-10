import Container from '~/components/base/Container';
import styles from './styles.module.scss';
import { Github } from '~/public/assets/svgs-title';
import TabDynamic from '~/components/base/TabDynamic';
import ActivityTrend from './ActivityTrend';
import { useEffect, useState } from 'react';
import { handleMonth } from '~/utils/strings';
import BoardStatistics from './BoardStatistics';
import {
  CommitHorizontal,
  Developer,
  Fork,
  Issue,
  Person,
  PullRequest,
  StarOutline,
  StreamLine,
} from '~/public/assets/svgs';
import AnotherBoard from './AnotherBoard';
import MonthlyActiveDevs from './MonthlyActiveDevs';
import { formatNumber } from '~/utils/number';

export default function GithubStatistics({ dataTotal = {}, data = [], homePage = true }) {
  const [userCommit, setUserCommit] = useState([]);
  const [userCode, setUserCode] = useState([]);

  function getMaxDivisibleSubarray(arr) {
    let maxLength = 0;
    let maxLengthIndex = -1;

    for (let i = 0; i < arr.length; i++) {
      let currentLength = 0;

      for (let j = i; j < arr.length; j++) {
        currentLength += 1;

        if (currentLength % 4 === 0 && currentLength > maxLength) {
          maxLength = currentLength;
          maxLengthIndex = i;
        }
      }
    }

    if (maxLengthIndex === -1) {
      return [];
    } else {
      return arr.slice(maxLengthIndex, maxLengthIndex + maxLength);
    }
  }
  useEffect(() => {
    function fn() {
      if (data) {
        let dt = [];
        // if (window.innerWidth < 600) {
        //     dt = [...data].slice(0, (window.innerWidth - 100) / 10);
        // }
        // else {
        //     dt = data
        // }
        // let dataSorted = dt?.sort((a, b) => {
        //     if (a.year !== b.year) {
        //         return a.year - b.year; // Sort by year in ascending order
        //     } else {
        //         return a.month - b.month; // Sort by month in ascending order
        //     }
        // });
        let dataSorted = [...data];
        setUserCommit(() => {
          let value = dataSorted.reduce(
            (prev, curr) => {
              prev.commit.push({ number: Number(curr?.total_commit), ...curr });
              prev.dev.push({ number: Number(curr?.active_developer), ...curr });
              return prev;
            },
            { commit: [], dev: [] }
          );
          return value;
        });
        setUserCode(() => {
          let value = dataSorted.reduce(
            (prev, curr) => {
              prev.addition.push({ number: Number(curr?.additions), ...curr });
              prev.deletion.push({ number: Number(curr?.deletions), ...curr });
              return prev;
            },
            { addition: [], deletion: [] }
          );
          return value;
        });
      }
    }
    fn();
    window.addEventListener('resize', fn);
    return () => {
      window.removeEventListener('resize', fn);
    };
  }, [data]);

  function formatDate(data) {
    let value = Number(data);
    let date = Math.floor(value);
    let floatNum = (value - date) * 24;
    let hour = Math.round(floatNum);
    let result = date + ' DAYS';
    if (hour > 0) {
      result += ' ' + hour + ' HOURS';
    }
    return result;
  }

  return (
    <Container className={styles['container']} id='github-statistics'>
      <h2 className="title">
        GITHUB STATISTICS <Github />
      </h2>
      <div className={styles['information-board']}>
        <BoardStatistics
          total={dataTotal?.total_commit}
          icon={<CommitHorizontal />}
          colorIcon="#03DAC6"
          label="TOTAL COMMITS"
          des={`Total Commits on ${homePage ? 'Cosmos' : "the project's Github"}`}
        />
        <BoardStatistics
          total={dataTotal?.total_developer}
          icon={<Developer />}
          colorIcon="#18A0FB"
          label="ESTIMATED ACTIVE DEVELOPERS"
          // des={`The number of developers who are working on ${homePage ? 'Cosmos' : "the project's Github"
          //   } in the last 30 days.`}
          des={`Contributors who frequently active on ${homePage ? 'Cosmos' : "the project's Github"} over the last 90 days`}
        />
      </div>
      <div className={styles['another-information-board']}>
        <AnotherBoard
          label="ISSUES"
          value={formatNumber(dataTotal?.total_issue)}
          icon={<Issue />}
          des={`This is the number of issues that have been created on ${homePage ? 'Cosmos' : 'Github'}.`}
        />
        <AnotherBoard
          label="ISSUE PERFORMANCE"
          value={formatDate(dataTotal?.issue_performance)}
          icon={<StreamLine />}
          des={`On average, this is how fast an issue is solved on ${homePage ? 'Cosmos' : 'Github'}.`}
        />
        <AnotherBoard
          label="COMMUNITY ATTRIBUTES"
          value={`${formatNumber(Math.round(dataTotal?.community_attribute))} PULLS`}
          icon={<Person />}
          des={`This metric indicates the contribution of community to every repositories on ${homePage ? 'Cosmos' : 'Github'
            }.`}
        />
        <AnotherBoard
          label="PULL REQUESTS"
          value={formatNumber(dataTotal?.total_pull_request)}
          icon={<PullRequest />}
          des={`Total Pull Requests that have been created on ${homePage ? 'Cosmos' : 'Github'}`}
        />
        <AnotherBoard
          label="STARS"
          value={formatNumber(dataTotal?.total_star)}
          icon={<StarOutline />}
          des={`The number of Stars among all Github repositories on ${homePage ? 'Cosmos' : 'Github'}.`}
        />
        <AnotherBoard
          label="FORKS"
          value={formatNumber(dataTotal?.total_fork)}
          icon={<Fork />}
          des={`This is the number of forks that currently exist in ${homePage ? 'Cosmos' : 'Github'}.`}
        />
      </div>
      <ActivityTrend userCode={userCode} userCommit={userCommit} />
      {/* <MonthlyActiveDevs data={data} /> */}
    </Container>
  );
}
