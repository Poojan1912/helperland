import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import {styled} from '@mui/material/styles'

const Buttons = () => {
    const BootstrapButton = styled(Button)({
        fontSize: 16
    })

    return (
        <Stack spacing={2} direction="row">
            <Button variant="text">Text button</Button>
            <Button color="primary" variant="contained">Contained button</Button>
            <Button color="primary" size="small" variant="outlined">Outlined button</Button>
            <Button disabled>Disabled button</Button>
            <BootstrapButton>Bootstrap</BootstrapButton>
        </Stack>
    )
}

export default Buttons
