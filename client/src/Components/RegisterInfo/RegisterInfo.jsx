import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import {  useNavigate } from "react-router-dom";
import classnames from 'classnames';

import './Assets/styles.css'

function RegisterInfo() {
    const navigate = useNavigate();
    const [dataUserOne, setDataUserOne] = useState({})
   /*  firstName */
    const [helperTextUserOne, setHelperTextUserOne] = useState("")
    const [errorsUserOne, setErrorsUserOne] = useState(false)
    /* LastName */
    const [helperTextUserOneLastName, setHelperTextUserOneLastName] = useState("")
    const [errorsUserOneLastName, setErrorsUserOneLastName] = useState(false)

    const navigateTobuilding = () => {

        if(errorsUserOne === false && dataUserOne.firstName.length > 2 && errorsUserOneLastName === false && dataUserOne.LastName.length > 2 ){
            navigate(`/Search`,{state: {dataUserOne}});
        }}

        const handleChangeUserOne = async (e) => {
            const value = e.target.value
            setDataUserOne({
                ...dataUserOne,
                [e.target.name]: value
            })
            const nameRegex = /^[a-zA-ZáéíóúñÁÉÍÓÚÑj]+$/;
           const validateFirstName = nameRegex.test(dataUserOne.firstName)
           const validateLastName = nameRegex.test(dataUserOne.LastName)

           /* validate name */
           if(dataUserOne.firstName.length>15 || !validateFirstName ){
            setErrorsUserOne(true) 
            setHelperTextUserOne("Invalid first name") 
           }else{
            setErrorsUserOne(false)
            setHelperTextUserOne("")
           }

            /* validate last name */
            if(dataUserOne.LastName.length>15 || !validateLastName ){
                setErrorsUserOneLastName(true) 
                setHelperTextUserOneLastName("invalid last name") 
               }else{
                setErrorsUserOneLastName(false)
                setHelperTextUserOneLastName("")
               }
        }

  return (
    <div className='containedRegister'>
        <div className='contanerRegister-grid'>
            <div className='contanerRegister-item title'>
                <h2>Awesome! Let's get started with the basics.</h2>
            </div>
            <div className='contanerRegister-item inputsRegister'>
              <div className={classnames(
                {'inputsText': errorsUserOne === true? true: false }
              )}  >

                    <TextField 
                    type='text' 
                    name='firstName' 
                    onChange={handleChangeUserOne}
                    helperText={helperTextUserOne}
                    error={errorsUserOne}
                    fullWidth 
                    label="First Name"

                    />
                </div>
                <div >
                    <TextField 
                    type='text' 
                    name='LastName' 
                    onChange={handleChangeUserOne} 
                    helperText={helperTextUserOneLastName}
                    error={errorsUserOneLastName}
                    fullWidth 
                    label="Last Name"  
                    />
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
