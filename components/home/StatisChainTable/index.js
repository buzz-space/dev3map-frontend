import Container from "~/components/base/Container";
import styles from "./styles.module.scss";

export default function StatisChainTable() {
    const data = [
        {
            name: 'OSMOSIS',
            des: 'OSMO',
            commits: 100,
            contributors: 100,
            issuesSolved: 100,
            stars: 450,
            forks: 1,
        }, {
            name: 'OSMOSIS',
            des: 'OSMO',
            commits: 100,
            contributors: 100,
            issuesSolved: 100,
            stars: 450,
            forks: 1,
        }, {
            name: 'OSMOSIS',
            des: 'OSMO',
            commits: 100,
            contributors: 100,
            issuesSolved: 100,
            stars: 450,
            forks: 1,
        }, {
            name: 'OSMOSIS',
            des: 'OSMO',
            commits: 100,
            contributors: 100,
            issuesSolved: 100,
            stars: 450,
            forks: 1,
        }, {
            name: 'OSMOSIS',
            des: 'OSMO',
            commits: 100,
            contributors: 100,
            issuesSolved: 100,
            stars: 450,
            forks: 1,
        }, {
            name: 'OSMOSIS',
            des: 'OSMO',
            commits: 100,
            contributors: 100,
            issuesSolved: 100,
            stars: 450,
            forks: 1,
        }, {
            name: 'OSMOSIS',
            des: 'OSMO',
            commits: 100,
            contributors: 100,
            issuesSolved: 100,
            stars: 450,
            forks: 1,
        }, {
            name: 'OSMOSIS',
            des: 'OSMO',
            commits: 100,
            contributors: 100,
            issuesSolved: 100,
            stars: 450,
            forks: 1,
        }
    ]
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
                data?.map((item, index) => {
                    return <tr key={index}>
                        <td className={styles['chain']}>
                            <img src="/imgs/cosmos.svg" />
                            <div className={styles['infor-chain']}>
                                <label className={styles['name']}>{item?.name}</label>
                                <label className={styles['des']}>{item?.des}</label>
                            </div>
                        </td>
                        <td className={styles['commits']}>{item?.commits}</td>
                        <td className={styles['contributors']}>{item?.contributors}</td>
                        <td className={styles['issues-solved']}>{item?.issuesSolved}</td>
                        <td className={styles['stars']}>{item?.stars}</td>
                        <td className={styles['forks']}>{item?.forks}</td>
                    </tr>
                })
            }
        </tbody>
    </table></Container>
}