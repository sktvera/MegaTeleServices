import React, { useState } from 'react'
import { Button } from '@mui/material'
import AcceptedBlue from './Assets/Img/AcceptedBlue.png'
import { Link } from "react-router-dom";
import { useLocation} from 'react-router';

import './Assets/styles.css'

function ResultMegaTvServices() {
  const location = useLocation();


  return (
    <div className='ResultMegaTvServices'>
        <div className='cardResult'>
              <div className='imgAndH2'>
                 <div className='grid-imgAndH2'>
                    <h2>Aceppt</h2>
                    <div className='AcceptedBlue'>
                        <img src={AcceptedBlue} alt="Accepted Blue" />
                    </div>
                 </div>
              </div>
              <div className='navigateAndParagraph'>
                  <div className='Paragraph'>
                        <p>
                        Congratulations, your order was taken successfully, check your <strong>Email: {location.state.dataUserOne.email}</strong>  or  <strong>Phone Number: {location.state.dataUserOne.number}</strong>  in the afternoon your username and password will be sent to you; Mega Tele Services
                        </p>
                  </div>
                  <div className='buttonNavigate'>
                   <Link to='/'>
                        <Button variant="contained">Finish</Button>
                    </Link>
                  </div>
              </div>
             
        </div>
    </div>
  )
}

export default ResultMegaTvServices
