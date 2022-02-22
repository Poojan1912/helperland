import React from 'react'
import Typography from '@mui/material/Typography'
import { add, adminUser, group38, helperland, logout, sort } from '../assets/images'
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Pagination } from '@mui/material';


function createData(
    userName: string,
    userType: string,
    role: string,
    postalCode: number,
    city: string,
    radius: number,
    userStatus: string,
) {
    return { userName, userType, role, postalCode, city, radius, userStatus };
}

const tableRows = [
    createData("Lyum Watson", "Call Center", "Inquiry Manager", 123456, "Berlin", 0, "Active"),
    createData("John Smith", "Service provider", "", 123456, "Berlin", 10, "Active"),
    createData("John Smith", "Call Center", "Inquiry Manager", 123456, "Berlin", 0, "Active"),
    createData("John Smith", "Customer", "", 123456, "Berlin", 0, "Active"),
    createData("John Smith", "Call Center", "Content Manager", 123456, "Berlin", 0, "Active"),
    createData("John Smith", "Customer", "", 123456, "Berlin", 0, "Inactive"),
    createData("John Smith", "Service Provider", "", 123456, "Berlin", 20, "Active"),
    createData("John Smith", "Call Center", "Finance Manager", 123456, "Berlin", 0, "Active"),
    createData("John Smith", "Customer", "", 123456, "Berlin", 0, "Active"),
    createData("John Smith", "Customer", "", 123456, "Berlin", 0, "Active")
]

const rows = {
    serviceManagement: 'Service Management',
    roleManagement: 'Role Management',
    couponManagement: {
        couponCodes: 'Coupon Codes',
        usageHistory: 'Usage History'
    },
    escalationManagement: 'Escalation Management',
    serviceRequests: 'Service Requests',
    serviceProviders: 'Service Providers',
    userManagement: 'User Management',
    financeModule: {
        allTransactions: 'All Transactions',
        generatePayment: 'Generate Payment',
        customerInvoices: 'Customer Invoices'
    },
    zipManagement: 'Zip Code Management',
    ratingManagement: 'Rating Management',
    inquiryManagement: 'Inquiry Management',
    newsletterManagement: 'Newsletter Management',
    contentManangement: {
        blog: 'blog',
        faqs: 'FAQs'
    }
}

const SearchButton = styled(Button)({
    backgroundColor: '#1FB6FF',
    color: '#FFFFFF',
    fontWeight: 'normal',
    width: '84px',
    height: '46px',
    textTransform: 'capitalize',

    '&:hover': {
        backgroundColor: '#167fb3'
    }
})

const ClearButton = styled(Button)({
    backgroundColor: '#FFFFFF',
    color: '#646464',
    border: '1px solid #DEDDDD',
    fontWeight: 'normal',
    textTransform: 'capitalize',
    width: '84px',
    height: '46px',
    '&:hover': {
        color: '#FFF',
        backgroundColor: '#1fb6ff'
    }
})

const StyledPagination = styled(Pagination)({
    borderRight: '1px solid #D6D6D6',
    '& .MuiPaginationItem-root': {
        color: '#646464',
        height: '40px',
        width: '40px',
        margin: '0',
        borderRadius: '0',
        borderRight: 'none',
        borderTop: '1px solid #D6D6D6',
        borderBottom: '1px solid #D6D6D6',
        borderLeft: '1px solid #D6D6D6'
    },
    '& .MuiButtonBase-root': {
        '&.Mui-selected': {
            backgroundColor: '#565656',
            color: '#FFFFFF',

            '&:hover': {
                backgroundColor: '#454545'
            }
        }
    }
})

const StyledButton = styled(Button)({
    backgroundColor: '#1fb6ff',
    color: '#ffffff',
    width: '132px',
    height: '36px',
    fontSize: '14px',
    fontWeight: 'normal',
    textTransform: 'capitalize',
    padding: '9px 11px',

    '&:hover': {
        backgroundColor: '#167fb3'
    }
})

const StyledInputAdornment = styled(InputAdornment)({
    '&.MuiInputAdornment-root': {
        width: '57px',
        paddingLeft: '15px',
        paddingRight: '15px',
        height: '46px',
        maxHeight: 'none',
        backgroundColor: '#f3f3f3',
        borderTopLeftRadius: '4px',
        borderBottomLeftRadius: '4px',
        borderRight: '1px solid #DEDDDD'
    },
})

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontSize: '16px',
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

