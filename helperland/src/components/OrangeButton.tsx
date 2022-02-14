import React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

type nameProps = {
    value: string
}

const StyledButton = styled(Button)({
    backgroundColor: '#FF7B6D',
    textTransform: 'none',
    fontSize: 14,
    fontWeight: 400,
    borderRadius: 27,
    boxShadow: 'none',
    border: '1px solid #ffffff',
    height: '40px',
    width: '88px',
    '&:hover': {
        backgroundColor: '#dc5b4d',
        boxShadow: 'none',
        border: '1px solid #ffffff'
    }
});

export default function OrangeButton(props: nameProps) {
    return (
        <StyledButton variant="contained">{props.value}</StyledButton>
    )
}


