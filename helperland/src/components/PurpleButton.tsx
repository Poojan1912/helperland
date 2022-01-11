import React from 'react'
import {styled} from '@mui/material/styles'
import Button from '@mui/material/Button'

type nameProps = {
    value: string
}

const StyledButton = styled(Button)({
    backgroundColor: 'rgba(0, 96, 114, 0.6)',
    textTransform: 'none',
    fontSize: 18,
    fontWeight: 400,
    borderRadius: 27,
    boxShadow: 'none',
    border: '1px solid #ffffff',
    height: 54,
    width: 225,
    '&:hover': {
        backgroundColor: '#fff',
        color: '#1d7a8c',
        boxShadow: 'none',
        border: '1px solid #ffffff'
    }
});

export default function PurpleButton(props: nameProps) {
    return (
        <StyledButton variant="contained">{props.value}</StyledButton>
    )
}


