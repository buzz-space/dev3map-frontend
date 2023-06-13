import HomeContainer from '~/containers/HomeContainer';
import MainLayout from '~/layout/MainLayout';

export default function HomePage() {
  return (
    <MainLayout currentPage='home'>
      <HomeContainer />
    </MainLayout>
  );
}
