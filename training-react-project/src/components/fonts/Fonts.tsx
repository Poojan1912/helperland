import React from 'react'
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const Fonts = () => {
    return (
        <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Typography variant="h2" component="div" gutterBottom>
                H2 Heading
            </Typography>
            <Typography variant="h3" component="div" gutterBottom>
                H3 Heading
            </Typography>
            <Typography variant="h4" component="div" gutterBottom>
                H4 Heading
            </Typography>
            <Typography variant="subtitle1" component="div" gutterBottom>
                Subtitle level 1
            </Typography>
            <Typography variant="subtitle2" component="div" gutterBottom>
                Subtitle level 2
            </Typography>
            <Typography variant="body1" component="div" gutterBottom>
                Body content level 1
            </Typography>
        </Box>
    )
}

export default Fonts
