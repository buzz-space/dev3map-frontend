import Link from "next/link"
import styles from "./styles.module.scss"

export default function GridProject({ title, numberProject, projects = [] }) {
    return <div className={styles['grid-project']}>
        <h6 className={styles['title']}>{title} ({numberProject})</h6>
        <div className={styles['grid']}>
            {
                projects?.map((item, index) => {
                    return <Link href={item?.to || '/'}>
                        <a className={styles['item']}>
                            <img className={styles['logo']} src={
                                item?.logo
                            } alt="Logo repo" />
                            <label className={styles['name']}>{item?.name}</label>
                        </a>
                    </Link>
                })
            }
        </div>
    </div>
}