import Head from 'next/head';
import {
  BannerV2,
  SectionAboutMe,
  SectionWhyMe,
  ExperienceSection,
  RepositoriesSection,
  ContactSection,
} from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hamza Malik - Portfolio</title>
      </Head>

      <BannerV2 />
      <SectionAboutMe />
      <SectionWhyMe />
      <ExperienceSection />
      <RepositoriesSection />
      <ContactSection />
    </div>
  );
}
