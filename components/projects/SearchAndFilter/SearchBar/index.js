import { Search } from "~/public/assets/svgs";
import styles from "./styles.module.scss";
import { useState } from "react";

export default function SearchBar() {
    const [value, setValue] = useState("");
    function onClick() {
        setValue("");
    }
    return <div className={styles['search-bar']}>
        <input type="search" placeholder="Search project" value={value} onChange={(e) => {
            setValue(e.currentTarget.value);
        }} />
        <Search onClick={onClick} />
    </div>
}