const StyledTableBody = styled(TableBody)({
    '& .MuiTableCell-root': {
        color: '#646464',
        backgroundColor: '#FFFFFF'
    }
})

const StyledTableHead = styled(TableHead)({
    backgroundColor: '#F9F9F9'
})

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    border: '1px solid #e8dada',
    '& .MuiTableCell-root': {
        color: '#646464'
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
    }
}))


const StyledMenu = styled(Menu)({
    '& .MuiPaper-root': {
        width: '163px',
        boxShadow: '0 0 6px #F4F4F4'
    }
})

const ZipCode = styled(TextField)({
    width: '140px',
    '& .MuiOutlinedInput-root': {
        height: '46px',
        color: '#A0A0A0'
    },

    '& .MuiOutlinedInput-root.Mui-focused fieldset': {
        borderColor: '#DEDDDD'
    },

    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: '#DEDDDD'
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#DEDDDD'
    }
})

const StyledTextField = styled(TextField)({
    width: '219px',
    '& .MuiOutlinedInput-input': {
        height: '13px'
    },

    '& .MuiOutlinedInput-root': {
        color: '#A0A0A0',
        paddingLeft: '0',
    },

    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: '#DEDDDD',

    },

    '& .MuiOutlinedInput-root.Mui-focused fieldset': {
        borderColor: '#DEDDDD'
    },

    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#DEDDDD'
    }
})

const CustomSelect = styled(Select)({
    fontSize: '14px',
    color: '#646464',
    margin: "0 10px",

    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none'
    },

    '& .MuiSelect-select': {

        maxHeight: '38px',
        paddingTop: '9px',
        paddingBottom: '9px',
        paddingLeft: '9px',
        // paddingRight: '33px',
        // padding: '7px 10px',
        border: '1px solid #D6D6D6'
    },
    '& .MuiSelect-select .Mui-focused': {

        border: '1px solid #E1E1E1'
    }

})

const StyledTableRowHeader = styled(TableRow)({
    border: '1px solid #e8dada',
    '& .MuiTableCell-root': {
        color: '#646464',
        fontWeight: 'bold'
    }
})

const userNameValues = [
    "Lyum Watson",
    "John Smith"
];

const userRoleValues = [
    "Inquiry Manager",
    "Content Manager",
    "Finance Manager"
]

