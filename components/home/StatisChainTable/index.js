import Container from "~/components/base/Container";
import styles from "./styles.module.scss";

import { useGetChainList } from "~/hooks/api/useChainList";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function StatisChainTable() {
    const { data, refetch } = useGetChainList();
    const router = useRouter();
    // const data = [
    //     {
    //         name: 'OSMOSIS',
    //         des: 'OSMO',
    //         commits: 100,
    //         contributors: 100,
    //         issuesSolved: 100,
    //         stars: 450,
    //         forks: 1,
    //     }, {
    //         name: 'OSMOSIS',
    //         des: 'OSMO',
    //         commits: 100,
    //         contributors: 100,
    //         issuesSolved: 100,
    //         stars: 450,
    //         forks: 1,
    //     }, {
    //         name: 'OSMOSIS',
    //         des: 'OSMO',
    //         commits: 100,
    //         contributors: 100,
    //         issuesSolved: 100,
    //         stars: 450,
    //         forks: 1,
    //     }, {
    //         name: 'OSMOSIS',
    //         des: 'OSMO',
    //         commits: 100,
    //         contributors: 100,
    //         issuesSolved: 100,
    //         stars: 450,
    //         forks: 1,
    //     }, {
    //         name: 'OSMOSIS',
    //         des: 'OSMO',
    //         commits: 100,
    //         contributors: 100,
    //         issuesSolved: 100,
    //         stars: 450,
    //         forks: 1,
    //     }, {
    //         name: 'OSMOSIS',
    //         des: 'OSMO',
    //         commits: 100,
    //         contributors: 100,
    //         issuesSolved: 100,
    //         stars: 450,
    //         forks: 1,
    //     }, {
    //         name: 'OSMOSIS',
    //         des: 'OSMO',
    //         commits: 100,
    //         contributors: 100,
    //         issuesSolved: 100,
    //         stars: 450,
    //         forks: 1,
    //     }, {
    //         name: 'OSMOSIS',
    //         des: 'OSMO',
    //         commits: 100,
    //         contributors: 100,
    //         issuesSolved: 100,
    //         stars: 450,
    //         forks: 1,
    //     }
    // ]
    useEffect(() => {
        refetch();
    }, [])
    return <Container className={styles['container']}><table className={styles['table']}>
        <thead>
            <tr>
                <th className={styles['chain']}>CHAIN</th>
                <th>COMMITS</th>
                <th>CONTRIBUTORS</th>
                <th>ISSUES SOLVED</th>
                <th>STARS</th>
                <th>FORKS</th>
            </tr>
        </thead>
        <tbody>
            {
                data?.data?.map((item, index) => {
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