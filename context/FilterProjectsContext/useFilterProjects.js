import { useContext } from "react";
import { FilterProjectsContext } from "./FilterProjectsProvider";

export default function useFilterProjects() {
    const filter = useContext(FilterProjectsContext);
    return filter
}