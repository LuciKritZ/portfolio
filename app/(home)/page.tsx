import { Experience } from './_components/sections/experience';
import Hero from './_components/sections/hero';
import { getPortfolioData } from './_rest/_rest';

export default async function Home() {
  const { experiences, myInfo, projects, skills, testimonials } =
    await getPortfolioData();

  return (
    <>
      <section id='/'>
        <Hero myInfo={myInfo} />
      </section>
      <section id='experience' className='section-container'>
        <Experience experiences={experiences} />
      </section>
    </>
  );
}
