import Head from 'next/head';
import FAQSection from '../components/FAQSection/FAQSection';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import PortfolioSection from '../components/PortfolioSection/PortfolioSection';
import Footer from '../components/Footer/Footer';
import ContactForm from '../components/ContactForm/ContactForm';

import {
  BannerV2,
  SectionAboutMe,
  SectionWhyMe,
  ExperienceSection,
  RepositoriesSection,
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
      {/* <Banner /> */}
      <FAQSection />
      <SectionAboutMe />
      <SectionWhyMe />
      <ExperienceSection />
      {/* <PortfolioSection /> */}
      {/* <FAQSection /> */}
      <RepositoriesSection />
      {/* <section className="bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-white px-7 py-14 ">
            <div className="w-[90%]">
              <h2 className="mb-4">Contact</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reprehenderit eaque soluta ipsam dicta inventore itaque esse
                repellendus distinctio sunt quod veritatis exercitationem, sint,
                maxime ex. Corrupti eaque blanditiis eveniet minima!
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section> */}
    </div>
  );
}
