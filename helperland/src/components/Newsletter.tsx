import React from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/system'
import Box from '@mui/material/Box'
import OrangeButton from './OrangeButton'

const Newsletter = () => {
    const InputComponent = styled(TextField)({
        '& .MuiOutlinedInput-root':
        {
            borderRadius: '20px',
            height: '40px',
            width: '233px'
        },
        '& .MuiOutlinedInput-notchedOutline':
        {
            border: '1px solid #565656',
        },
        'input':
        {
            '&::placeholder':
            {
                color: '#565656',
                opacity: 1,
            }
        }
    })


    return (
        <div>
            <Typography mt={3} mb={1} textAlign="center" variant="h5" component="h5">GET OUR NEWSLETTER</Typography>
            <Box display={'flex'} justifyContent={'center'} className='newsletter' pb={8} pt={2}>
                <InputComponent id="outlined-basic" placeholder='YOUR EMAIL' variant="outlined" sx={{ pr: 1 }} />
                <OrangeButton value="Submit" />
            </Box>
        </div>
    )
}

export default Newsletter
