import React from 'react'
import Typography from '@mui/material/Typography'
import { add, adminCalenderBlue, adminUser, calender2, forma1Copy19, group38, helperland, layer14, layer15, logout, sort, star1, star2 } from '../assets/images'
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Grid from '@mui/material/Grid'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Pagination } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker, DesktopDatePicker } from '@mui/lab';

function createData(
    serviceId: number,
    serviceDate: string,
    serviceTime: string,
    customerName: string,
    customerAddress: string,
    serviceProviderName: string,
    status: string
) {
    return { serviceId, serviceDate, serviceTime, customerName, customerAddress, serviceProviderName, status };
}

const tableRows = [
    createData(323436, "09/04/2018", "12:00 - 18:00", "David Bough", "Musterstrabe 5,12345 Bonn", "", "New"),
    createData(323436, "09/04/2018", "12:00 - 18:00", "David Bough", "Musterstrabe 5,12345 Bonn", "", "New"),
    createData(323436, "09/04/2018", "12:00 - 18:00", "David Bough", "Musterstrabe 5,12345 Bonn", "Lyum Watson", "Pending"),
    createData(323436, "09/04/2018", "12:00 - 18:00", "David Bough", "Musterstrabe 5,12345 Bonn", "Lyum Watson", "Pending"),
    createData(323436, "09/04/2018", "12:00 - 18:00", "David Bough", "Musterstrabe 5,12345 Bonn", "Lyum Watson", "Completed"),
    createData(323436, "09/04/2018", "12:00 - 18:00", "David Bough", "Musterstrabe 5,12345 Bonn", "Lyum Watson", "Completed"),
    createData(323436, "09/04/2018", "12:00 - 18:00", "David Bough", "Musterstrabe 5,12345 Bonn", "Lyum Watson", "Cancelled"),
    createData(323436, "09/04/2018", "12:00 - 18:00", "David Bough", "Musterstrabe 5,12345 Bonn", "Lyum Watson", "Completed"),
    createData(323436, "09/04/2018", "12:00 - 18:00", "David Bough", "Musterstrabe 5,12345 Bonn", "Lyum Watson", "Cancelled"),
    createData(323436, "09/04/2018", "12:00 - 18:00", "David Bough", "Musterstrabe 5,12345 Bonn", "Lyum Watson", "Completed")
]

const rows = {
    serviceManagement: 'Service Management',
    roleManagement: 'Role Management',
    couponManagement: {
        couponCodes: 'Coupon Codes',
        usageHistory: 'Usage History'
    },
    escalationManagement: 'Escalation Management',
    serviceRequests: 'Service Requests',
    serviceProviders: 'Service Providers',
    userManagement: 'User Management',
    financeModule: {
        allTransactions: 'All Transactions',
        generatePayment: 'Generate Payment',
        customerInvoices: 'Customer Invoices'
    },
    zipManagement: 'Zip Code Management',
    ratingManagement: 'Rating Management',
    inquiryManagement: 'Inquiry Management',
    newsletterManagement: 'Newsletter Management',
    contentManangement: {
        blog: 'Blog',
        faqs: 'FAQs'
    }
}

const toggleSidebar = () => {
    const element = document.getElementById('sidebar')
    const bodyTag = document.getElementsByTagName('body')[0]
    element?.classList.toggle('admin-sidebar-toggle')
    bodyTag.classList.toggle("overlay")
    bodyTag.classList.toggle("overflow-class")
}

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))({
    color: '#646464',

    '&:before': {
        display: 'none',
    },

    '&.Mui-expanded': {
        borderBottom: 'none',
        backgroundColor: '#F9F9F9'
    }
});

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))({
    backgroundColor: '#FFFFFF',
    '&:hover': {
        backgroundColor: '#E6E6E6'
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },

    '& .MuiAccordion-root': {
        border: 'none'
    },

    '&.Mui-expanded': {
        backgroundColor: '#F9F9F9'
    }
});

const AccordionDetails = styled(MuiAccordionDetails)({
    paddingLeft: '34px',
    paddingBottom: '0'
});

const SearchButton = styled(Button)({
    backgroundColor: '#1FB6FF',
    color: '#FFFFFF',
    fontWeight: 'normal',
    width: '84px',
    height: '46px',
    textTransform: 'capitalize',

    '&:hover': {
        backgroundColor: '#167fb3'
    }
})

