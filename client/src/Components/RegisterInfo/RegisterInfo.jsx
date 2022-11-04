import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import './Assets/styles.css'
import { useNavigate } from "react-router-dom";


function RegisterInfo() {
    const navigate = useNavigate();
    const [dataUserOne, setDataUserOne] = useState({})
    
    const navigateTobuilding = () => {
        navigate(`/Search`,{state: {dataUserOne}});
        }

        const handleChangeUserOne = (e) => {
            const value = e.target.value
            setDataUserOne({
                ...dataUserOne,
                [e.target.name]: value
            })
            console.log(dataUserOne)
        }

  return (
    <div className='contanerRegister'>
        <div className='contanerRegister-grid'>
            <div className='contanerRegister-item title'>
                <h2>Awesome! Let's get started with the basics.</h2>
            </div>
            <div className='contanerRegister-item inputs'>
                <div >
                    <TextField name='firstName' onChange={handleChangeUserOne} className='inputsText' fullWidth label="FIRST NAME" id="fullWidth" />
                </div>
                <div >
                    <TextField name='LastName' onChange={handleChangeUserOne} fullWidth label="LAST NAME" id="fullWidth" />
                </div>
                
            </div>
            <div className='cotainerButtonAndlabel'>
                <div className='contanerRegister-item buttonAndlabel'>
                    <Button  onClick={navigateTobuilding} variant="contained">NEXT</Button>
                    <label>STEP 1 OF 4</label>
                </div>
            </div>
           
      </div>
    </div>
  )
}

export default RegisterInfo
