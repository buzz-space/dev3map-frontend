import Button from "~/components/base/Button";
import GridProject from "./GridProject";
import styles from "./styles.module.scss";
import { useGetChainList } from "~/hooks/api/useChainList";
import { useCategories } from "~/hooks/api/useCategories";
import { useEffect, useState } from "react";
import { useFilterProjects } from "~/context/FilterProjectsContext";

export default function ListProject() {
    const { data: chainlist } = useGetChainList();
    const { activeIndex, setActiveIndex } = useFilterProjects();
    const { data: categories } = useCategories({
        with_data: 1,
    });
    const [categoriesShow, setCategoriesShow] = useState([]);
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        if (showAll) {
            setCategoriesShow([...categories?.data])
        } else {
            setCategoriesShow([...categories?.data].splice(0, Math.min(3, categories?.data.length)))
        }
    }, [showAll, categories])
    return <div className={styles['list-project']}>
        {
            activeIndex == 0 ? <>{
                categoriesShow?.map((item, index) => {
                    return <GridProject title={item?.name} numberProject={item?.total} projects={item?.chain} key={index} />
                })
            }

                <Button outline className={styles['load-more']} onClick={() => {
                    setShowAll(prev => {
                        if (prev == true) {
                            window.scrollTo(0, 0);
                        }
                        return !prev;
                    });
                }}>{showAll ? 'Collapse' : 'Load More'}</Button></> : <></>
        }
    </div>
}