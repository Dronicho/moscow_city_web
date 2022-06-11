import React from 'react'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Box, Typography } from '@mui/material';

function Logo() {
  return (
    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
      <SupervisedUserCircleIcon color='primary' />
      <Typography color='primary'>
        ВОЛОНТËР
      </Typography>
    </Box>
  )
}

export default Logo;