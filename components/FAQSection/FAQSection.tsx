import React, {useEffect, useState} from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './FAQSection.css'; // Your custom CSS

import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const accordionData = [
    {
      title: 'Why invest in Dubai?',
      summary:
        "Investing in Dubai offers high rental yields and capital appreciation due to its vibrant economy, strategic location, and status as a global business hub. A tax-free environment, combined with a stable political climate and world-class infrastructure, makes Dubai an attractive destination for investors looking to maximize returns and secure their financial future. Moreover, the city's commitment to innovation and sustainability ensures long-term growth and opportunities in the property market.",
    },
    {
      title: 'What are the types of properties offered?',
      summary:
        "Investing in Dubai offers high rental yields and capital appreciation due to its vibrant economy, strategic location, and status as a global business hub. A tax-free environment, combined with a stable political climate and world-class infrastructure, makes Dubai an attractive destination for investors looking to maximize returns and secure their financial future. Moreover, the city's commitment to innovation and sustainability ensures long-term growth and opportunities in the property market.",
    },
    {
      title:
        "How can investors benefit from Dubai's growing real estate market?",
      summary:
        "Investing in Dubai offers high rental yields and capital appreciation due to its vibrant economy, strategic location, and status as a global business hub. A tax-free environment, combined with a stable political climate and world-class infrastructure, makes Dubai an attractive destination for investors looking to maximize returns and secure their financial future. Moreover, the city's commitment to innovation and sustainability ensures long-term growth and opportunities in the property market.",
    },
    {
      title:
        'What are the financing options available for purchasing a property?',
      summary:
        "Investing in Dubai offers high rental yields and capital appreciation due to its vibrant economy, strategic location, and status as a global business hub. A tax-free environment, combined with a stable political climate and world-class infrastructure, makes Dubai an attractive destination for investors looking to maximize returns and secure their financial future. Moreover, the city's commitment to innovation and sustainability ensures long-term growth and opportunities in the property market.",
    },
    {
      title: 'Can international clients purchase properties?',
      summary:
        "Investing in Dubai offers high rental yields and capital appreciation due to its vibrant economy, strategic location, and status as a global business hub. A tax-free environment, combined with a stable political climate and world-class infrastructure, makes Dubai an attractive destination for investors looking to maximize returns and secure their financial future. Moreover, the city's commitment to innovation and sustainability ensures long-term growth and opportunities in the property market.",
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="section-left">
            <h2 className="pb-12">Frequently Asked Questions</h2>
            <div className="accordion-wrap ">
              {accordionData.map((item, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === `panel${index + 1}`}
                  onChange={handleChange(`panel${index + 1}`)}
                  className="border-none shadow-none"
                  style={{backgroundColor: 'var(--section-light)'}}>
                  <AccordionSummary
                    className="py-3"
                    expandIcon={
                      expanded === `panel${index + 1}` ? (
                        <img
                          className="md:w-[40px] md:h-[40px] hidden sm:block"
                          src="images/faq-section/accordion/icon-minus.svg"
                        />
                      ) : (
                        <img
                          className="md:w-[40px] md:h-[40px] hidden sm:block"
                          src="images/faq-section/accordion/icon-plus.svg"
                        />
                      )
                    }>
                    <h3 className="font-medium">{item.title}</h3>
                  </AccordionSummary>
                  <AccordionDetails className="pr-2 sm:pr-44">
                    <Typography>{item.summary}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
          <div className="section-right hidden lg:block">
            <img
              className="ml-auto"
              src="images/character/2_4.png"
              alt="funkaar-Faq Section"
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
