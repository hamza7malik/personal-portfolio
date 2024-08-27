import Head from 'next/head';
import Banner from '../components/Banner/Banner';
import RepositoriesSection from '../components/RepositoriesSection/RepositoriesSection';
import FAQSection from '../components/FAQSection/FAQSection';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import SectionWhyMe from '../components/SectionWhyMe/SectionWhyMe';
import PortfolioSection from '../components/PortfolioSection/PortfolioSection';
import Footer from '../components/Footer/Footer';
import BannerV2 from '../components/Banner/BannerV2';
import ExperienceSection from '../components/ExperienceSection/ExperienceSection';
import SectionAboutMe from '../components/SectionAboutMe/SectionAboutMe';
import ContactForm from '../components/ContactForm/ContactForm';

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
        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> */}
      </Head>

      <BannerV2 />
      {/* <Banner /> */}
      <SectionAboutMe />
      <SectionWhyMe />
      <ExperienceSection />
      {/* <PortfolioSection /> */}
      {/* <FAQSection /> */}
      <RepositoriesSection />
      <section className="bg-white">
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
      </section>
    </div>
  );
}
