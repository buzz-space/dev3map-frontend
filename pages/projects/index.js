import ProjectsContainer from '~/containers/ProjectsContainer';
import MainLayout from '~/layout/MainLayout';

export default function ProjectsPage() {
    return (
        <MainLayout currentPage='projects'>
            <ProjectsContainer />
        </MainLayout>
    );
}
