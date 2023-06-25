import Link from "next/link"
import styles from "./styles.module.scss"
import { useEffect, useState } from "react"
import Button from "~/components/base/Button";

export default function GridProject({ title, numberProject, projects = [] }) {
    const [projectShow, setProjectShow] = useState([]);
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        if (showAll) {
            setProjectShow([...projects])
        } else {
            setProjectShow([...projects].splice(0, Math.min(12, projects.length)))
        }
    }, [projects, showAll])
    return <div className={styles['grid-project']}>
        <h6 className={styles['title']}>{title} ({numberProject})</h6>
        <div className={styles['grid']}>
            {
                projectShow?.map((item, index) => {
                    return <Link href={item?.id ? `/projects/${item?.id}` : '/'}>
                        <a className={styles['item']}>
                            <img className={styles['logo']} src={
                                item?.avatar
                            } alt="Logo repo" />
                            <label className={styles['name']}>{item?.name}</label>
                        </a>
                    </Link>
                })
            }
        </div>
        {
            projects?.length > 12 && <Button outline className={styles['more']} onClick={() => {
                setShowAll(prev => !prev)
            }}>{showAll ? 'Collapse' : '+20 More'}</Button>
        }
    </div>
}