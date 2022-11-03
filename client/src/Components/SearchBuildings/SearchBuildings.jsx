import React from 'react'
import { TextField, Button } from '@mui/material'
import { useNavigate } from "react-router-dom";
import './Assets/styles.css'

function SearchBuildings() {

    const navigate = useNavigate();

    const navigateToPlans = () => {
      navigate(`/SelectedPlans`);
      }
  return (
    <div className='contanerRegister'>
    <div className='contanerRegister-grid'>
        <div className=' title_'>
            <div>
                <h2>Plesure to meet you,Cristian!</h2>
                <h2>What is your install addres?</h2>
            </div>
            
        </div>
        <div className=' inputs_'>
            <div >
                <TextField  fullWidth label="STREET ADDRESS, CITY, STATE" id="fullWidth" />
                <label className='labelSearcBuildings'> I can't find my address</label>
            </div>
            <div >
                <TextField fullWidth label="APT #" id="fullWidth" />
            </div>
            
        </div>
        <div className='cotainerButtonAndlabel'>
            <div className=' buttonAndlabel'>
                <Button onClick={navigateToPlans} variant="contained">NEXT</Button>
                <label>STEP 1 OF 4</label>
            </div>
        </div>
       
  </div>
</div>
  )
}

export default SearchBuildings
