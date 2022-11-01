import React from 'react'
import './Assets/styles.css'
import{ Button,Grid,Box }  from '@mui/material'

function WelcomeHome() {
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
                  <Button variant="contained" className='buttonWelcome'>Let's DO IT!</Button>
              </Box>
        </Grid>
    </div>
  )
}

export default WelcomeHome
