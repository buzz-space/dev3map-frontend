import Container from '~/components/base/Container';
import { Honorable } from '~/public/assets/svgs-title';
import styles from './styles.module.scss';
import CardHonorable from './CardHonorable';

export default function HonorableMention() {
  const data = [
    {
      title: 'Rising Star',
      logo: '/imgs/aura.svg',
      name: 'Aura Network',
      imgs: '/imgs/honorable/1.png',
      des: 'They may be the stars of the Cosmos Ecosystem for a time being. However, as the name suggests, Rising Stars form sturdy foundations that are what newer projects should look up to.',
      type: 'rising_star',
      info: 'They may be the stars of the Cosmos Ecosystem for a time being. However, as the name suggests, role models form sturdy foundations that are what new projects should look up to. Not because their models are popular, but their efficiencies are proven as well. ',
    },
    {
      title: 'IBC Astronauts',
      logo: '/imgs/aura.svg',
      name: 'Aura Network',
      imgs: '/imgs/honorable/2.png',
      des: 'Tirelessly and relentless, these projects have some stubborn warriors that refuse to be mediocre.',
      type: 'ibc_astronaut',
      info: 'Although they might lack man power, they make up for it with sheer amount of commitment and effort. New features are usually shipped on time, and in some cases, these projects even delivered features that are not included in the roadmap (yet). ',
    },
    {
      title: 'SERIOUSNESS',
      logo: '/imgs/aura.svg',
      name: 'Aura Network',
      imgs: '/imgs/honorable/3.png',
      des: 'Take a simple idea and take it seriously.',
      type: 'seriousness',
      info: 'As their life\'s task is to express their uniqueness to the world, there is nothing such as  "paltry effort" in their dictonary, all must be done in a military fashion: serious and efficient. Thus, they acquired community recognition by doing so.',
    },
  ];
  return (
    <Container className={styles['container']} id="best-of-100">
      <span className={'description-title'}>THIS WEEK</span>
      <h2 className="title">
        BEST OF 100{' '}
        <span>
          <Honorable />
        </span>
      </h2>
      <div className={styles['list-card']}>
        {data?.map((item, index) => {
          return <CardHonorable key={index} {...item} />;
        })}
      </div>
    </Container>
  );
}
