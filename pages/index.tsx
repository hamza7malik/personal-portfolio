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
    <div className="">
      <Head>
        <title>Hamza Malik - Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&family=Genos:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
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
