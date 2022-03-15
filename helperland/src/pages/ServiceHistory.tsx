import React, { useState } from 'react';
import Container from '@mui/material/Container'
import { styled } from '@mui/system';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import HeaderService from '../components/HeaderService';
import Footer from '../components/Footer'

import { FaCaretDown } from "react-icons/fa";
import { sort, calendar, star2, star1, forma1Copy19 } from '../assets/images';
import { Helmet } from 'react-helmet';
import { isAuthenticated } from '../api';
import { Navigate } from 'react-router-dom';


function createData(
    serviceDate: string,
    serviceTime: string,
    serviceProviderName: string,
    payment: number,
    status: string
) {
    return { serviceDate, serviceTime, serviceProviderName, payment, status };
}

const rows = [
    createData("31/03/2018", "12:00 - 18:00", "Lyum Watson", 63, "Completed"),
    createData("15/03/2018", "12:00 - 18:00", "Lyum Watson", 63, "Completed"),
    createData("10/03/2018", "12:00 - 18:00", "Lyum Watson", 63, "Completed"),
    createData("28/02/2018", "12:00 - 18:00", "Lyum Watson", 63, "Cancelled"),
    createData("15/02/2018", "12:00 - 18:00", "Lyum Watson", 63, "Completed"),
    createData("11/02/2018", "12:00 - 18:00", "Lyum Watson", 63, "Cancelled"),
    createData("31/01/2018", "12:00 - 18:00", "Lyum Watson", 63, "Completed"),
    createData("19/01/2018", "12:00 - 18:00", "Lyum Watson", 63, "Completed"),
    createData("05/01/2018", "12:00 - 18:00", "Lyum Watson", 63, "Cancelled"),
    createData("09/04/2018", "12:00 - 18:00", "Lyum Watson", 63, "Cancelled")
];

const sidebarData = ["Dashboard", "Service History", "Service Schedule", "Favourite Pros", "Invoices", "Notifications"];

