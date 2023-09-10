import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import TablePagination from "@mui/material/TablePagination";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import {
  calender2,
  calenderBookService,
  included,
  layer14,
  notIncluded,
  sort,
} from "../../../assets/images";

import {
  CancelButton,
  DatePickerTextField,
  HelperButton,
  Reason,
  RequestCancelButton,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTableRow,
  StyledTableRowHeader,
  TimeSelect,
  UpdateButton,
} from "../subcomponents/StyledComponents";
import {
  cancelService,
  reschuduleService,
  serviceRequests,
} from "../CustomerService";
import { Link, Navigate } from "react-router-dom";
import { isAuthenticated } from "../../../api";

const Dashboard = () => {
  const [serviceData, setServiceData] = useState<any[]>([]);
  const [date, setDate] = React.useState<Date | null>(new Date());
  const [serviceId, setServiceId] = useState();
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("2:00 PM");
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [reason, setReason] = useState("");
  const [duration, setDuration] = useState<number>(0);
  const [payment, setPayment] = useState<number>(0);
  const [comment, setComment] = useState("");
  const [pet, setPet] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [cabinet, setCabinet] = React.useState(false);
  const [fridge, setFridge] = React.useState(false);
  const [oven, setOven] = React.useState(false);
  const [laundry, setLaundry] = React.useState(false);
  const [windows, setWindows] = React.useState(false);
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleOpen2 = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setOpen2(true);
  };
  const handleClose2 = () => setOpen2(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const { email } = isAuthenticated();

  useEffect(() => {
    serviceRequests(email).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log("Response: ", data);
        setServiceData(data);
      }
    });
  }, []);

  const updateService = () => {
    handleClose();
    reschuduleService({ serviceId, time, date, email }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
        serviceRequests(email).then((data2) => {
          if (data2.error) {
            console.log(data2.error);
          } else {
            console.log("Response: ", data2);
            setServiceData(data2);
          }
        });
      }
    });
  };

  const cancelRequest = () => {
    handleClose2();
    cancelService({ serviceId, reason, email }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
        serviceRequests(email).then((data2) => {
          if (data2.error) {
            console.log(data2.error);
          } else {
            console.log("Response: ", data2);
            setServiceData(data2);
          }
        });
      }
    });
  };

  const handleDateChange = (newValue: Date | null) => {
    setDate(newValue);
  };

  const handleTimeChange = (value: string) => {
    setTime(value);
  };

  return (
    <div>
      <div className="service-component-top">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Box className="modal">
            <div className="modal-top">
              <Typography component="h4" variant="h4">
                Reschedule Service Request
              </Typography>
              <div onClick={handleClose}>&times;</div>
            </div>
            <p style={{ paddingTop: "20px" }}>Select New Date & Time</p>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                disablePast
                inputFormat="MM/dd/yyyy"
                value={date}
                onChange={handleDateChange}
                InputAdornmentProps={{
                  position: "start",
                }}
                renderInput={(params) => <DatePickerTextField {...params} />}
                components={{
                  OpenPickerIcon: () => (
                    <img src={calenderBookService} alt="calender-icon" />
                  ),
                }}
              />
            </LocalizationProvider>
            <TimeSelect
              value={time}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem
                onClick={() => handleTimeChange("2:00 PM")}
                value={"2:00 PM"}
              >
                &nbsp;&nbsp;2:00 PM
              </MenuItem>
              <MenuItem
                onClick={() => handleTimeChange("10:00 AM")}
                value={"10:00 AM"}
              >
                &nbsp;&nbsp;10:00 AM
              </MenuItem>
              <MenuItem
                onClick={() => handleTimeChange("12:30 PM")}
                value={"12:30 PM"}
              >
                &nbsp;&nbsp;12:30 PM
              </MenuItem>
            </TimeSelect>
            <UpdateButton onClick={() => updateService()}>Update</UpdateButton>
          </Box>
        </Modal>

        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Box className="modal">
            <div className="modal-top">
              <Typography component="h4" variant="h4">
                Cancel Service Request
              </Typography>
              <div onClick={handleClose2}>&times;</div>
            </div>
            <p style={{ fontSize: "17px", paddingBottom: "5px" }}>
              Why you want to cancel service requst?
            </p>
            <Reason
              fullWidth
              multiline
              minRows={3}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setReason(event.target.value);
              }}
            />
            <RequestCancelButton onClick={cancelRequest}>
              Cancel Now
            </RequestCancelButton>
          </Box>
        </Modal>

        <Typography component="h4" variant="h4">
          Current Service Requests
        </Typography>
        <Link to="/book-service">
          <HelperButton>Add New Service Request</HelperButton>
        </Link>
      </div>

      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <StyledTableHead>
            <StyledTableRowHeader>
              <StyledTableCell align="left">
                Service Id &nbsp;
                <img src={sort} alt="sort icon" />
              </StyledTableCell>
              <StyledTableCell align="left">
                Service Date &nbsp;
                <img src={sort} alt="sort icon" />
              </StyledTableCell>
              <StyledTableCell align="center">
                Service Provider &nbsp;
                <img src={sort} alt="sort icon" />
              </StyledTableCell>
              <StyledTableCell align="center">
                Payment &nbsp;
                <img src={sort} alt="sort icon" />
              </StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </StyledTableRowHeader>
          </StyledTableHead>

          <StyledTableBody>
            {serviceData &&
              serviceData.map((dataItem) => (
                <StyledTableRow
                  onClick={(event) => {
                    setServiceId(dataItem.serviceId);
                    setDate(new Date(dataItem.date));
                    setTime(dataItem.time);
                    setPayment(dataItem.finalPrice);
                    setDuration(dataItem.duration);
                    setMobileNumber(dataItem.addressData.mobilenumber);
                    setPet(dataItem.pet);
                    setAddress(
                      dataItem.addressData.streetName +
                        " " +
                        dataItem.addressData.houseNumber
                    );
                    setComment(dataItem.comments);
                    setCabinet(dataItem.cabinet);
                    setFridge(dataItem.fridge);
                    setOven(dataItem.oven);
                    setLaundry(dataItem.laundry);
                    setWindows(dataItem.windows);
                    handleOpen3();
                  }}
                  key={dataItem.serviceId}
                >
                  <Modal
                    open={open3}
                    onClose={handleClose3}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Box className="modal service-details-modal">
                      <Typography component="h4" variant="h4">
                        Service Details
                      </Typography>
                      <p className="modal-title">
                        {time} {date?.toLocaleDateString("en-GB")}
                      </p>
                      <p className="modal-title">
                        Duration:{" "}
                        <span className="modal-data-item">
                          {duration} hours
                        </span>
                      </p>
                      <hr />
                      <p className="modal-title">
                        Service-ID:&nbsp;
                        <span className="modal-data-item">{serviceId}</span>
                      </p>
                      <p className="modal-title">
                        Extras:&nbsp;
                        <span className="modal-data-item">
                          {cabinet && <p>Cleaning Cabinet</p>}
                          {fridge && <p>Cleaning the fridge</p>}
                          {oven && <p>Cleaning the oven</p>}
                          {laundry && <p>Cleaning the laundry</p>}
                          {windows && <p>Cleaning the windows.</p>}
                        </span>
                      </p>
                      <p
                        className="modal-title"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        Total price:&nbsp;
                        <span className="modal-data-item">
                          <div className="service-payment">
                            <Typography
                              component="h4"
                              variant="h4"
                              sx={{
                                fontWeight: "bold !important",
                              }}
                            >
                              {payment}€
                            </Typography>
                          </div>
                        </span>
                      </p>
                      <hr />
                      <p className="modal-title">
                        Address:{" "}
                        <span className="modal-data-item">{address}</span>
                      </p>
                      <p className="modal-title">
                        Billing Address:{" "}
                        <span className="modal-data-item">Same as address</span>
                      </p>
                      <p className="modal-title">
                        Phone:{" "}
                        <span className="modal-data-item">
                          +49 {mobileNumber}
                        </span>
                      </p>
                      <p className="modal-title">
                        E-Mail: <span className="modal-data-item">{email}</span>
                      </p>
                      <hr />
                      <p className="modal-title">
                        Do you want to tell your helper something?{" "}
                        <span className="modal-data-item">{comment}</span>
                      </p>
                      <p className="modal-data">
                        <p
                          className="modal-data-item"
                          style={{ paddingBottom: "10px" }}
                        >
                          {pet ? (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <img src={included} alt="" />
                              <p>I have pets at home.</p>
                            </div>
                          ) : (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <img src={notIncluded} alt="" />
                              <p>I do not have pets at home.</p>
                            </div>
                          )}
                        </p>
                      </p>
                      <HelperButton
                        onClick={(event) => {
                          // (dataItem.serviceId)
                          console.log(new Date());
                          handleOpen(event);
                        }}
                      >
                        Reschedule
                      </HelperButton>
                      <CancelButton
                        onClick={(event) => {
                          handleOpen2(event);
                        }}
                      >
                        Cancel
                      </CancelButton>
                    </Box>
                  </Modal>
                  <StyledTableCell align="left">
                    {dataItem.serviceId}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <div className="service-date">
                      <img src={calender2} alt="Calender icon" />
                      <p>
                        &nbsp;
                        {new Date(dataItem.date).toLocaleDateString("en-GB")}
                      </p>
                    </div>
                    <div className="service-time">
                      <img
                        width="17"
                        height="17"
                        src={layer14}
                        alt="clock icon"
                      />
                      <p> {dataItem.time}</p>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center" className="service-payment">
                    <Typography component="h4" variant="h4">
                      <span>{dataItem.finalPrice}€</span>
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <HelperButton
                      onClick={(event) => {
                        setServiceId(dataItem.serviceId);
                        console.log(new Date());
                        setDate(new Date(dataItem.date));
                        setTime(dataItem.time);
                        handleOpen(event);
                      }}
                    >
                      Reschedule
                    </HelperButton>
                    <CancelButton
                      onClick={(event) => {
                        setServiceId(dataItem.serviceId);
                        handleOpen2(event);
                      }}
                    >
                      Cancel
                    </CancelButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </StyledTableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
