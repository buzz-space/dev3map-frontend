import Container from '~/components/base/Container';
import styles from './styles.module.scss';

import { useGetChainList } from '~/hooks/api/useChainList';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import IconSort from './IconSort';
import OtherInforRes from './OtherInforRes';
import { Checkbox, CommitHorizontal, Fork, Issue, Person, PullRequest, Repo, Search, Star } from '~/public/assets/svgs';
import { formatNumber } from '~/utils/number';
import { Blockchain } from '~/public/assets/svgs-title';
import TabDynamic from '~/components/base/TabDynamic';
import clsx from 'clsx';
import { stylePercent } from '~/utils/base';
import Image from 'next/legacy/image';
import { pathImgTemp } from '~/core/contants';

export default function StatisChainTable() {
  const { data, refetch } = useGetChainList();
  const router = useRouter();
  const [value, setValue] = useState('');
  const [typeSort, setTypeSort] = useState('');
  const [directSort, setDirectSort] = useState({
    commits: '',
    contributors: '',
    issues_solved: '',
    stars: '',
    forks: '',
    index: '',
  });

  function getValue(item, prop) {
    let label = '';
    if (indexTab === 0) {
      label = 'all';
    } else if (indexTab === 1) {
      label = '7_days';
    } else {
      label = '30_days';
    }
    let value = item?.stats?.filter((item) => {
      return item?.range === label;
    });
    if (value[0]) {
      return Number(value[0][prop]);
    } else {
      return 0;
    }
  }
  const [dataTable, setDataTable] = useState([]);
  const [dataFinished, setDataFinished] = useState([]);
  const [indexTab, setIndexTab] = useState(0);
  useEffect(() => {
    setDataFinished(() => {
      if (data?.data) {
        let dt = [...data?.data]?.map((item, index) => {
          return {
            ...item,
            stats: [
              {
                ...item?.stats[0],
                developers: item?.stats[0]?.full_time_developer + item?.stats[0]?.part_time_developer,
                index: index + 1,
              },
              {
                ...item?.stats[1],
                developers: item?.stats[1]?.full_time_developer + item?.stats[1]?.part_time_developer,
                index: index + 1,
              },
              {
                ...item?.stats[2],
                developers: item?.stats[2]?.full_time_developer + item?.stats[2]?.part_time_developer,
                index: index + 1,
              },
              {
                ...item?.stats[3],
                developers: item?.stats[3]?.full_time_developer + item?.stats[3]?.part_time_developer,
                index: index + 1,
              },
            ],
          };
        });
        return dt;
      }
      return [];
    });
  }, [data]);
  useEffect(() => {
    refetch();
  }, []);
  useEffect(() => {
    if (dataFinished && typeSort == '') {
      setDataTable(dataFinished);
    }
  }, [typeSort, dataFinished]);

  function sort(type) {
    let dt = [];
    function sortDirect(type, prop) {
      if (dataFinished?.length > 0 && dataFinished[0]?.stats[0].hasOwnProperty(prop)) {
        let obj = { ...directSort };
        Object.keys(obj).forEach((key) => {
          obj[key] = '';
        });
        if (directSort[type] == 'up') {
          setDirectSort((prev) => {
            return { ...obj, [type]: 'down' };
          });
          return dataFinished?.sort((a, b) => getValue(a, prop) - getValue(b, prop));
        } else {
          setDirectSort((prev) => {
            return { ...obj, [type]: 'up' };
          });
          return dataFinished?.sort((a, b) => getValue(b, prop) - getValue(a, prop));
        }
      } else {
        return [];
      }
    }
    if (dataFinished) {
      if (type == 'commits') {
        dt = sortDirect(type, 'total_commits');
      } else if (type == 'index') {
        dt = sortDirect(type, 'index');
      } else if (type == 'developers') {
        dt = sortDirect(type, 'developers');
      } else if (type == 'repos') {
        dt = sortDirect(type, 'total_repository');
      } else if (type == 'stars') {
        dt = sortDirect(type, 'total_star');
      } else if (type == 'forks') {
        dt = sortDirect(type, 'total_fork');
      } else if (type == 'issues') {
        dt = sortDirect(type, 'total_issue_solved');
      } else if (type == 'pull') {
        dt = sortDirect(type, 'total_pull_merged');
      } else {
        dt = dataFinished;
      }
    }
    setTypeSort(type);
    setDataTable(dt);
  }

  function onClickSearch() {
    setDataTable((prev) => {
      let data = [...prev].filter((item) => {
        return item?.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
      });
      return data;
    });
  }

  useEffect(() => {
    if (!value) {
      setDataTable(dataFinished);
    }
  }, [value]);

  function handleTextPercent(text) {
    if (indexTab === 0) {
      return '';
    } else {
      if (text) {
        let result = text;
        if (Number(text) > 0) {
          result = '+' + text;
        }
        return result + '%';
      } else {
        return '0%';
      }
    }
  }

  return (
    <Container className={styles['container']}>
      <h6 className="title">
        CHAINS ({dataTable?.length})
        <span>
          <Blockchain />
        </span>
      </h6>
      <div className={styles['filter']}>
        <div className={styles['search-bar']}>
          <input
            type="search"
            placeholder="Search chain"
            value={value}
            onChange={(e) => {
              setValue(e.currentTarget.value);
              onClickSearch();
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                // 👇 Get input value
                onClickSearch();
              }
            }}
          />
          <Search onClick={onClickSearch} />
        </div>
        <TabDynamic data={[{ label: 'All' }, { label: '7D' }, { label: '30D' }]} setIndexActive={setIndexTab} />
      </div>
      <div className={styles['container-table']}>
        <div className={styles['container-inside']}>
          <table className={styles['table']}>
            <thead>
              <tr>
                <th>
                  <div className={styles['sort-table']} onClick={() => sort('index')}>
                    <label>NO.</label>
                    <IconSort direct={directSort?.index} />
                  </div>
                </th>
                <th className={styles['chain']}>CHAIN</th>
                <th className={styles['commits']}>
                  <div className={styles['sort-table']} onClick={() => sort('commits')}>
                    <label>COMMITS</label>
                    <IconSort direct={directSort?.commits} />
                    <div className={styles['des']}>This is the number of times the source code has been updated.</div>
                  </div>
                </th>
                <th>
                  <div className={styles['sort-table']} onClick={() => sort('developers')}>
                    <label>DEVELOPERS</label>
                    <IconSort direct={directSort?.developers} />
                    {/* <div className={styles['des']}>
                      Number of contributors to the project's github. Be aware that the number may include contributors
                      outside the organization.
                    </div> */}
                  </div>
                </th>
                <th>
                  <div className={styles['sort-table']} onClick={() => sort('repos')}>
                    <label>REPOS</label>
                    <IconSort direct={directSort?.repos} />
                    <div className={styles['des']}>
                      How many repositories on a project's github. A repository is where the team store, manage, and
                      track changes to their files.
                    </div>
                  </div>
                </th>
                <th>
                  <div className={styles['sort-table']} onClick={() => sort('stars')}>
                    <label>STARS</label>
                    <IconSort direct={directSort?.stars} />
                    <div className={styles['des']}>
                      Star count indicates how many developers are appreciating the works that are being done on a
                      project's Github
                    </div>
                  </div>
                </th>
                <th>
                  <div className={styles['sort-table']} onClick={() => sort('forks')}>
                    <label>FORKS</label>
                    <IconSort direct={directSort?.forks} />
                    <div className={styles['des']}>
                      Fork count indicates that how many developers are interested in copying or contributing to the
                      project's source codes.
                    </div>
                  </div>
                </th>
                <th>
                  <div className={styles['sort-table']} onClick={() => sort('issues')}>
                    <label>ISSUES</label>
                    <IconSort direct={directSort?.issues} />
                    <div className={styles['des']}>
                      Issue counts indicates that there are bugs or new ideas are presents accross the repositories and
                      thus made people interested enough to discuss about them.
                    </div>
                  </div>
                </th>
                <th>
                  <div className={styles['sort-table']} onClick={() => sort('pull')}>
                    <label>PULLS</label>
                    <IconSort direct={directSort?.pull} />
                    <div className={styles['des']}>
                      Usually, developers will have most of their work done in their own working space and after the
                      work is done, the result will be submitted to a repository through a Pull request, which includes
                      codes and files.
                      <br />
                      The more pulls there are, the more work is being done on the project.
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {dataTable?.length > 0 &&
                dataTable.map((item, index) => {
                  return (
                    <tr
                      key={item?.id}
                      className={styles['row']}
                      onClick={() => {
                        window.open(`/projects/${item?.github_prefix}`, '_blank');
                      }}
                    >
                      <td>#{index + 1}</td>
                      <td>
                        <div className={styles['chain']}>
                          <div className={styles['logo']}>
                            <Image
                              src={item?.avatar || pathImgTemp}
                              layout="fill"
                              objectFit="contain"
                              className="rounded-full"
                              alt={item?.name}
                            />
                          </div>
                          <div className={styles['infor-chain']}>
                            <label className={styles['name']}>{item?.name}</label>
                            <label className={styles['des']}>{item?.symbol}</label>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className={styles['value-table']}>
                          <label>{formatNumber(getValue(item, 'total_commits'))}</label>
                          <label
                            className={clsx(
                              styles['percent-value'],
                              styles[stylePercent(getValue(item, 'commit_percent'))]
                            )}
                          >
                            {handleTextPercent(getValue(item, 'commit_percent'))}
                          </label>
                        </div>
                      </td>
                      <td>
                        <div className={styles['value-table']}>
                          <label>{formatNumber(getValue(item, 'developers'))}</label>
                          <label
                            className={clsx(
                              styles['percent-value'],
                              styles[stylePercent(getValue(item, 'developer_percent'))]
                            )}
                          >
                            {handleTextPercent(getValue(item, 'developer_percent'))}
                          </label>
                        </div>
                      </td>
                      <td>
                        <div className={styles['value-table']}>
                          <label>{formatNumber(getValue(item, 'total_repository'))}</label>
                          <label
                            className={clsx(
                              styles['percent-value'],
                              styles[stylePercent(getValue(item, 'repository_percent'))]
                            )}
                          >
                            {handleTextPercent(getValue(item, 'repository_percent'))}
                          </label>
                        </div>
                      </td>
                      <td>
                        <div className={styles['value-table']}>
                          <label>{formatNumber(getValue(item, 'total_star'))}</label>
                          <label
                            className={clsx(
                              styles['percent-value'],
                              styles[stylePercent(getValue(item, 'star_percent'))]
                            )}
                          >
                            {handleTextPercent(getValue(item, 'star_percent'))}
                          </label>
                        </div>
                      </td>
                      <td>
                        <div className={styles['value-table']}>
                          <label>{formatNumber(getValue(item, 'total_fork'))}</label>
                          <label
                            className={clsx(
                              styles['percent-value'],
                              styles[stylePercent(getValue(item, 'fork_percent'))]
                            )}
                          >
                            {handleTextPercent(getValue(item, 'fork_percent'))}
                          </label>
                        </div>
                      </td>
                      <td>
                        <div className={styles['value-table']}>
                          <label>{formatNumber(getValue(item, 'total_issue_solved'))}</label>
                          <label
                            className={clsx(
                              styles['percent-value'],
                              styles[stylePercent(getValue(item, 'issue_percent'))]
                            )}
                          >
                            {handleTextPercent(getValue(item, 'issue_percent'))}
                          </label>
                        </div>
                      </td>
                      <td>
                        <div className={styles['value-table']}>
                          <label>{formatNumber(getValue(item, 'total_pull_request'))}</label>
                          <label
                            className={clsx(
                              styles['percent-value'],
                              styles[stylePercent(getValue(item, 'pull_percent'))]
                            )}
                          >
                            {handleTextPercent(getValue(item, 'pull_percent'))}
                          </label>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className={styles['table-responsive']}>
          <div className={styles['head']}>CHAIN</div>
          <div className={styles['body']}>
            {dataTable?.length > 0 &&
              dataTable.map((item, index) => {
                return (
                  <div
                    className={styles['chain']}
                    onClick={() => {
                      router.push(`/projects/${item?.github_prefix}`);
                    }}
                    key={item?.id}
                  >
                    <div className={styles['logo']}>
                      <Image
                        src={item?.avatar || pathImgTemp}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-full"
                        alt={item?.name}
                      />
                    </div>
                    <div className={styles['infor']}>
                      <label className={styles['name']}>{item?.name}</label>
                      <label className={styles['github-prefix']}>{item?.github_prefix}</label>
                      <div className={styles['infor-more']}>
                        <OtherInforRes icon={'#'} colorIcon={'#FFF'} value={getValue(item, 'index')} />
                        <OtherInforRes
                          icon={<CommitHorizontal />}
                          colorIcon={'#03DAC6'}
                          value={getValue(item, 'total_commits')}
                          percent={handleTextPercent(getValue(item, 'commit_percent'))}
                          colorPercent={stylePercent(getValue(item, 'commit_percent'))}
                        />
                        <OtherInforRes
                          icon={<Person />}
                          colorIcon={'#03DAC6'}
                          value={getValue(item, 'developers')}
                          percent={handleTextPercent(getValue(item, 'developer_percent'))}
                          colorPercent={stylePercent(getValue(item, 'developer_percent'))}
                        />
                        <OtherInforRes
                          icon={<Repo />}
                          colorIcon={'#03DAC6'}
                          value={getValue(item, 'total_repository')}
                          percent={handleTextPercent(getValue(item, 'repository_percent'))}
                          colorPercent={stylePercent(getValue(item, 'repository_percent'))}
                        />
                        <OtherInforRes
                          icon={<Star />}
                          colorIcon={'#BB86FC'}
                          value={getValue(item, 'total_star')}
                          percent={handleTextPercent(getValue(item, 'star_percent'))}
                          colorPercent={stylePercent(getValue(item, 'star_percent'))}
                        />
                        <OtherInforRes
                          icon={<Fork />}
                          colorIcon={'#BB86FC'}
                          value={getValue(item, 'total_fork')}
                          percent={handleTextPercent(getValue(item, 'fork_percent'))}
                          colorPercent={stylePercent(getValue(item, 'fork_percent'))}
                        />
                        <OtherInforRes
                          icon={<Issue />}
                          colorIcon={'#18A0FB'}
                          value={getValue(item, 'total_issue_solved')}
                          percent={handleTextPercent(getValue(item, 'issue_percent'))}
                          colorPercent={stylePercent(getValue(item, 'issue_percent'))}
                        />
                        <OtherInforRes
                          icon={<PullRequest />}
                          colorIcon={'#18A0FB'}
                          value={getValue(item, 'total_pull_merged')}
                          percent={handleTextPercent(getValue(item, 'pull_percent'))}
                          colorPercent={stylePercent(getValue(item, 'pull_percent'))}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Container>
  );
}