const ServiceHistory = () => {
    const [service, setService] = useState(sidebarData[0]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [paginationValue, SetPaginationValue] = useState(10);

    const closeMenu = () => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const element = document.getElementById('serviceSidebar')!
        if (isMenuOpen) {
            setIsMenuOpen(false)
            element.classList.add("menu-toggle")
        }
        else {
            setIsMenuOpen(true)
            element.classList.remove("menu-toggle")
        }
    }

    const handleChange = (value: string) => {
        setService(value);
        setIsMenuOpen(true)
        closeMenu();
    }

    const handlePaginationChange = (value: number) => {
        SetPaginationValue(value);
    }

    const StyledButton = styled(Button)({
        backgroundColor: '#6DA9B5',
        color: '#FFFFFF',
        borderRadius: '17px',
        width: '70px',
        height: '34px',
        border: '1px solid #ffffff80',
        textTransform: 'initial',
        fontSize: '14px',
        fontWeight: 'normal',

        '&:hover': {
            backgroundColor: '#5193a0',
        }
    })

    const ExportButton = styled(Button)({
        backgroundColor: '#146371',
        color: '#FFFFFF',
        borderRadius: '17px',
        width: '70px',
        height: '34px',
        border: '1px solid #ffffff80',
        textTransform: 'initial',
        fontSize: '14px',
        fontWeight: 'normal',

        '&:hover': {
            backgroundColor: '#0a5360',
        }
    })

    const StyledTableBody = styled(TableBody)({
        '& .MuiTableCell-root': {
            color: '#646464'
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

    const StyledTableRowHeader = styled(TableRow)({
        border: '1px solid #e8dada',
        '& .MuiTableCell-root': {
            color: '#646464',
            fontWeight: 'bold'
        }
    })

    const CustomSelect = styled(Select)({
        maxHeight: '38px',
        fontSize: '14px',
        color: '#646464',
        margin: "0 10px",

        '& .MuiSelect-select': {

            maxHeight: '38px',
            padding: '7px 10px',
            border: '1px solid #E1E1E1'
        },
        '& .MuiSelect-select .Mui-focused': {

            border: '1px solid #E1E1E1'
        }

    })

    const StyledPagination = styled(Pagination)(({ theme }) => ({
        '& .MuiPaginationItem-previousNext': {
            color: '#646464 !important'
        },

        '& .MuiPaginationItem-firstLast': {
            color: '#777777'
        },
        '& .MuiButtonBase-root': {
            border: '1px solid #E1E1E1',
            fontSize: '14px',
            color: '#777777',
            width: '38px',
            height: '38px',
            borderRadius: '20px',


            [theme.breakpoints.down("sm")]: {
                width: '30px',
                height: '30px',
                fontSize: '12px'
            },

            '&.Mui-selected': {
                backgroundColor: '#1D7A8C',
                color: '#FFFFFF',
                border: 'none',

                '&:hover': {
                    backgroundColor: '#145562'
                }
            }
        }
    }))

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
            '&.MuiTableCell-root': {
                paddingLeft: '4px',
                paddingRight: '4px'
            }
        },

        [theme.breakpoints.up("lg")]: {
            '&.MuiTableCell-root': {
                paddingLeft: '10px',
                paddingRight: '10px'
            }
        },

        '&.MuiTableCell-root': {
            borderBottom: 'none'
        }

    }))

    return (
        isAuthenticated() ? (

            <div>
                <Helmet>
                    <title>Service History - Helperland</title>
                </Helmet>
                <HeaderService />
                <ul className='service-select'>
                    <li onClick={() => (closeMenu())}>{service} <span><FaCaretDown /></span> </li>
                </ul>
                <div className='welcome-msg'>
                    <p>Welcome, <span>Gaurang!</span> </p>
                </div>
                <Container maxWidth='xl'>
                    <div className='service-row'>
                        <div className='service-sidebar menu-toggle' id='serviceSidebar'>
                            <ul>
                                <li onClick={() => handleChange(sidebarData[0])}>{sidebarData[0]}</li>
                                <li onClick={() => handleChange(sidebarData[1])}>{sidebarData[1]}</li>
                                <li onClick={() => handleChange(sidebarData[2])}>{sidebarData[2]}</li>
                                <li onClick={() => handleChange(sidebarData[3])}>{sidebarData[3]}</li>
                                <li onClick={() => handleChange(sidebarData[4])}>{sidebarData[4]}</li>
                                <li onClick={() => handleChange(sidebarData[5])}>{sidebarData[5]}</li>
                            </ul>
                        </div>

                        <div className='service-table'>
                            <div className="service-history-top">
                                <Typography component='h4' variant='h4'>Service History</Typography>
                                <ExportButton>Export</ExportButton>
                            </div>
                            <TableContainer>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <StyledTableHead>
                                        <StyledTableRowHeader>
                                            <StyledTableCell align="left">Service Details &nbsp;<img src={sort} alt="sort icon" /></StyledTableCell>
                                            <StyledTableCell align="left">Service Provider &nbsp;<img src={sort} alt="sort icon" /></StyledTableCell>
                                            <StyledTableCell align="center">Payment &nbsp;<img src={sort} alt="sort icon" /></StyledTableCell>
                                            <StyledTableCell align="center">Status &nbsp;<img src={sort} alt="sort icon" /></StyledTableCell>
                                            <StyledTableCell align="center">Rate SP</StyledTableCell>
                                        </StyledTableRowHeader>
                                    </StyledTableHead>
                                    <StyledTableBody>
                                        {rows.map((row, index) => (
                                            <StyledTableRow
                                                key={index}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <StyledTableCell align="left">
                                                    <div className='service-date'>
                                                        <img width='15' height='16' src={calendar} alt="" />
                                                        &nbsp;{row.serviceDate}
                                                    </div>
                                                    <div className='service-time'>
                                                        {row.serviceTime}
                                                    </div>
                                                </StyledTableCell>
                                                <StyledTableCell align="left">
                                                    <div className='history-service-provider'>
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
                                                    </div>
                                                </StyledTableCell>
                                                <StyledTableCell className='service-payment'>
                                                    <Typography component='h4' variant='h4'>€ <span>{row.payment}</span> </Typography>
                                                </StyledTableCell>
                                                <StyledTableCell align="center">
                                                    {row.status === "Completed" &&
                                                        <p className="service-status">
                                                            {row.status}
                                                        </p>}

                                                    {row.status === "Cancelled" &&
                                                        <p className="service-status-cancelled">
                                                            {row.status}
                                                        </p>}
                                                </StyledTableCell>
                                                <StyledTableCell align="center"><StyledButton>Rate SP</StyledButton></StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </StyledTableBody>
                                </Table>
                            </TableContainer>
                            <div className='table-pagination'>
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
                                    <p>entries&nbsp;&nbsp; Total Record: 55</p>
                                </div>
                                <div>
                                    <StyledPagination count={4} showLastButton showFirstButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container >
                <Footer />
            </div >
        ) : (
            <Navigate to="/" />
        )
    );
};

export default ServiceHistory;
