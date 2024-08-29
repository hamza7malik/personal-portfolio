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
      <section
        className="bg-cover bg-center"
        style={{backgroundImage: 'url(./images/full-bgs/3.png)'}}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-accent px-7 py-14 bg-opacity-70">
            <div className="w-[90%]">
              <h2 className="mb-4 text-white">Contact</h2>
              <p className="text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reprehenderit eaque soluta ipsam dicta inventore itaque esse
                repellendus distinctio sunt quod veritatis exercitationem, sint,
                maxime ex. Corrupti eaque blanditiis eveniet minima!
              </p>
              <div className="mt-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full flex items-center mb-4 justify-center h-14 w-14 bg-[var(--accent-color)]">
                    <p className="text-white">E</p>
                  </div>
                  <p className="text-white">crhamza7@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full flex items-center mb-4 justify-center h-14 w-14 bg-[var(--accent-color)]">
                    <p className="text-white">PH</p>
                  </div>
                  <p className="text-white">+971 523125845</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full flex items-center mb-4 justify-center h-14 w-14 bg-[var(--accent-color)]">
                    <p className="text-white">L</p>
                  </div>
                  <p className="text-white">Dubai, UAE</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full flex items-center mb-4 justify-center h-14 w-14 bg-[var(--accent-color)]">
                    <p className="text-white">V</p>
                  </div>
                  <p className="text-white w-[80%] md:w-[60%]">
                    Check my availablity and book a meeting.{' '}
                    <span className="underline font-bold">
                      Follow the steps here
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
