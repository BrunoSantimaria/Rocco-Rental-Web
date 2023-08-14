import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

import { ExpandMore } from "@mui/icons-material";
import { Icon } from "@iconify/react";
import pdfOutline from "@iconify/icons-teenyicons/pdf-outline";
import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";

const DarkAccordion = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div className='mt-5'>
        <Accordion>
          <AccordionSummary
            id='panel1-header'
            aria-controls='panel1-content'
            expandIcon={<ExpandMore />} // Use the ExpandMore icon component
          >
            <span className='font-bold'>
              FICHAS TÉCNICAS /
              PLATAFORMAS TIJERA
            </span>
          </AccordionSummary>

          <AccordionDetails>
            <a
              href='https://drive.google.com/file/d/1xjPJu2fDhwWBxl8t7M3eZAgPM5GAA7dp/view'
              rel='noreferrer'
              target='_blank'
              title='Rocco Rental Genie GS ficha tecnica'
            >
              <div className='flex cursor-pointer'>
                <Icon
                  icon={pdfOutline}
                  color='#CED4DA'
                  className='mr-2 h-6 w-6'
                />
                <Typography>
                  GENIE GS-2032
                </Typography>
              </div>
            </a>
          </AccordionDetails>

          <AccordionDetails>
            <a
              href='https://drive.google.com/file/d/1PjVJuYcUeH2AimE3RZvbb7BOxyyKYUYC/view?usp=sharing'
              rel='noreferrer'
              target='_blank'
              title='Rocco Rental Genie GS ficha tecnica'
            >
              <div className='flex cursor-pointer'>
                <Icon
                  icon={pdfOutline}
                  color='#CED4DA'
                  className='mr-2 h-6 w-6'
                />
                <Typography>
                  GENIE GS-2646
                </Typography>
              </div>
            </a>
          </AccordionDetails>

          <AccordionDetails>
            <a
              href='https://drive.google.com/file/d/1mQ1QnObBLv6sTyYK2-m6OJxwgZMVNRJM/view?usp=sharing'
              rel='noreferrer'
              target='_blank'
              title='Rocco Rental Genie GS ficha tecnica'
            >
              <div className='flex cursor-pointer'>
                <Icon
                  icon={pdfOutline}
                  color='#CED4DA'
                  className='mr-2 h-6 w-6'
                />
                <Typography>
                  GENIE GS-3246
                </Typography>
              </div>
            </a>
          </AccordionDetails>
        </Accordion>
      </div>
    </ThemeProvider>
  );
};

export default DarkAccordion;
