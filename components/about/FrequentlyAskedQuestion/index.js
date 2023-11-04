import React from 'react';
import Container from '~/components/base/Container';
import styles from './styles.module.scss';
import AccordionFAQ from './AccordionFAQ';
import classNames from 'classnames';

const data = [
  {
    question: 'Why should we measure developer activity?',
    answer: (
      <>
        In crypto space, there are multiple factors that can affect the price of a token, such as supply and demand,
        market sentiment and macroeconomic factors.
        <br />
        <br />
        Apart from these factors, there is an early indicator we should pay attention to is developer activity.A project
        with good developer performance usually ships high quality applications that deliver more value to end users,
        which attracts more customers, and potentially, draws more developers to the ecosystem.
        <br />
        <br />
        At <strong>dev3map.com</strong>, we believe better investment decisions could be made if we have more data on
        developer activity.As most Crypto projects are open- source, and most developer activity of a specific project
        can be tracked through GitHub.Some of the most popular crypto projects on GitHub include Ethereum, Bitcoin and
        Cosmos.
      </>
    ),
  },
  {
    question: 'How do you collect the data to produce this dashboard?',
    answer: (
      <>
        We currently use a combination of proprietary tools and crowdsourcing to track and analyze the activity of
        developers. We divide the entire process into 4 steps:
        <ul className={styles['list-ul']}>
          <li>
            <strong>Sourcing project repositories:</strong> We start by collecting repositories of every project that is
            currently active on Cosmos, including repositories from a specific chain and projects that are possibly run
            on that chain.
          </li>
          <li>
            <strong>Crawling source code:</strong> We review all of the repositories to ensure that the data they
            provide has legitimate origin. We prioritize repositories that belong to a github organization that is
            featured on project websites.
          </li>
          <li>
            <strong>Crawling source code:</strong> We aggregate data Github to track contributors, commit logs,
            repository metadata, and other information. This allows us to identify original authors based on
            fingerprinted code, detect identical codes, and understand which projects are actually linked together.
          </li>
          <li>
            <strong>Cleaning data:</strong> Currently, a combination of automated techniques and manual review is used
            to clean the data. We use automated techniques to detect code duplicates, and we use manual review to
            identify potential issues with the data.
          </li>
          <li>
            <strong>QA and feedback:</strong> We constantly keep in touch with some of the best communities in the
            ecosystem, such as Notional Labs and SparkIBC. They will help us validate the data, identify projects that
            we may have missed, identify data quality issues, and cross-check our numbers with their internal numbers.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: `Which metrics on Github are counted to measure a project's developer activity?`,
    answer: (
      <>
        After conducting multiple research and findings, we concluded that there are 5 indicators we should look into:
        <ul className={styles['list-ul']}>
          <li>
            <strong>Commits:</strong> This is the number of times the source code has been updated. A higher commit
            count indicates that there are more development activities going into the repository.
          </li>
          <li>
            <strong>Contributors:</strong> This is anyone who has made a change to a GitHub repository. This can include
            adding code, fixing bugs, uploading new files or writing documentation. The more active contributors a
            project has, the more likely it will ship new features in the future.
          </li>
          <li>
            <strong>Issues:</strong> There are developers who scrutinized the code and found bugs that need to be fixed
            by the core team. Projects that have no Issue can indicate one of two things: either there is no bug with
            the repository or no one is interested in the coin to even file an Issue request.
          </li>
          <li>
            <strong>Pull Request:</strong> In simple terms, a pull request is a way for contributors to tell the core
            developers that they have improved the source code and would like the core developer to merge it into the
            source code. A higher Merged Pull Request figure indicates that more developers are contributing more
            features and code to the repository.
          </li>
          <li>
            <strong>Stars:</strong> This is the Github version of the Facebook Like button. Similar to the Facebook Like
            count, a higher Github Star count indicates that more developers appreciate the work that is being done on
            this code repository.
          </li>
          <li>
            <strong>Forks:</strong> Developers who are interested in contributing to the source code will also need to
            fork the source code first before they can contribute. A higher fork count indicates that there are more
            developers who are interested in copying or contributing to this source code. This indicates a higher
            developer interest in the source code and potentially some sort of technical innovation where developers are
            interested in forking the code to launch their own token.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: 'How do we evaluate developer performance?',
    answer: (
      <ul className={classNames(styles['list-ul'], styles['ul-type-circle'])}>
        <li>
          <strong>Active Developers:</strong> Are contributors who made commits on the original repositories of the
          projects. This means that developers who merge pull requests and close issues are not active developers on the
          project nor developers that make commits on forks.
        </li>
        <li>
          <strong>Top Developers:</strong> These are contributors that have contributed the most among all contributors
          to the project's github.
        </li>
        <li>
          <strong>Issue Performance:</strong> This metric shows how fast the team solves an Issue on Github on average.
          Therefore, we can subjectively see the effort and seriousness they have put on their product.
        </li>
        <li>
          <strong>Community Attributes:</strong> This indicates how many contributions have been made by people outside
          the organization (in this case, we refer them as "community contributors") on average.
        </li>
      </ul>
    ),
  },
  {
    question: 'Is there any paid tier for additional data?',
    answer:
      'No. We do not charge for any additional access to data. All the data present on our dashboard is everything we currently offer.',
  },
  {
    question: 'Can I use this data?',
    answer: (
      <>
        Sure, you can use the data for non-commercial purposes only. However, you must cite Dev3map as the originator
        and link back to <strong>www.dev3map.com</strong> as the source immediately adjacent to the location that
        showcases the data. This means that you may not hide a link to this data as a citation anywhere else and imply
        that this data is your own.
        <br />
        <br />
        If you directly use one of the graphs presented on this site, say in a screenshot, you must also cite Dev3map,
        and link back to <strong>www.dev3map.com</strong> as the source of the data.
        <br />
        <br />
        This data is not for commercial purposes as it is a public good that should be used by the community.
      </>
    ),
  },
  {
    question: 'What are the limitations of this dashboard?',
    answer: (
      <ul className={classNames(styles['list-ul'], styles['ul-type-circle'])}>
        <li>
          <strong>Quality and Complexity of Commits</strong> - Some commits may be minor changes, whereas others
          represent hours of accumulated research and analysis. Despite these caveats, we consider the numbers in our
          dashboard accurate.
        </li>
        <li>
          <strong>Undercounting of Total Developers</strong> - The number of developers building in Cosmos is likely
          much higher than the number reported in our dashboard. This is because our dashboard only reflects on
          developers who have contributed unique code to open-source projects. However, there are many other developers
          who are working on Cosmos, such as those who are working on closed-source projects or who are involved in
          testing or release engineering. Additionally, the dashboard does not account for the many other roles that are
          involved in building Cosmos, such as product managers, designers, and marketing professionals. As a result,
          the report is likely a dramatic undercounting of the number of people who are building in this space.
        </li>
      </ul>
    ),
  },
];

const FrequentlyAskedQuestion = () => {
  return (
    <Container className={styles['container']}>
      <h3 className="title">frequently asked questions</h3>
      <ul className={styles['list-faq']}>
        {data?.map((item, index) => {
          return <AccordionFAQ question={item?.question} answer={item?.answer} />;
        })}
      </ul>

    </Container>
  );
};

export default FrequentlyAskedQuestion;
