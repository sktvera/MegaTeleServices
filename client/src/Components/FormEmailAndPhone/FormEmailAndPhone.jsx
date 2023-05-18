import { useState } from "react";
import { TextField, Button } from '@mui/material'
import {  useNavigate } from "react-router-dom";
import PromCodeBody from '../../Components/PromCodeBody/PromCodeBody'

import './Assets/styles.css'

function FormEmailAndPhone() {

const [promCode, setPromCode] = useState(false)

 /*  Email */
 const [helperTextEmail, setHelperTextEmail] = useState("")
 const [errorsEmail, setErrorsEmail] = useState(false)
 /* Password */
 const [helperTextPassword, setHelperTextPassword] = useState("")
 const [errorsPassword, setErrorsPassword] = useState(false)

 const [dataUserOne, setDataUserOne] = useState({})

const navigate = useNavigate();

const navigateToResult = () => {

    if(errorsPassword === false && errorsEmail === false && dataUserOne.email.length > 12 &&  dataUserOne.number > 7 ){
        navigate(`/Result`,{state: {dataUserOne}})
    }

  }


  const handleChangeUserOne = async (e) => {
    const value = e.target.value
    setDataUserOne({
        ...dataUserOne,
        [e.target.name]: value
    })
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const phoneNumberRegex = /^\+?\d{0,3}[-\s]?\(?(\d{1,})\)?[-\s]?(\d{1,})[-\s]?(\d{1,})$/;
    const validateEmail = emailRegex.test(dataUserOne.email)
    const validateNumber = phoneNumberRegex.test(dataUserOne.number)

    /* validate Email */
    if(!validateEmail ){
        setErrorsEmail(true) 
     setHelperTextEmail("Invalid Email") 
    }else{
        setErrorsEmail(false)
     setHelperTextEmail("")
    }

     /* validate Password */
     if(!validateNumber ){
        setErrorsPassword(true) 
         setHelperTextPassword("Invalid phone number") 
        }else{
            setErrorsPassword(false)
            setHelperTextPassword("")
        }


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
                        <TextField 
                        type='email' 
                        name='email' 
                        onChange={handleChangeUserOne}
                        helperText={helperTextEmail}
                        error={errorsEmail}
                        className='inputsText' 
                        fullWidth 
                        label="Email" 
                       
                        />
                    </div>
                    <div >
                        <TextField 
                        type='number' 
                        name='number' 
                        onChange={handleChangeUserOne}
                        helperText={helperTextPassword}
                        error={errorsPassword}
                        fullWidth 
                        label="Phone Number" 
                        />
                        
                        <label onClick={()=>setPromCode(!promCode)} className='inputsTextLabel'> I have a promo code!</label>
                       {
                        promCode === true ?
                        <PromCodeBody
                        setPromCode={setPromCode}
                        promCode={promCode}
                        />
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
