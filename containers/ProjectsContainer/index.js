import Container from "~/components/base/Container";
import styles from "./styles.module.scss";
import clsx from "clsx";
import SearchAndFilter from "~/components/projects/SearchAndFilter";
function ProjectsContainer() {
    return <Container>
        <h2 className={clsx("title", styles['title'])}>Projects by category</h2>
        <SearchAndFilter />
    </Container>;
}

export default ProjectsContainer;
