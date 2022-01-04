import React from 'react'
import Checkbox from '@mui/material/Checkbox'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const Checkboxes = () => {
    return (
        <div>
            <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }}} defaultChecked />
            <Checkbox />
            <Checkbox disabled />
        </div>
    )
}

export default Checkboxes
