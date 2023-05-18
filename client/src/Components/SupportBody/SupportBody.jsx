import React from 'react'
import { Button } from '@mui/material'

import './Assets/styles.css'

const SupportBody =()=> {
  return (
    <div className='SupportBody '>
        <div className='contaned-grid-support'>
            <div className='title-support'>
                <h2>MEGA TELE SERVICES - SUPPORT</h2>
                <p>how can we help you?</p>
            </div>
            <div className='body'>
            <Button  fullWidth href='https://walink.co/dd1ede' variant="contained">chat online</Button>
            </div>
        </div>
    </div>
  )
}


export default SupportBody