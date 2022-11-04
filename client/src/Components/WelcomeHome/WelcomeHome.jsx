import React from 'react'
import './Assets/styles.css'
import{ Button,Grid,Box }  from '@mui/material'
import { useNavigate } from "react-router-dom";

function WelcomeHome() {
  const navigate = useNavigate();

  const navigateTologin = () => {
    navigate(`/FormLogin`);
    }

  return (
    <div className='containerWelcome'>
        <Grid >
              <Box className='itemWelcome'>
                  <h1>The Best TV service</h1>
                  <h1>around!</h1>
              </Box>
              
              <Box className='itemWelcome'>
                  <label>Are you ready to enjoy ultra-best service?</label>
              </Box>
              <Box className='itemWelcome'>
                <div className='buttonContainer'>
                <Button
                  onClick={navigateTologin} 
                  variant="contained" 
                  className='buttonWelcome'>Let's DO IT!</Button>
                </div>
                
              </Box>
        </Grid>
    </div>
  )
}

export default WelcomeHome
