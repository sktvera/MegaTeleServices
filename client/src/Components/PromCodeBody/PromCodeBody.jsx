import { useState } from 'react'; 
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { TextField, Button } from '@mui/material'
import classnames from 'classnames';
import './Assets/styles.css'


const PromCodeBody =({setPromCode, promCode})=> {

  const [openOrClosePromCodeBody, setOpenOrClosePromCodeBody] = useState(false);



 
    

  return (
    <div 
   
    className={classnames(
{'PromCodeBody': openOrClosePromCodeBody === false ? true : false },
{'PromCodeBody-form': openOrClosePromCodeBody === true ? true : false }
   )}>


{openOrClosePromCodeBody === true?


<div className='open-formAndButton'>

    <div className='title-promCode-form'>
        

        <TextField 
        className='inputsText' 
        fullWidth 
        label="Write your code" 
        />
    </div>
     <div className='openOrClose'>
    <div className='button-body'>
    <Button  onClick={()=>setPromCode(!promCode)}  variant="contained">Send!</Button>
    </div>
     </div>
</div>

:

<div className='open-description' onClick={()=>setOpenOrClosePromCodeBody(!openOrClosePromCodeBody)}>

<div className='title-promCode'>
        <ConfirmationNumberIcon className='title-promCode-item'/>
       <p className='title-promCode-item'> Añadir cupon.</p>
     </div>
     <div className='openOrClose'>
        <KeyboardArrowUpIcon/>
     </div>
</div>

}

    </div>
  )
}

export default PromCodeBody