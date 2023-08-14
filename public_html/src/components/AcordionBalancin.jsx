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

export const AcordionBalancin = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div className='mt-5'>
      <ThemeProvider theme={darkTheme}>
        <Accordion>
          <AccordionSummary
            id='panel2-header'
            aria-controls='panel2-content'
            expandIcon={<ExpandMore />}
          >
            <span className='font-bold'>
              FICHA TÉCNICA / BALANCIN
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <a
              href='https://drive.google.com/file/d/1KEDG7itxXrevwjlHW4kLpr3FX9taQ_oa/view?usp=sharing'
              rel='noreferrer'
              target='_blank'
              title='zlp 630 ficha tecnica rocco rental'
            >
              <div className='flex cursor-pointer'>
                <Icon
                  icon={pdfOutline}
                  color='#CED4DA'
                  className='mr-2 h-6 w-6'
                />
                <Typography>
                  ZLP-630
                </Typography>
              </div>
            </a>
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </div>
  );
};
