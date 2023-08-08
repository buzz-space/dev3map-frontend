import Container from "~/components/base/Container";
import styles from "./styles.module.scss";

import { useGetChainList } from "~/hooks/api/useChainList";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import IconSort from "./IconSort";
import OtherInforRes from "./OtherInforRes";
import { Checkbox, CommitHorizontal, Fork, Issue, Person, PullRequest, Repo, Search, Star } from "~/public/assets/svgs";
import { formatNumber } from "~/utils/number";
import { Blockchain } from "~/public/assets/svgs-title";
import TabDynamic from "~/components/base/TabDynamic";

export default function StatisChainTable() {
    const { data, refetch } = useGetChainList();
    const router = useRouter();
    const [value, setValue] = useState("");
    const [typeSort, setTypeSort] = useState('');
    const [directSort, setDirectSort] = useState({
        commits: '',
        contributors: '',
        issues_solved: '',
        stars: '',
        forks: '',
    })

    function getValue(item, prop) {
        let label = '';
        if (indexTab === 0) {
            label = '24_hours';
        } else if (indexTab === 1) {
            label = '7_days';
        } else {
            label = '30_days';
        }
        let value = item?.stats?.filter((item) => item?.range == label);
        return Number(value[0][prop]);
    }


    const [dataTable, setDataTable] = useState([]);
    const [dataFinished, setDataFinished] = useState([]);
    const [indexTab, setIndexTab] = useState(0);
    useEffect(() => {
        setDataFinished(() => {
            if (data?.data) {
                let dt = [...data?.data]?.map((item, index) => {
                    return {
                        ...item, stats: [
                            { ...item?.stats[0], developers: item?.stats[0]?.full_time_developer + item?.stats[0]?.part_time_developer },
                            { ...item?.stats[1], developers: item?.stats[1]?.full_time_developer + item?.stats[1]?.part_time_developer },
                            { ...item?.stats[2], developers: item?.stats[2]?.full_time_developer + item?.stats[2]?.part_time_developer }
                        ]
                    }
                });
                return dt;
            }
            return [];
        })
    }, [data])
    useEffect(() => {
        refetch();
    }, [])
    useEffect(() => {
        if (dataFinished && typeSort == '') {
            setDataTable(dataFinished);
        }
    }, [typeSort, dataFinished])

    function sort(type) {
        let dt = [];
        function sortDirect(type, prop) {
            if (dataFinished?.length > 0 && dataFinished[0]?.stats[0].hasOwnProperty(prop)) {
                let obj = { ...directSort };
                Object.keys(obj).forEach(key => {
                    obj[key] = '';
                });
                if (directSort[type] == 'up') {
                    setDirectSort(prev => { return { ...obj, [type]: 'down' } })
                    return dataFinished?.sort((a, b) => getValue(a, prop) - getValue(b, prop));
                } else {
                    setDirectSort(prev => { return { ...obj, [type]: 'up' } })
                    return dataFinished?.sort((a, b) => getValue(b, prop) - getValue(a, prop));
                }
            } else {
                return []
            }

        }
        if (dataFinished) {
            if (type == 'commits') {
                dt = sortDirect(type, 'total_commits');
            }
            else if (type == 'developers') {
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
            }
            else {
                dt = dataFinished;
            }
        }
        setTypeSort(type);
        setDataTable(dt);
    }

    function onClickSearch() {
        setDataTable(prev => {
            let data = [...prev].filter((item) => {
                return item?.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
            })
            return data;
        })
    }

    useEffect(() => {
        if (!value) {
            setDataTable(dataFinished)
        }
    }, [value])



    return <Container className={styles['container']}>
        <h6 className="title">CHAINS ({dataTable?.length})<span><Blockchain /></span></h6>
        <div className={styles['filter']}>
            <div className={styles['search-bar']}>
                <input type="search" placeholder="Search chain" value={value} onChange={(e) => {
                    setValue(e.currentTarget.value);
                }} onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        // 👇 Get input value
                        onClickSearch();
                    }
                }} />
                <Search onClick={onClickSearch} />
            </div>
            <TabDynamic data={[{ label: '24H' }, { label: '7D' }, { label: '30D' }]} setIndexActive={setIndexTab} />
        </div>
        <div className={styles['container-table']}>
            <div className={styles['container-inside']}>
                <table className={styles['table']}>
                    <thead>
                        <tr>
                            <th className={styles['chain']}>CHAIN</th>
                            <th className={styles['commits']}>
                                <div className={styles['sort-table']} onClick={() => sort('commits')}>
                                    <label>COMMITS</label>
                                    <IconSort direct={directSort?.commits} />
                                </div>
                            </th>
                            <th>
                                <div className={styles['sort-table']} onClick={() => sort('developers')}>
                                    <label>DEVELOPERS</label>
                                    <IconSort direct={directSort?.developers} />
                                </div>
                            </th>
                            <th>
                                <div className={styles['sort-table']} onClick={() => sort('repos')}>
                                    <label>REPOS</label>
                                    <IconSort direct={directSort?.repos} />
                                </div>
                            </th>
                            <th>
                                <div className={styles['sort-table']} onClick={() => sort('stars')}>
                                    <label>STARS</label>
                                    <IconSort direct={directSort?.stars} />
                                </div>
                            </th>
                            <th>
                                <div className={styles['sort-table']} onClick={() => sort('forks')}>
                                    <label>FORKS</label>
                                    <IconSort direct={directSort?.forks} />
                                </div>
                            </th>
                            <th>
                                <div className={styles['sort-table']} onClick={() => sort('issues')}>
                                    <label>ISSUES</label>
                                    <IconSort direct={directSort?.issues} />
                                </div>
                            </th>
                            <th>
                                <div className={styles['sort-table']} onClick={() => sort('pull')}>
                                    <label>PULL</label>
                                    <IconSort direct={directSort?.pull} />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataTable?.length > 0 && dataTable.map((item, index) => {
                                return <tr key={item?.id} className={styles['row']} onClick={() => {
                                    router.push(`/projects/${item?.github_prefix}`)
                                }} >
                                    <td className={styles['td-chain']}>
                                        <div className={styles['chain']}>
                                            <img className={styles['logo']} src={item?.avatar} />
                                            <div className={styles['infor-chain']}>
                                                <label className={styles['name']}>{item?.name}</label>
                                                <label className={styles['des']}>{item?.symbol}</label>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={styles['commits']}>{formatNumber(getValue(item, 'total_commits'))}</td>
                                    <td className={styles['developers']}>{formatNumber(getValue(item, 'developers'))}</td>
                                    <td className={styles['repository']}>{formatNumber(getValue(item, 'total_repository'))}</td>
                                    <td className={styles['stars']}>{formatNumber(getValue(item, 'total_star'))}</td>
                                    <td className={styles['forks']}>{formatNumber(getValue(item, 'total_fork'))}</td>
                                    <td className={styles['issues']}>{formatNumber(getValue(item, 'total_issue_solved'))}</td>
                                    <td className={styles['pull']}>{formatNumber(getValue(item, 'total_pull_merged'))}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className={styles['table-responsive']}>
                <div className={styles['head']}>
                    CHAIN
                </div>
                <div className={styles['body']}>
                    {
                        dataTable?.length > 0 && dataTable.map((item, index) => {
                            return <div className={styles['chain']} onClick={() => {
                                router.push(`/projects/${item?.github_prefix}`)
                            }} key={item?.id}>
                                <img src={item?.avatar} className={styles['logo']} />
                                <div className={styles['infor']}>
                                    <label className={styles['name']}>
                                        {item?.name}
                                    </label>
                                    <label className={styles['github-prefix']}>
                                        {item?.github_prefix}
                                    </label>
                                    <div className={styles['infor-more']}>
                                        <OtherInforRes icon={<CommitHorizontal />} colorIcon={'#03DAC6'} value={getValue(item, 'total_commits')} />
                                        <OtherInforRes icon={<Person />} colorIcon={'#03DAC6'} value={getValue(item, 'full_time_developer') + getValue(item, 'part_time_developer')} />
                                        <OtherInforRes icon={<Repo />} colorIcon={'#03DAC6'} value={getValue(item, 'total_repository')} />
                                        <OtherInforRes icon={<Star />} colorIcon={'#BB86FC'} value={getValue(item, 'total_star')} />
                                        <OtherInforRes icon={<Fork />} colorIcon={'#BB86FC'} value={getValue(item, 'total_fork')} />
                                        <OtherInforRes icon={<Issue />} colorIcon={'#18A0FB'} value={getValue(item, 'total_issue_solved')} />
                                        <OtherInforRes icon={<PullRequest />} colorIcon={'#18A0FB'} value={getValue(item, 'total_pull_merged')} />

                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </Container>

}