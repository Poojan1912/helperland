import React from 'react'
import { styled } from '@mui/material/styles'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'

import { rightArrowAccordion } from '../assets/images/index'

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    paddingBottom: '16px',
    '&.MuiAccordion-root::before':
    {
        display: 'none'
    },

    [theme.breakpoints.down("lg")]: {
        '&.MuiPaper-root': {
            paddingLeft: '0'
        }
    },

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

    [theme.breakpoints.down("lg")]: {
        alignItems: 'flex-start',
        '& .MuiAccordionSummary-content': {
            marginTop: '0'
        },
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)({
    paddingTop: '6px'
});

type accordionProps = {
    summery: string,
    details: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expandValue: any
}

const CustomAccordion = (props: accordionProps) => {

    const expandValue = (props.expandValue === "false" ? false : props.expandValue);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [expanded, setExpanded] = React.useState<string | false>(expandValue);

    const handleChangeAccordion =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <Accordion className="accordion" onChange={handleChangeAccordion(expandValue)}>
            <AccordionSummary expandIcon={<img src={rightArrowAccordion} alt="arrow" />}>
                <p className='accordion-summery'>{props.summery}</p>
            </AccordionSummary>
            <AccordionDetails>
                <p className='accordion-details'>{props.details}</p>
            </AccordionDetails>
        </Accordion>
    )
}

export default CustomAccordion