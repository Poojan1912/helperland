import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const Buttons = () => {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="text">Text button</Button>
            <Button color="error" variant="contained">Contained button</Button>
            <Button color="success" size="small" variant="outlined">Outlined button</Button>
            <Button disabled>Disabled button</Button>
        </Stack>
    )
}

export default Buttons
