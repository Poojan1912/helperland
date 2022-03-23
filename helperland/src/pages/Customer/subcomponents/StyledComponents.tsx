import Button from '@mui/material/Button'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TextField from '@mui/material/TextField'
import TableBody from '@mui/material/TableBody'
import Select from '@mui/material/Select'
import InputAdornment from '@mui/material/InputAdornment'

import { styled } from '@mui/system'

export const RateSP = styled(Button)({
    backgroundColor: '#6DA9B5',
    color: '#FFFFFF',
    borderRadius: '17px',
    width: '70px',
    height: '34px',
    border: '1px solid #ffffff80',
    textTransform: 'initial',
    fontSize: '14px',
    fontWeight: 'normal',

    '&:hover': {
        backgroundColor: '#5193a0',
    }
})

export const UpdateButton = styled(Button)({
    backgroundColor: '#146371',
    color: '#FFFFFF',
    borderRadius: '17px',
    textTransform: 'initial',
    fontSize: '16px',
    fontWeight: 'normal',
    marginTop: '20px',
    width: '100%',
    '&:hover': {
        backgroundColor: '#0a5360',
    }
})

export const HelperButton = styled(Button)({
    backgroundColor: '#146371',
    color: '#FFFFFF',
    borderRadius: '17px',
    padding: '5px 10px',
    border: '1px solid #ffffff80',
    textTransform: 'initial',
    fontSize: '14px',
    fontWeight: 'normal',

    '&:hover': {
        backgroundColor: '#0a5360',
    }
})

export const CancelButton = styled(Button)({
    color: '#FFFFFF',
    backgroundColor: '#FF7B6D',
    textTransform: 'none',
    fontSize: '14px',
    fontWeight: 400,
    borderRadius: 27,
    padding: '5px 10px',
    boxShadow: 'none',
    border: '1px solid #ffffff',
    '&:hover': {
        backgroundColor: '#dc5b4d',
        boxShadow: 'none',
        border: '1px solid #ffffff'
    }
})

export const RequestCancelButton = styled(Button)({
    backgroundColor: '#6DA9B5',
    color: '#FFFFFF',
    borderRadius: '17px',
    textTransform: 'initial',
    fontSize: '16px',
    fontWeight: 'normal',
    marginTop: '20px',
    width: '100%',
    '&:hover': {
        backgroundColor: '#5193a0'
    }
})

export const SaveButton = styled(Button)({
    backgroundColor: '#1d7a8c',
    color: '#FFFFFF',
    padding: '11px 25px',
    borderRadius: '50px',
    fontSize: '16px',
    textTransform: 'initial',
    fontWeight: 'normal',
    border: 'none',
    '&:hover': {
        backgroundColor: '#146371'
    }
})

export const StyledTableHead = styled(TableHead)({
    backgroundColor: '#F9F9F9'
})

export const StyledTableRowHeader = styled(TableRow)({
    border: '1px solid #e8dada',
    '& .MuiTableCell-root': {
        color: '#646464',
        fontWeight: 'bold'
    }
})

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        '&.MuiTableCell-root': {
            paddingLeft: '4px',
            paddingRight: '4px'
        }
    },

    [theme.breakpoints.up("lg")]: {
        '&.MuiTableCell-root': {
            paddingLeft: '10px',
            paddingRight: '10px'
        }
    },

    '&.MuiTableCell-root': {
        borderBottom: 'none'
    }

}))

export const StyledTableBody = styled(TableBody)({
    '& .MuiTableCell-root': {
        color: '#646464'
    }
})

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    border: '1px solid #e8dada',
    cursor: 'pointer',
    '& .MuiTableCell-root': {
        color: '#646464',
    },

    [theme.breakpoints.down("lg")]: {
        '& .MuiTableCell-root': {
            paddingLeft: '10px',
            paddingRight: '10px'
        }
    },

    [theme.breakpoints.down("md")]: {
        '& .MuiTableCell-root': {
            paddingLeft: '5px',
            paddingRight: '5px'
        }
    },

}))

export const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        height: '46px',
    }
})

export const ReadTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        height: '46px',
        backgroundColor: '#f3f3f3'
    }
})

export const MobileNumber = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-input': {
        height: '13px'
    },

    '& .MuiOutlinedInput-root': {
        paddingLeft: '0'
    },

    [theme.breakpoints.down("sm")]: {
        '&.MuiTextField-root': {
            padding: '0 16px'
        },
    },
}))

export const StyledInputAdornment = styled(InputAdornment)({

    '&.MuiInputAdornment-root': {
        width: '46px',
        paddingLeft: '10px',
        paddingRight: '15px',
        height: '46px',
        maxHeight: 'none',
        backgroundColor: '#f3f3f3'
    },
})

export const DatePickerTextField = styled(TextField)({
    width: '146px',
    marginRight: '10px',
    '& .MuiOutlinedInput-root': {
        height: '46px',
    }
})

export const TimeSelect = styled(Select)({
    fontSize: '14px',
    color: '#646464',
    margin: "0 10px",
    width: '46%',

    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none'
    },

    '&.MuiInputBase-root': {
        marginLeft: '0'
    },

    '& .MuiSelect-select': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '12px',
        paddingBottom: '12px',
        paddingLeft: '12px',
        border: '1px solid #D6D6D6'
    },
    '& .MuiSelect-select .Mui-focused': {
        border: '1px solid #E1E1E1'
    }
})

export const Reason = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        color: '#646464'
    },
    '& .MuiOutlinedInput-root.Mui-focused fieldset': {
        borderColor: '#C8C8C8'
    },

    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: '#C8C8C8'
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#C8C8C8'
    },
})

export const RippleButton = styled(Button)({
    '&.MuiButton-root': {
        minWidth: '0',
        borderRadius: '50%'
    }
})

export const Feedback = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        color: '#646464'
    },
    '& .MuiOutlinedInput-root.Mui-focused fieldset': {
        borderColor: '#C8C8C8'
    },

    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: '#C8C8C8'
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#C8C8C8'
    },
})