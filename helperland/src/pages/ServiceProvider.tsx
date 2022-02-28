import React, { useState } from 'react';
import Footer from '../components/Footer';
import HeaderService from '../components/HeaderService';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';
import { calender2, layer14, layer15, sort } from '../assets/images';
import { FaCaretDown } from "react-icons/fa";
import { styled } from '@mui/system';
import { Helmet } from 'react-helmet';

function createData(
    serviceId: number,
    serviceDate: string,
    serviceTime: string,
    customerName: string,
    customerAddress: string,
    distance: number
) {
    return { serviceId, serviceDate, serviceTime, customerName, customerAddress, distance };
}

const rows = [
    createData(323436, "09/04/2018", "12:00 - 18:00", "David Bough", "Musterstrabe 5,12345 Bonn", 15),
    createData(323437, "09/04/2018", "12:00 - 18:00", "David Bough", "Musterstrabe 5,12345 Bonn", 10),
    createData(323438, "09/04/2018", "12:00 - 18:00", "David Bough", "Musterstrabe 5,12345 Bonn", 15),
    createData(323439, "09/04/2018", "12:00 - 18:00", "David Bough", "Musterstrabe 5,12345 Bonn", 15),
    createData(323440, "09/04/2018", "12:00 - 18:00", "David Bough", "Musterstrabe 5,12345 Bonn", 10),
    createData(323441, "09/04/2018", "12:00 - 18:00", "David Bough", "Musterstrabe 5,12345 Bonn", 25),
    createData(323442, "09/04/2018", "12:00 - 18:00", "David Bough", "Musterstrabe 5,12345 Bonn", 15),
    createData(323443, "09/04/2018", "12:00 - 18:00", "David Bough", "Musterstrabe 5,12345 Bonn", 5),
    createData(323444, "09/04/2018", "12:00 - 18:00", "David Bough", "Musterstrabe 5,12345 Bonn", 15),
    createData(323445, "09/04/2018", "12:00 - 18:00", "David Bough", "Musterstrabe 5,12345 Bonn", 5),
];

const sidebarData = ["Dashboard", "New Service Requests", "Upcoming Services", "Service Schedule", "Service History", "My Ratings", "Block Customer"];


const ServiceProvider = () => {

    const [service, setService] = useState(sidebarData[0]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const element = document.getElementById('serviceSidebar')!
        const bodyTag = document.getElementsByTagName('body')[0]
        if (isMenuOpen) {
            setIsMenuOpen(false)
            element.classList.add("menu-toggle");
            bodyTag.classList.remove("overflow-class")
        }
        else {
            setIsMenuOpen(true)
            element.classList.remove("menu-toggle")
            bodyTag.classList.add("overflow-class")
        }
    }

    const handleChange = (value: string) => {
        setService(value);
        setIsMenuOpen(true)
        closeMenu();
    }

    const StyledButton = styled(Button)({
        backgroundColor: '#FF6B6B',
        color: '#FFFFFF',
        borderRadius: '17px',
        // padding: '4px 16px',
        width: '80px',
        height: '34px',
        border: '1px solid #ffffff80',
        textTransform: 'initial',
        fontSize: '16px',
        fontWeight: 'normal',

        '&:hover': {
            backgroundColor: '#e85656',
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

    const StyledTableCell = styled(TableCell)({
        fontSize: '16px',
        paddingTop: '9px',
        paddingBottom: '9px',

        '&.MuiTableCell-root': {
            borderBottom: 'none'
        }
    })

    return (
        <div>
            <Helmet>
                <title>Service Provider - Helperland</title>
            </Helmet>
            <HeaderService />
            <ul className='service-select'>
                <li onClick={() => (closeMenu())}>{service} <span><FaCaretDown /></span> </li>
            </ul>
            <div className='welcome-msg'>
                <p>Welcome, <span>Sandip!</span> </p>
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
                            <li onClick={() => handleChange(sidebarData[6])}>{sidebarData[6]}</li>
                        </ul>
                    </div>

                    <div className='service-table'>
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <StyledTableHead>
                                    <StyledTableRowHeader>
                                        <StyledTableCell sx={{ paddingTop: '12px', paddingBottom: '12px' }} align="left">Service ID &nbsp;<img src={sort} alt="sort icon" /></StyledTableCell>
                                        <StyledTableCell sx={{ paddingTop: '12px', paddingBottom: '12px' }} align="left">Service date &nbsp;<img src={sort} alt="sort icon" /></StyledTableCell>
                                        <StyledTableCell sx={{ paddingTop: '12px', paddingBottom: '12px' }} align="left">Customer details &nbsp;<img src={sort} alt="sort icon" /></StyledTableCell>
                                        <StyledTableCell sx={{ paddingTop: '12px', paddingBottom: '12px' }} align="center">Distance &nbsp;<img src={sort} alt="sort icon" /></StyledTableCell>
                                        <StyledTableCell sx={{ paddingTop: '12px', paddingBottom: '12px' }} align="center">Actions</StyledTableCell>
                                    </StyledTableRowHeader>
                                </StyledTableHead>
                                <StyledTableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow
                                            key={row.serviceId}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <StyledTableCell align="left">{row.serviceId}</StyledTableCell>
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
                                            <StyledTableCell align="center">{row.distance}&nbsp;km</StyledTableCell>
                                            <StyledTableCell align="center"><StyledButton>Cancel</StyledButton></StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </StyledTableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
};

export default ServiceProvider;
