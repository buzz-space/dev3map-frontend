import DetailProjectContainer from "~/containers/DetailProjectContainer";
import MainLayout from "~/layout/MainLayout";

export default function DetailProject() {
    return <MainLayout currentPage="projects">
        <DetailProjectContainer />
    </MainLayout>
}