const UserManagement = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [userName, setUserName] = React.useState('');
    const [userRole, setUserRole] = React.useState('');
    const [paginationValue, SetPaginationValue] = React.useState(10);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const element = document.getElementById('menu-toggle')!
        { anchorEl && element.classList.add('admin-menu-toggle') }
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handlePaginationChange = (value: number) => {
        SetPaginationValue(value);
    }

    const handleChange = (event: SelectChangeEvent<typeof userName>) => {
        setUserName(
            event.target.value
        );
    };

    const handleChangeRoles = (event: SelectChangeEvent<typeof userRole>) => {
        setUserRole(
            event.target.value
        );
    };

    return (
        <div>
            <div className='admin-nav'>
                <div>
                    <img src={helperland} alt="helperland logo" />
                </div>
                <div className='admin-profile'>
                    <img src={adminUser} alt="admin logo" />
                    <p>James Smith</p>
                    <img src={logout} alt="logout button" />
                </div>
            </div>

            <div className='user-management-row'>
                <ul className='admin-sidebar'>
                    <li>{rows.serviceManagement}</li>
                    <li>{rows.roleManagement}</li>
                    <li>{rows.escalationManagement}</li>
                    <li>{rows.serviceRequests}</li>
                    <li>{rows.serviceProviders}</li>
                    <li>{rows.userManagement}</li>
                    {/* <li>{rows.financeModule}</li> */}
                    <li>{rows.zipManagement}</li>
                    <li>{rows.ratingManagement}</li>
                    <li>{rows.inquiryManagement}</li>
                    <li>{rows.newsletterManagement}</li>
                    <li></li>
                </ul>

                <div className='admin-table'>
                    <div className='admin-title'>
                        <Typography component="h4" variant="h4">
                            User Management
                        </Typography>
                        <StyledButton className='add-user-button'>
                            <img src={add} alt="add icon" />
                            <p>Add New User</p>
                        </StyledButton>
                    </div>

                    <div className='admin-filter'>
                        <Select
                            sx={{ height: '46px', width: '205px' }}
                            displayEmpty
                            value={userName}
                            input={<OutlinedInput />}
                            placeholder="User name"
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'Without label' }}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <p style={{ color: '#A0A0A0' }}>User name</p>;
                                }
                                return selected
                            }}
                        >
                            {userNameValues.map((data) => (
                                <MenuItem
                                    key={data}
                                    value={data}
                                >
                                    {data}
                                </MenuItem>
                            ))}
                        </Select>
                        <Select
                            sx={{ height: '46px', width: '205px' }}
                            displayEmpty
                            value={userRole}
                            input={<OutlinedInput />}
                            placeholder="User role"
                            onChange={handleChangeRoles}
                            inputProps={{ 'aria-label': 'Without label' }}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <p style={{ color: '#A0A0A0' }}>User role</p>;
                                }
                                return selected
                            }}
                        >
                            {userRoleValues.map((data) => (
                                <MenuItem
                                    key={data}
                                    value={data}
                                >
                                    {data}
                                </MenuItem>
                            ))}
                        </Select>
                        <StyledTextField
                            InputProps={{
                                startAdornment: <StyledInputAdornment position="start">+49</StyledInputAdornment>,
                            }}
                            fullWidth id="outlined-basic" placeholder='Phone number' variant="outlined" />
                        <ZipCode fullWidth id="outlined-basic" placeholder='Zipcode' variant="outlined" />
                        <SearchButton>
                            Search
                        </SearchButton>
                        <ClearButton>
                            Clear
                        </ClearButton>

                    </div>

                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <StyledTableHead>
                                <StyledTableRowHeader>
                                    <StyledTableCell align="left">User Name &nbsp;<img src={sort} alt="sort icon" /></StyledTableCell>
                                    <StyledTableCell align="left">User Type</StyledTableCell>
                                    <StyledTableCell align="left">Role</StyledTableCell>
                                    <StyledTableCell align="left">Postal Code &nbsp;<img src={sort} alt="sort icon" /></StyledTableCell>
                                    <StyledTableCell align="left">City</StyledTableCell>
                                    <StyledTableCell align="left">Radius&nbsp;<img src={sort} alt="sort icon" /></StyledTableCell>
                                    <StyledTableCell align="left">User Status&nbsp;<img src={sort} alt="sort icon" /></StyledTableCell>
                                    <StyledTableCell align="center">Actions</StyledTableCell>
                                </StyledTableRowHeader>
                            </StyledTableHead>
                            <StyledTableBody>
                                {tableRows.map((row, index) => (
                                    <StyledTableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <StyledTableCell align="left">
                                            {row.userName}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {row.userType}
                                        </StyledTableCell>
                                        <StyledTableCell >
                                            {row.role}
                                        </StyledTableCell>
                                        <StyledTableCell >
                                            {row.postalCode}
                                        </StyledTableCell>
                                        <StyledTableCell >
                                            {row.city}
                                        </StyledTableCell>
                                        <StyledTableCell >
                                            {row.radius !== 0 &&
                                                <p>{row.radius} km</p>
                                            }
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {row.userStatus === "Active" &&
                                                <p className='user-status'>Active</p>
                                            }
                                            {row.userStatus === "Inactive" &&
                                                <p className='user-status user-inactive-status'>Inactive</p>
                                            }

                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Button
                                                id="menu-toggle"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                disableFocusRipple
                                                disableRipple
                                                onClick={handleClick}
                                                className='navbar-menu'
                                            >
                                                <img src={group38} alt="kebab-menu" />
                                            </Button>
                                            <StyledMenu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                    'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                <MenuItem onClick={handleClose}>Edit</MenuItem>
                                                <MenuItem onClick={handleClose}>Deactivate</MenuItem>
                                            </StyledMenu>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </StyledTableBody>
                        </Table>
                    </TableContainer>
                    <div className="admin-pagination">
                        <div>
                            <p>Show</p>
                            <CustomSelect
                                value={paginationValue}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem onClick={() => handlePaginationChange(10)} value={10}>10</MenuItem>
                                <MenuItem onClick={() => handlePaginationChange(20)} value={20}>20</MenuItem>
                                <MenuItem onClick={() => handlePaginationChange(30)} value={30}>25</MenuItem>
                            </CustomSelect>
                            <p>Entries</p>
                        </div>
                        <StyledPagination count={5} variant="outlined" />
                    </div>
                    <p className='admin-copyright'>©2018 Helperland. All rights reserved.</p>
                </div>
            </div>
        </div >
    )
}

export default UserManagement