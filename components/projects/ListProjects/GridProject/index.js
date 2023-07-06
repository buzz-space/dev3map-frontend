import Link from "next/link"
import styles from "./styles.module.scss"
import { useEffect, useState } from "react"
import Button from "~/components/base/Button";
import { useFilterProjects } from "~/context/FilterProjectsContext";
import { Fade } from "react-reveal";

export default function GridProject({ title, numberProject, projects = [] }) {
    const [projectShow, setProjectShow] = useState([]);
    const { activeIndex, setActiveIndex, search } = useFilterProjects();
    const [showAll, setShowAll] = useState(false);
    function filterSearch(list) {
        return list?.filter((item, index) => {
            return item?.name?.toLowerCase()?.includes(search?.toLowerCase());
        })
    }
    function handleProjects() {
        if (showAll || search != '') {
            setProjectShow(filterSearch([...projects]))
        } else {
            setProjectShow(filterSearch([...projects].splice(0, Math.min(12, projects.length))))
        }
    }
    useEffect(() => {
        handleProjects(projects)
    }, [projects, showAll, search])
    return <>
        {
            projectShow?.length > 0 ? <Fade><div className={styles['grid-project']}>
                <h6 className={styles['title']}>{title} ({numberProject})</h6>
                <div className={styles['grid']}>
                    {
                        projectShow?.map((item, index) => {
                            return <Link href={item?.id ? `/projects/${item?.github_prefix}` : '/'}>
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
                    projects?.length > 12 && search === "" && <Button outline className={styles['more']} onClick={() => {
                        setShowAll(prev => !prev)
                    }}>{showAll ? 'Collapse' : `+${projects?.length - 12} More`}</Button>
                }
            </div></Fade> : <></>
        }
    </>
}