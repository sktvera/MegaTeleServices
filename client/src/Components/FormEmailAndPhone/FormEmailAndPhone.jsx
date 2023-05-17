import { useState } from "react";
import { TextField, Button } from '@mui/material'
import './Assets/styles.css'
import {  useNavigate } from "react-router-dom";
import PromCodeBody from '../../Components/PromCodeBody/PromCodeBody'


function FormEmailAndPhone() {

const [promCode, setPromCode] = useState(false)

const navigate = useNavigate();

const navigateToResult = () => {
  navigate(`/Result`);
  }

  return (
    <div className='containerEmailAndPhone'>
        <div className='containerEmailAndPhone-grid'>
            <div className=' title'>
                <h2>Great news! your first month's free!</h2>
                <p>To get up, just provide your email and phone number and we can remind you when the free trial ends.</p>
            </div>
            
                <div className=' inputs'>
                    
                    <div >
                        <TextField className='inputsText' fullWidth label="EMAIL" id="fullWidth" />
                    </div>
                    <div >
                        <TextField fullWidth label="PHONE NUMBER" id="fullWidth" />
                        
                        <label onClick={()=>setPromCode(!promCode)} className='inputsTextLabel'> I have a promo code!</label>
                       {
                        promCode === true ?
                        <PromCodeBody/>
                        :null
                       }
                       
                    </div>
                    
                </div>
            
            <div className='cotainerButtonAndlabel'>
                <div className=' buttonAndlabel'>
                    <Button onClick={navigateToResult} variant="contained">SUSBCRIBE NOW!</Button>
                    <label>STEP 4 OF 4</label>
                </div>
            </div>
           
      </div>
    </div>
  )
}

export default FormEmailAndPhone
