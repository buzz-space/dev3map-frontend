import { Search } from "~/public/assets/svgs";
import styles from "./styles.module.scss";
import { useState } from "react";
import { useFilterProjects } from "~/context/FilterProjectsContext";

export default function SearchBar() {
    const [value, setValue] = useState("");
    const { search, setSearch } = useFilterProjects();
    function onClick() {
        setSearch(value);
        // setValue("");
    }
    return <div className={styles['search-bar']}>
        <input type="search" placeholder="Search project" value={value} onChange={(e) => {
            setValue(e.currentTarget.value);
        }} />
        <Search onClick={onClick} />
    </div>
}