import React from 'react'
import { styled } from '@mui/material/styles'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'

import accordionArrow from "../assets/right-arrow-accordion.png";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&.MuiAccordion-root::before':
    {
        display: 'none'
    }
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        {...props}
    />
))(({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
}));

type accordionProps = {
    summery: string,
    details: string,
    expandValue: any
}

const CustomAccordion = (props: accordionProps) => {

    const expandValue = (props.expandValue === "false"? false: props.expandValue);
    
    const [expanded, setExpanded] = React.useState<string | false>(expandValue);

    const handleChangeAccordion =
      (panel: any) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
      };

    return (
        <Accordion className="accordion" onChange={handleChangeAccordion(expandValue)}>
            <AccordionSummary expandIcon={<img src={accordionArrow} alt="arrow" />}>
                <p className='accordion-summery'>{props.summery}</p>
            </AccordionSummary>
            <AccordionDetails>
                <p className='accordion-details'>{props.details}</p>
            </AccordionDetails>
        </Accordion>
    )
}

export default CustomAccordion