const ClearButton = styled(Button)({
    backgroundColor: '#FFFFFF',
    color: '#646464',
    border: '1px solid #DEDDDD',
    fontWeight: 'normal',
    textTransform: 'capitalize',
    width: '84px',
    height: '46px',
    '&:hover': {
        color: '#FFF',
        backgroundColor: '#1fb6ff'
    }
})

const StyledPagination = styled(Pagination)({
    borderRight: '1px solid #D6D6D6',
    '& .MuiPaginationItem-root': {
        color: '#646464',
        height: '40px',
        width: '40px',
        margin: '0',
        borderRadius: '0',
        borderRight: 'none',
        borderTop: '1px solid #D6D6D6',
        borderBottom: '1px solid #D6D6D6',
        borderLeft: '1px solid #D6D6D6'
    },
    '& .MuiButtonBase-root': {
        '&.Mui-selected': {
            backgroundColor: '#565656',
            color: '#FFFFFF',

            '&:hover': {
                backgroundColor: '#454545'
            }
        }
    }
})

const StyledButton = styled(Button)({
    backgroundColor: '#1fb6ff',
    color: '#ffffff',
    width: '132px',
    height: '36px',
    fontSize: '14px',
    fontWeight: 'normal',
    textTransform: 'capitalize',
    padding: '9px 11px',

    '&:hover': {
        backgroundColor: '#167fb3'
    }
})

const StyledTableCell = styled(TableCell)({
    fontSize: '16px',
    paddingTop: '7px',
    paddingBottom: '7px',
    '&.MuiTableCell-root': {
        borderBottom: 'none'
    }
})

const StyledTableCellHeader = styled(TableCell)({
    fontSize: '16px',
    paddingTop: '20px',
    paddingBottom: '20px',
    '&.MuiTableCell-root': {
        borderBottom: 'none'
    }
})

const StyledTableBody = styled(TableBody)({
    '& .MuiTableCell-root': {
        color: '#646464',
        backgroundColor: '#FFFFFF'
    }
})

const StyledTableHead = styled(TableHead)({
    backgroundColor: '#F9F9F9'
})

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    border: '1px solid #e8dada',
    '& .MuiTableCell-root': {
        color: '#646464'
    },

    [theme.breakpoints.down("lg")]: {
        '& .MuiTableCell-root': {
            paddingLeft: '10px',
            paddingRight: '10px'
        }
    },

    [theme.breakpoints.down("md")]: {
        '& .MuiTableCell-root': {
            paddingLeft: '5px',
            paddingRight: '5px'
        }
    }
}))


const StyledMenu = styled(Menu)({
    '& .MuiPaper-root': {
        width: '163px',
        boxShadow: '0 0 6px #F4F4F4'
    }
})

const ServiceID = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        height: '46px',
        color: '#0009'
    },

    '& .MuiOutlinedInput-root.Mui-focused fieldset': {
        borderColor: '#DEDDDD'
    },

    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: '#DEDDDD'
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#DEDDDD'
    },

    'input':
    {
        '&::placeholder':
        {
            color: '#A0A0A0',
            opacity: 1
        }
    }
})

const CustomSelect = styled(Select)({
    fontSize: '14px',
    color: '#646464',
    margin: "0 10px",

    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none'
    },

    '& .MuiSelect-select': {

        maxHeight: '38px',
        paddingTop: '9px',
        paddingBottom: '9px',
        paddingLeft: '9px',
        border: '1px solid #D6D6D6'
    },
    '& .MuiSelect-select .Mui-focused': {

        border: '1px solid #E1E1E1'
    }

})

const StyledTableRowHeader = styled(TableRow)({
    border: '1px solid #e8dada',
    '& .MuiTableCell-root': {
        color: '#646464',
        fontWeight: 'bold'
    }
})

const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        height: '46px',
    },
    width: '100%'
})

const customerNameValues = [
    "David Bough",
    "John Smith"
];

const serviceProviderValues = [
    "Lyum Watson",
    "Peter Smith"
]

const statusValues = [
    "New",
    "Pending",
    "Cancelled",
    "Completed"
]

