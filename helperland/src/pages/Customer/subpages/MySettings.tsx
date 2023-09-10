import React, { useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";

import Details from "./tabs/Details";
import ChangePassword from "./tabs/ChangePassword";
import { isAuthenticated } from "../../../api";
import Address from "./tabs/Address";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const MySettings = () => {
  const [value, setValue] = React.useState(0);

  const { email } = isAuthenticated();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="My Details" {...a11yProps(0)} />
          <Tab label="My Addresses" {...a11yProps(1)} />
          <Tab label="Change Password" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <div className="update-customer-details">
        <TabPanel value={value} index={0}>
          <Details email={email} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Address email={email} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ChangePassword email={email} />
        </TabPanel>
      </div>
    </Box>
  );
};

export default MySettings;
