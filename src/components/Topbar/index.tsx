import React from 'react'
import { AppBar, Badge, Box, IconButton, Toolbar, Typography, Button, Tabs, Tab } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Logo from '../Logo';
import { Link, useLocation } from 'react-router-dom';

const routes = [{
  name: 'ПРОЕКТЫ',
  path: '/login'
},
{
  name: 'РЕЙТИНГ',
  path: '/register'
},
{
  name: 'ZALUPA',
  path: '/home'
},

]

function Topbar() {
  const location = useLocation();
  return (
    <>
    <AppBar position='fixed' color='inherit' elevation={0}>
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}
      >
        <Logo />
        <Tabs value={location.pathname}>
          {routes.map((page) => (
            <Tab
              component={Link}
              value={page.path}
              to={page.path}
              key={page.path}
              // onClick={handleCloseNavMenu}
              label={page.name}
            />
          ))}
        </Tabs>
      </Toolbar >
    </AppBar >
    <Toolbar sx={{mb: 1}} />
    </>
  )
}

export default Topbar