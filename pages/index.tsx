import Head from 'next/head';
import Banner from '../components/Banner/Banner';
import RepositoriesSection from '../components/RepositoriesSection/RepositoriesSection';
import FAQSection from '../components/FAQSection/FAQSection';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import SectionWhoWeAre from '../components/SectionWhoWeAre/SectionWhoWeAre';
import SectionWhyChooseUs from '../components/SectionWhyChooseUs/SectionWhyChooseUs';
import PortfolioSection from '../components/PortfolioSection/PortfolioSection';
import Footer from '../components/Footer/Footer';
import BannerV2 from '../components/Banner/BannerV2';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Hamza Malik - Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&family=Genos:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      </Head>

      <BannerV2 />
      {/* <Banner /> */}
      <SectionWhoWeAre />
      <SectionWhyChooseUs />
      <PortfolioSection />
      <FAQSection />
      <RepositoriesSection />
    </div>
  );
}
