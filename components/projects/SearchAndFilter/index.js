import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";
import styles from "./styles.module.scss";
export default function SearchAndFilter() {
    return <div className={styles['search-and-filter']}>
        <SearchBar />
        <FilterBar />
    </div>
}