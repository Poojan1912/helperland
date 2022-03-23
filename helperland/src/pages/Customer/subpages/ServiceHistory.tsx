import React, { useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications';
import { ExportToCsv } from 'export-to-csv';
import Typography from '@mui/material/Typography'
import {
    CancelButton,
    Feedback,
    HelperButton,
    RateSP,
    StyledTableBody,
    StyledTableCell,
    StyledTableHead,
    StyledTableRow,
    StyledTableRowHeader
} from '../subcomponents/StyledComponents'

import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'

import { calender2, layer14, sort } from '../../../assets/images'
import { serviceHistory, submitProviderRatings } from '../CustomerService'
import { isAuthenticated } from '../../../api'
import { Box, Modal, Rating } from '@mui/material';


const ServiceHistory = () => {
    const { addToast } = useToasts();
    const [serviceHistoryData, setServiceHistoryData] = useState<any[]>([])
    const [timeRating, setTimeRating] = React.useState<number | null>(0);
    const [friendlyRating, setFriendlyRating] = React.useState<number | null>(0);
    const [qualityRating, setQualityRating] = React.useState<number | null>(0);
    const [value4, setValue4] = React.useState<number | null>(3);
    const [feedback, setFeedback] = React.useState("")
    const [open, setOpen] = useState(false)
    const [serviceId, setServiceId] = useState(0)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { email } = isAuthenticated()

    useEffect(() => {
        serviceHistory(email)
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    console.log("Response: ", data)
                    setServiceHistoryData(data)
                }
            })
    }, [])

    const options = {
        title: 'Service History',
        showLabels: true,
        headers: ['Service Id', 'Date of Service', 'Time of Service', 'Price(in Euros)', 'Status of the Service']
    }

    const exportData = () => {
        const csvExporter = new ExportToCsv(options)
        csvExporter.generateCsv(serviceHistoryData)
    }

    const serviceProvider = "Ramesh Patel"

    const submitRatings = () => {
        handleClose()
        submitProviderRatings({ serviceProvider, serviceId, timeRating, friendlyRating, qualityRating, feedback, email })
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                    addToast("Could not save ratings!", { appearance: 'error' });
                } else {
                    console.log(data)
                    addToast('Ratings Saved Successfully', { appearance: 'success' });
                }
            })
    }


    return (
        <div>
            <div className='service-component-top'>
                <Typography component='h4' variant='h4'>Service History</Typography>
                <HelperButton onClick={exportData}>Export</HelperButton>
            </div>

            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <StyledTableHead>
                        <StyledTableRowHeader>
                            <StyledTableCell align="left">
                                Service Id
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                Service Date
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                Service Provider
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Payment
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Status
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Rate SP
                            </StyledTableCell>
                        </StyledTableRowHeader>
                    </StyledTableHead>

                    <StyledTableBody>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            onClick={(e) => {
                                e.stopPropagation()
                            }}
                        >
                            <Box className='modal service-details-modal'>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <p>Ramesh Patel</p>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Rating name="read-only" value={value4} readOnly />
                                        <p>{value4}</p>
                                    </div>
                                </div>
                                <Typography component='h4' variant='h4'>Rate your service provider</Typography>
                                <hr />
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p className='modal-title' style={{ width: '200px' }}>On time arrival:</p>
                                    <span className='modal-data-item'>
                                        <Rating
                                            name="simple-controlled"
                                            value={timeRating}
                                            onChange={(event, newValue) => {
                                                setTimeRating(newValue);
                                            }}
                                        />
                                    </span>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p className='modal-title' style={{ width: '200px' }}>Friendly:</p>
                                    <span className='modal-data-item'>
                                        <Rating
                                            name="simple-controlled"
                                            value={friendlyRating}
                                            onChange={(event, newValue) => {
                                                setFriendlyRating(newValue);
                                            }}
                                        />
                                    </span>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p className='modal-title' style={{ width: '200px' }}>Quality of assurance:</p>
                                    <span className='modal-data-item'>
                                        <Rating
                                            name="simple-controlled"
                                            value={qualityRating}
                                            onChange={(event, newValue) => {
                                                setQualityRating(newValue);
                                            }}
                                        />
                                    </span>
                                </div>

                                <p className='modal-title'>Feedback on service provider</p>
                                <Feedback
                                    fullWidth
                                    multiline
                                    minRows={2}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setFeedback(event.target.value)
                                    }}
                                />
                                <HelperButton onClick={submitRatings} sx={{ marginTop: '10px' }}>Submit</HelperButton>
                            </Box>
                        </Modal>
                        {serviceHistoryData && serviceHistoryData.map(dataItem => (
                            <StyledTableRow
                                sx={{ cursor: 'auto' }}
                                key={dataItem.serviceId}
                            >
                                <StyledTableCell align="left">{dataItem.serviceId}</StyledTableCell>
                                <StyledTableCell align="left">
                                    <div className='service-date'>
                                        <img src={calender2} alt="Calender icon" />
                                        <p>&nbsp;{dataItem.date}</p>
                                    </div>
                                    <div className='service-time'>
                                        <img width='17' height='17' src={layer14} alt="clock icon" />
                                        <p> {dataItem.time}</p>
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {dataItem.status === "Completed" && (
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                            <p>Ramesh Patel</p>
                                            <Rating name="read-only" value={value4} readOnly />
                                        </div>
                                    )}
                                </StyledTableCell>
                                <StyledTableCell align="center" className='service-payment'>
                                    <Typography component='h4' variant='h4'>
                                        <span>{dataItem.finalPrice}€</span>
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {dataItem.status === "Completed" &&
                                        <p className='service-status'>
                                            {dataItem.status}
                                        </p>
                                    }

                                    {(dataItem.status === "Cancelled" || dataItem.status === "Refunded") &&
                                        <p className="service-status-cancelled">
                                            {dataItem.status}
                                        </p>}

                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {dataItem.status !== "Completed" ? <RateSP>Rate SP</RateSP> : <HelperButton onClick={() => {
                                        setServiceId(dataItem.serviceId)
                                        handleOpen()
                                    }}>Rate SP</HelperButton>}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </StyledTableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ServiceHistory