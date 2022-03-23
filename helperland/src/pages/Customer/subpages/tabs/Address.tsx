import React, { useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications';
import { useForm } from "react-hook-form";

import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import { CustomTextField, HelperButton, MobileNumber, RippleButton, StyledInputAdornment, StyledTableBody, StyledTableCell, StyledTableHead, StyledTableRow, StyledTableRowHeader, UpdateButton } from '../../subcomponents/StyledComponents'
import { deleteAddressData, getAddresses, updateAddress } from '../../CustomerService'
import { deleteIcon, editIcon } from '../../../../assets/images'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Grid } from '@mui/material';

type addressProps = {
    email: string
}

const Address = (props: addressProps) => {
    const { addToast } = useToasts();

    const [streetName, setStreetName] = useState("")
    const [houseNumber, setHouseNumber] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [city, setCity] = useState("")
    const [mobilenumber, setMobileNumber] = useState("")
    const [addressId, setAddressId] = useState("")
    const [addressDetails, setAddressDetails] = useState<any[]>([])
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setStreetName("")
        setHouseNumber("")
        setZipCode("")
        setCity("")
        setMobileNumber("")
        setAddressId("")
        setOpen(false)
    };


    const handleOpen2 = () => {
        setOpen2(true)
    };
    const handleClose2 = () => {
        setStreetName("")
        setHouseNumber("")
        setZipCode("")
        setCity("")
        setMobileNumber("")
        setAddressId("")
        setOpen2(false)
    };

    // const updateAddressModal = (event: any) => {
    //     const key = event.target.tabIndex;
    //     setIndex(key)
    //     setZipCode(addressDetails[key].zipcode);
    //     setHouseNumber(addressDetails[key].houseNumber);
    //     setCity(addressDetails[key].city);
    //     setMobileNumber(addressDetails[key].mobilenumber);
    //     setStreetName(addressDetails[key].streetName);
    //     handleOpen();
    // }

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onTouched"
    })

    const { register: register2, handleSubmit: handleSubmit2, formState: { errors: errors2 } } = useForm({
        mode: 'onTouched'
    })

    const email = props.email;

    useEffect(() => {
        getAddresses({ email })
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                    addToast(data.error, { appearance: 'error' });
                } else {
                    console.log(data)
                    setAddressDetails(data.address)
                }
            })
    }, [])

    const deleteAddress = () => {
        deleteAddressData(email, addressId)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    console.log(data)
                    getAddresses({ email })
                        .then(data => {
                            if (data.error) {
                                console.log(data.error)
                                addToast('Could not delete address!', { appearance: 'error' });
                            } else {
                                console.log(data)
                                setAddressDetails(data.address)
                                addToast('Address Deleted Successfully!', { appearance: 'success' });
                            }
                        })
                }
            })
    }

    const saveAddress = () => {
        console.log(addressId, streetName, houseNumber, zipCode, city, mobilenumber, email)
        updateAddress({ addressId, streetName, houseNumber, zipCode, city, mobilenumber, email })
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    console.log(data)
                    getAddresses({ email })
                        .then(data => {
                            if (data.error) {
                                console.log(data.error)
                                addToast('Could not save address!', { appearance: 'error' });
                            } else {
                                console.log(data)
                                setAddressDetails(data.address)
                                addToast('Address saved successfully!', { appearance: 'success' });
                            }
                        })
                }
            })
        handleClose()
        handleClose2()
    }

    return (
        <div>
            <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modal' sx={{ width: '600px', maxWidth: '600px' }}>
                    <form onSubmit={handleSubmit(saveAddress)}>
                        <div className='modal-top'>
                            <Typography component='h4' variant='h4'>Add New Address</Typography>
                            <div onClick={handleClose2}>&times;</div>
                        </div>

                        <Grid container spacing={2}>
                            <Grid item lg={6}>
                                <p>Street name</p>
                                <CustomTextField
                                    {...register("streetName",
                                        {
                                            required: "Street name is required."
                                        }
                                    )}
                                    fullWidth
                                    variant="outlined"
                                    type='text'
                                    value={streetName}

                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setStreetName(event.target.value)
                                    }}
                                />
                                {errors.streetName && <p className='error'>{errors.streetName.message}</p>}
                            </Grid>

                            <Grid item lg={6}>
                                <p>House number</p>
                                <CustomTextField
                                    fullWidth
                                    variant="outlined"
                                    type='text'
                                    value={houseNumber}
                                    {...register("houseNumber",
                                        {
                                            required: "House number is required."
                                        }
                                    )}

                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setHouseNumber(event.target.value)
                                    }}
                                />
                                {errors.houseNumber && <p className='error'>{errors.houseNumber.message}</p>}
                            </Grid>

                            <Grid item lg={6}>
                                <p>Postal code</p>
                                <CustomTextField
                                    fullWidth
                                    variant="outlined"
                                    type='text'
                                    value={zipCode}
                                    {...register("zipCode",
                                        {
                                            required: "Postal Code is required.",
                                            pattern: {
                                                value: /^[0-9]*$/,
                                                message: "PostalCode is invalid."
                                            },
                                            maxLength: {
                                                value: 6,
                                                message: 'Postal code must be 6 digits'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Postal code must be 6 digits'
                                            }
                                        })}

                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setZipCode(event.target.value)
                                    }}
                                />
                                {errors.zipCode && <p className='error'>{errors.zipCode.message}</p>}
                            </Grid>

                            <Grid item lg={6}>
                                <p>City</p>
                                <CustomTextField
                                    fullWidth
                                    variant="outlined"
                                    type='text'
                                    value={city}
                                    {...register("city",
                                        {
                                            required: "City is required."
                                        }
                                    )}

                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setCity(event.target.value)
                                    }}
                                />
                                {errors.city && <p className='error'>{errors.city.message}</p>}
                            </Grid>

                            <Grid item lg={6}>
                                <p>Phone number</p>
                                <MobileNumber
                                    fullWidth
                                    variant="outlined"
                                    value={mobilenumber}
                                    InputProps={{
                                        startAdornment: <StyledInputAdornment position="start">+46</StyledInputAdornment>,
                                    }}
                                    {...register("mobilenumber",
                                        {
                                            required: "Phone number is required.",
                                            pattern: {
                                                value: /^[789]\d{9}$/,
                                                message: "Phone number is invalid."
                                            }
                                        })}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setMobileNumber(event.target.value)
                                    }}
                                />
                                {errors.mobilenumber && <p className='error'>{errors.mobilenumber.message}</p>}
                            </Grid>
                        </Grid>
                        <UpdateButton type='submit'>Save</UpdateButton>
                    </form>
                </Box>
            </Modal>



            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modal' sx={{ width: '600px', maxWidth: '600px' }}>
                    <form onSubmit={handleSubmit2(saveAddress)}>
                        <div className='modal-top'>
                            <Typography component='h4' variant='h4'>Edit Address</Typography>
                            <div onClick={handleClose}>&times;</div>
                        </div>

                        <Grid container spacing={2}>
                            <Grid item lg={6}>
                                <p>Street name</p>
                                <CustomTextField
                                    {...register2("streetName",
                                        {
                                            required: "Street name is required."
                                        }
                                    )}
                                    fullWidth
                                    variant="outlined"
                                    type='text'
                                    value={streetName}

                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setStreetName(event.target.value)
                                    }}
                                />
                                {errors2.streetName && !streetName && <p className='error'>{errors2.streetName.message}</p>}
                            </Grid>

                            <Grid item lg={6}>
                                <p>House number</p>
                                <CustomTextField
                                    fullWidth
                                    variant="outlined"
                                    type='text'
                                    value={houseNumber}
                                    {...register2("houseNumber",
                                        {
                                            required: "House number is required."
                                        }
                                    )}

                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setHouseNumber(event.target.value)
                                    }}
                                />
                                {errors2.houseNumber && !houseNumber && <p className='error'>{errors2.houseNumber.message}</p>}
                            </Grid>

                            <Grid item lg={6}>
                                <p>Postal code</p>
                                <CustomTextField
                                    fullWidth
                                    variant="outlined"
                                    type='text'
                                    value={zipCode}
                                    {...register2("zipCode",
                                        {
                                            required: "Postal Code is required.",
                                            pattern: {
                                                value: /^[0-9]*$/,
                                                message: "PostalCode is invalid."
                                            },
                                            maxLength: {
                                                value: 6,
                                                message: 'Postal code must be 6 digits'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Postal code must be 6 digits'
                                            }
                                        })}

                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setZipCode(event.target.value)
                                    }}
                                />
                                {errors2.zipCode && !zipCode && <p className='error'>{errors2.zipCode.message}</p>}
                            </Grid>

                            <Grid item lg={6}>
                                <p>City</p>
                                <CustomTextField
                                    fullWidth
                                    variant="outlined"
                                    type='text'
                                    value={city}
                                    {...register2("city",
                                        {
                                            required: "City is required."
                                        }
                                    )}

                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setCity(event.target.value)
                                    }}
                                />
                                {errors2.city && !city && <p className='error'>{errors2.city.message}</p>}
                            </Grid>

                            <Grid item lg={6}>
                                <p>Phone number</p>
                                <MobileNumber
                                    fullWidth
                                    variant="outlined"
                                    value={mobilenumber}
                                    InputProps={{
                                        startAdornment: <StyledInputAdornment position="start">+46</StyledInputAdornment>,
                                    }}
                                    {...register2("mobilenumber",
                                        {
                                            required: "Phone number is required.",
                                            pattern: {
                                                value: /^[789]\d{9}$/,
                                                message: "Phone number is invalid."
                                            }
                                        })}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setMobileNumber(event.target.value)
                                    }}
                                />
                                {errors2.mobilenumber && !mobilenumber && <p className='error'>{errors2.mobilenumber.message}</p>}
                            </Grid>
                        </Grid>
                        <UpdateButton type='submit'>Save</UpdateButton>
                    </form>
                </Box>
            </Modal>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <StyledTableHead>
                        <StyledTableRowHeader>
                            <StyledTableCell align="left">Addresses</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </StyledTableRowHeader>
                    </StyledTableHead>

                    <StyledTableBody>
                        {addressDetails && addressDetails.map((dataItem, index) => (
                            <StyledTableRow
                                sx={{ cursor: 'auto' }}
                                key={index}
                            >
                                <StyledTableCell align="left">
                                    <span className='address-details'>
                                        <p>Address:&nbsp;</p>
                                        {dataItem.streetName} {dataItem.houseNumber}, {dataItem.zipCode} {dataItem.city}
                                    </span>
                                    <span className='address-details'>
                                        <p>Phone number:&nbsp;</p>
                                        {dataItem.mobilenumber}
                                    </span>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <RippleButton
                                        onClick={() => {
                                            setAddressId(dataItem.addressId)
                                            setZipCode(dataItem.zipCode);
                                            setHouseNumber(dataItem.houseNumber);
                                            setCity(dataItem.city);
                                            setMobileNumber(dataItem.mobilenumber);
                                            setStreetName(dataItem.streetName);
                                            handleOpen()
                                        }}
                                    >
                                        <img src={editIcon} alt="edit icon" />
                                    </RippleButton>
                                    <RippleButton onClick={deleteAddress}><img src={deleteIcon} alt="delete icon" /></RippleButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </StyledTableBody>
                </Table>
            </TableContainer>
            <HelperButton
                onClick={() => {
                    handleOpen2()
                }}
                sx={{ marginTop: '10px' }}>Add New Address</HelperButton>
        </div>
    )
}

export default Address