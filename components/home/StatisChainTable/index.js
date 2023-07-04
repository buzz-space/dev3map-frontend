import Container from "~/components/base/Container";
import styles from "./styles.module.scss";

import { useGetChainList } from "~/hooks/api/useChainList";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import IconSort from "./IconSort";

export default function StatisChainTable() {
    const { data, refetch } = useGetChainList();
    const router = useRouter();
    const [typeSort, setTypeSort] = useState('');
    const [directSort, setDirectSort] = useState({
        commits: '',
        contributors: '',
        issues_solved: '',
        stars: '',
        forks: '',
    })
    const [dataTable, setDataTable] = useState([]);
    useEffect(() => {
        refetch();
    }, [])
    useEffect(() => {
        if (data?.data && typeSort == '') {
            setDataTable(data?.data);
        }
    }, [typeSort, data])

    function sort(type) {
        let dt = [];
        function sortDirect(type, prop) {
            if (data?.data?.length > 0 && data?.data[0].hasOwnProperty(prop)) {
                let obj = { ...directSort };
                Object.keys(obj).forEach(key => {
                    obj[key] = '';
                });
                if (directSort[type] == 'up') {
                    setDirectSort(prev => { return { ...obj, [type]: 'down' } })
                    return data?.data?.sort((a, b) => a[prop] - b[prop]);
                } else {
                    setDirectSort(prev => { return { ...obj, [type]: 'up' } })
                    return data?.data?.sort((a, b) => b[prop] - a[prop]);
                }
            } else {
                return []
            }

        }
        if (data?.data) {
            if (type == 'commits') {
                dt = sortDirect(type, 'total_commit');
            }
            else if (type == 'contributors') {
                dt = sortDirect(type, 'total_contributor');
            } else if (type == 'issues_solved') {
                dt = sortDirect(type, 'total_issue_solved');
            } else if (type == 'stars') {
                dt = sortDirect(type, 'total_star');
            } else if (type == 'forks') {
                dt = sortDirect(type, 'total_fork');
            }
            else {
                dt = data?.data;
            }
        }
        setTypeSort(type);
        setDataTable(dt);
    }

    return <Container className={styles['container']}><table className={styles['table']}>
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
                    <div className={styles['sort-table']} onClick={() => sort('contributors')}>
                        <label>CONTRIBUTORS</label>
                        <IconSort direct={directSort?.contributors} />
                    </div>
                </th>
                <th>
                    <div className={styles['sort-table']} onClick={() => sort('issues_solved')}>
                        <label>ISSUES SOLVED</label>
                        <IconSort direct={directSort?.issues_solved} />
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
            </tr>
        </thead>

        <tbody>
            {

                dataTable.map((item, index) => {
                    return <tr key={item?.id} className={styles['row']} onClick={() => {
                        router.push(`/projects/${item?.github_prefix}`)
                    }}>
                        <td>
                            <div className={styles['chain']}>
                                <img className={styles['logo']} src={item?.avatar} />
                                <div className={styles['infor-chain']}>
                                    <label className={styles['name']}>{item?.name}</label>
                                    <label className={styles['des']}>{item?.github_prefix}</label>
                                </div>
                            </div>
                        </td>
                        <td className={styles['commits']}>{item?.total_commit}</td>
                        <td className={styles['contributors']}>{item?.total_contributor}</td>
                        <td className={styles['issues-solved']}>{item?.total_issue_solved}</td>
                        <td className={styles['stars']}>{item?.total_star}</td>
                        <td className={styles['forks']}>{item?.total_fork}</td>
                    </tr>
                })
            }
        </tbody>
    </table></Container>
}