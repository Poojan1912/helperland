import React from 'react'
import Alert from '@mui/material/Alert'

const Alerts = () => {
    return (
        <div>
           <Alert severity="error">This is an error alert.</Alert> 
           <Alert severity="warning">This is an error alert.</Alert> 
           <Alert severity="info">This is an error alert.</Alert> 
           <Alert severity="success">This is an error alert.</Alert> 
        </div>
    )
}

export default Alerts