const ServiceRequest = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [customerName, setCustomerName] = React.useState('');
    const [serviceProvider, setServiceProvider] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [paginationValue, SetPaginationValue] = React.useState(10);
    const open = Boolean(anchorEl);
    const [date, setDate] = React.useState<Date | null>(new Date());
    const [expanded, setExpanded] = React.useState<string | false>('');

    const handleChangeAccordion = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const element = document.getElementById('menu-toggle')!
        { anchorEl && element.classList.add('admin-menu-toggle') }
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handlePaginationChange = (value: number) => {
        SetPaginationValue(value);
    }

    const handleChange = (event: SelectChangeEvent<typeof customerName>) => {
        setCustomerName(
            event.target.value
        );
    };

    const handleChangeProvider = (event: SelectChangeEvent<typeof serviceProvider>) => {
        setServiceProvider(
            event.target.value
        );
    };

    const handleChangeStatus = (event: SelectChangeEvent<typeof status>) => {
        setStatus(
            event.target.value
        );
    };

    return (
        <div>
            <div className='cover' onClick={toggleSidebar}></div>
            <div className='admin-nav'>
                <div>
                    <img src={helperland} alt="helperland logo" />
                </div>
                <div className='admin-profile'>
                    <img src={adminUser} alt="admin logo" />
                    <p>James Smith</p>
                    <Button>
                        <img src={logout} alt="logout button" />
                    </Button>
                    <div className='admin-toggle' onClick={toggleSidebar}>
                        <div className="hamburger">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='user-management-row'>
                <ul className='admin-sidebar' id="sidebar">
                    <Link to="#"><li>{rows.serviceManagement}</li></Link>
                    <Link to="#"><li>{rows.roleManagement}</li></Link>
                    <li className='sidebar-accordion'>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChangeAccordion('panel2')}>
                            <AccordionSummary>
                                <p>Coupon Code Management</p>
                            </AccordionSummary>
                            <AccordionDetails className='sidebar-accordion-details'>
                                <Link to="#"> <p>{rows.couponManagement.couponCodes}</p></Link>
                                <Link to="#"><p>{rows.couponManagement.usageHistory}</p></Link>
                            </AccordionDetails>
                        </Accordion>
                    </li>
                    <Link to="#"><li>{rows.escalationManagement}</li></Link>
                    <Link to="#"><li>{rows.serviceRequests}</li></Link>
                    <Link to="#"><li>{rows.serviceProviders}</li></Link>
                    <Link to="#"><li>{rows.userManagement}</li></Link>
                    <li className='sidebar-accordion'>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChangeAccordion('panel1')}>
                            <AccordionSummary>
                                <p>Finance Module</p>
                            </AccordionSummary>
                            <AccordionDetails className='sidebar-accordion-details'>
                                <Link to="#"> <p>{rows.financeModule.allTransactions}</p></Link>
                                <Link to="#"><p>{rows.financeModule.generatePayment}</p></Link>
                                <Link to="#"><p>{rows.financeModule.customerInvoices}</p></Link>
                            </AccordionDetails>
                        </Accordion>
                    </li>
                    <Link to="#"><li>{rows.zipManagement}</li></Link>
                    <Link to="#"><li>{rows.ratingManagement}</li></Link>
                    <Link to="#"><li>{rows.inquiryManagement}</li></Link>
                    <Link to="#"><li>{rows.newsletterManagement}</li></Link>
                    <li className='sidebar-accordion'>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChangeAccordion('panel3')}>
                            <AccordionSummary>
                                <p>Content Management</p>
                            </AccordionSummary>
                            <AccordionDetails className='sidebar-accordion-details'>
                                <Link to="#"> <p>{rows.contentManangement.blog}</p></Link>
                                <Link to="#"><p>{rows.contentManangement.faqs}</p></Link>
                            </AccordionDetails>
                        </Accordion>
                    </li>
                </ul>

                <div className='admin-table'>
                    <div className='admin-title'>
                        <Typography component="h4" variant="h4">
                            Service Requests
                        </Typography>
                        <StyledButton className='add-user-button'>
                            <img src={add} alt="add icon" />
                            <p>Add New User</p>
                        </StyledButton>
                    </div>

                    <Grid container className='admin-filter'>
                        <Grid item xs={12} xl={3}>
                            <Grid container>
                                <Grid item pr={{ sm: 2, xs: 0 }} sm={6} xl={5} xs={12}>
                                    <ServiceID fullWidth id="outlined-basic" placeholder='Service ID' variant="outlined" />
                                </Grid>
                                <Grid item pr={{ xl: 2, xs: 0 }} pt={{ xs: 2, sm: 0 }} sm={6} xl={7} xs={12}>
                                    <Select
                                        sx={{ height: '46px' }}
                                        displayEmpty
                                        fullWidth
                                        value={customerName}
                                        input={<OutlinedInput />}
                                        IconComponent={KeyboardArrowDownIcon}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        renderValue={(selected) => {
                                            if (selected.length === 0) {
                                                return <p style={{ color: '#A0A0A0' }}>Customer</p>;
                                            }
                                            return selected
                                        }}
                                    >
                                        {customerNameValues.map((data) => (
                                            <MenuItem
                                                key={data}
                                                value={data}
                                            >
                                                {data}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} xl={4}>
                            <Grid container>
                                <Grid item pr={{ sm: 2, xs: 0 }} pt={{ xl: 0, xs: 2 }} sm={6} xl={7.5} xs={12}>
                                    <Select
                                        sx={{ height: '46px' }}
                                        displayEmpty
                                        fullWidth
                                        id='service-provider'
                                        value={serviceProvider}
                                        input={<OutlinedInput />}
                                        IconComponent={KeyboardArrowDownIcon}
                                        onChange={handleChangeProvider}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        renderValue={(selected) => {
                                            if (selected.length === 0) {
                                                return <p style={{ color: '#A0A0A0' }}>Service Provider</p>;
                                            }
                                            return selected
                                        }}
                                    >
                                        {serviceProviderValues.map((data) => (
                                            <MenuItem
                                                key={data}
                                                value={data}
                                            >
                                                {data}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Grid>

                                <Grid item pr={{ xl: 2, xs: 0 }} pt={{ xl: 0, xs: 2 }} sm={6} xl={4.5} xs={12}>
                                    <Select
                                        sx={{ height: '46px' }}
                                        displayEmpty
                                        fullWidth
                                        value={status}
                                        input={<OutlinedInput />}
                                        IconComponent={KeyboardArrowDownIcon}
                                        onChange={handleChangeStatus}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        renderValue={(selected) => {
                                            if (selected.length === 0) {
                                                return <p style={{ color: '#A0A0A0' }}>Status</p>;
                                            }
                                            return selected
                                        }}
                                    >
                                        {statusValues.map((data) => (
                                            <MenuItem
                                                key={data}
                                                value={data}
                                            >
                                                {data}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} xl={3}>
                            <Grid container>
                                <Grid item pr={{ sm: 2, xs: 0 }} pt={{ xl: 0, xs: 2 }} xl={6.5} sm={6} xs={12}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DesktopDatePicker
                                            value={date}
                                            onChange={value => setDate(value)}
                                            renderInput={(params) => <CustomTextField {...params} inputProps={{ placeholder: "From Date" }} />}
                                            InputAdornmentProps={{
                                                position: 'start'
                                            }}
                                            components={{
                                                OpenPickerIcon: () => <img src={adminCalenderBlue} alt="calender-icon" />
                                            }}
                                        />
                                    </LocalizationProvider>
                                </Grid>


                                <Grid item pr={{ xl: 2, xs: 0 }} pt={{ xl: 0, xs: 2 }} xl={5.5} sm={6} xs={12}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            value={date}
                                            onChange={(value) => setDate(value)}
                                            renderInput={(params) => <CustomTextField {...params} inputProps={{ placeholder: "To Date" }} />}
                                            InputAdornmentProps={{
                                                position: 'start'
                                            }}
                                            components={{
                                                OpenPickerIcon: () => <img src={adminCalenderBlue} alt="calender-icon" />
                                            }}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item lg={3} sx={{ margin: '0 auto' }} xl={2}>
                            <Grid container>
                                <Grid item lg={6} pr={2} pt={{ xs: 2, xl: 0 }} display='flex' justifyContent='center'>
                                    <SearchButton>
                                        Search
                                    </SearchButton>
                                </Grid>

                                <Grid item lg={6} pr={2} pt={{ xs: 2, xl: 0 }} display='flex' justifyContent='center'>
                                    <ClearButton>
                                        Clear
                                    </ClearButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <StyledTableHead>
                                <StyledTableRowHeader>
                                    <StyledTableCellHeader className='white-space-wrap' align="left">Service ID &nbsp;<img src={sort} alt="sort icon" /></StyledTableCellHeader>
                                    <StyledTableCellHeader className='white-space-wrap' align="left">Service date &nbsp;<img src={sort} alt="sort icon" /></StyledTableCellHeader>
                                    <StyledTableCellHeader className='white-space-wrap' align="left">Customer details&nbsp;<img src={sort} alt="sort icon" /></StyledTableCellHeader>
                                    <StyledTableCellHeader className='white-space-wrap' align="left">Service Provider &nbsp;<img src={sort} alt="sort icon" /></StyledTableCellHeader>
                                    <StyledTableCellHeader className='white-space-wrap' align="center">Status&nbsp;<img src={sort} alt="sort icon" /></StyledTableCellHeader>
                                    <StyledTableCell align="center">Actions</StyledTableCell>
                                </StyledTableRowHeader>
                            </StyledTableHead>
                            <StyledTableBody>
                                {tableRows.map((row, index) => (
                                    <StyledTableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <StyledTableCell align="left">
                                            {row.serviceId}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            <div className='service-date'>
                                                <img src={calender2} alt="Calender icon" />
                                                <p>&nbsp;{row.serviceDate}</p>
                                            </div>
                                            <div className='service-time'>
                                                <img width='17' height='17' src={layer14} alt="clock icon" />
                                                <p> {row.serviceTime}</p>
                                            </div>
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.customerName}
                                            <div className='customer-address'>
                                                <img src={layer15} alt="house icon" />
                                                <p>{row.customerAddress}</p>
                                            </div>
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.serviceProviderName && <div className='history-service-provider'>
                                                <div className='hat'>
                                                    <img src={forma1Copy19} alt="hat icon" />
                                                </div>

                                                <div className='star-rating'>
                                                    {row.serviceProviderName}
                                                    <div>
                                                        <img src={star1} alt="star-rated" />
                                                        <img src={star1} alt="star-rated" />
                                                        <img src={star1} alt="star-rated" />
                                                        <img src={star1} alt="star-rated" />
                                                        <img src={star2} alt="star-not-rated" />
                                                        <p>&nbsp;4</p>
                                                    </div>
                                                </div>
                                            </div>}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.status === "Completed" &&
                                                <p className="service-status">
                                                    {row.status}
                                                </p>}
                                            {row.status === "Pending" &&
                                                <p className="service-status-pending">
                                                    {row.status}
                                                </p>}
                                            {row.status === "New" &&
                                                <p className="service-status-new">
                                                    {row.status}
                                                </p>}

                                            {row.status === "Cancelled" &&
                                                <p className="service-status-cancelled">
                                                    {row.status}
                                                </p>}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                id="menu-toggle"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                disableFocusRipple
                                                disableRipple
                                                onClick={handleClick}
                                                className='navbar-menu'
                                            >
                                                <img src={group38} alt="kebab-menu" />
                                            </Button>
                                            <StyledMenu
                                                id="basic-menu"
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'right',
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                    'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                <MenuItem onClick={handleClose}>Edit & Reschedule</MenuItem>
                                                <MenuItem onClick={handleClose}>Refund</MenuItem>
                                                <MenuItem onClick={handleClose}>Cancel</MenuItem>
                                                <MenuItem onClick={handleClose}>Change SP</MenuItem>
                                                <MenuItem onClick={handleClose}>Escalate</MenuItem>
                                                <MenuItem onClick={handleClose}>History Log</MenuItem>
                                                <MenuItem onClick={handleClose}>Download Invoice</MenuItem>
                                            </StyledMenu>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </StyledTableBody>
                        </Table>
                    </TableContainer>

                    <div className="admin-pagination">
                        <div>
                            <p>Show</p>
                            <CustomSelect
                                value={paginationValue}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem onClick={() => handlePaginationChange(10)} value={10}>10</MenuItem>
                                <MenuItem onClick={() => handlePaginationChange(20)} value={20}>20</MenuItem>
                                <MenuItem onClick={() => handlePaginationChange(30)} value={30}>25</MenuItem>
                            </CustomSelect>
                            <p>Entries</p>
                        </div>
                        <StyledPagination count={5} variant="outlined" />
                    </div>

                    <p className='admin-copyright'>©2018 Helperland. All rights reserved.</p>
                </div>
            </div>
        </div >
    )
}

export default ServiceRequest