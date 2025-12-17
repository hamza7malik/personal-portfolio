import React, {useState} from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import './FAQSection.css';

type AccordionItem = {
  title: string;
  summary: string;
};
interface FAQSectionProps {
  accordionData: AccordionItem[];
}

const FAQSection = ({accordionData}: FAQSectionProps) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="section-left">
            <h2 className="pb-12">Frequently Asked Questions</h2>
            <div className="accordion-wrap">
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
              src="images/character/2_4.webp"
              alt="funkaar-Faq Section"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
