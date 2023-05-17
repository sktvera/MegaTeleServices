import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import {  Button } from '@mui/material'
import './Assets/styles.css'
function Header() {
  return (
    <div>

<AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>

        <Typography className='icon'  variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        <Link  to="/">
            MEGA TELE SERVICES
           </Link>
          </Typography>
        
          
          <nav className='nav'>
            <a
              variant="button"
              color="text.primary"
              href="https://github.com/sktvera/MegaTeleServices"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </a>
            <Link
              variant="button"
              color="text.primary"
              to="/Enterprise"
              sx={{ my: 1, mx: 1.5 }}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="text.primary"
              to="/Support"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
          <Link to='/login'>
          <Button   variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
          </Link>
        </Toolbar>
      </AppBar>
      
    </div>
  )
}

export default Header


