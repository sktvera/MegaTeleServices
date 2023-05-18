import * as React from 'react';
import { TextField, Button } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { useLocation} from 'react-router';
import { Link } from "react-router-dom";

import './Assets/styles.css'

function SearchBuildings() {
    const location = useLocation();
    const firstName = location.state.dataUserOne.firstName
    const LastName = location.state.dataUserOne.LastName

    const navigate = useNavigate();

    const navigateToPlans = () => {
      navigate(`/SelectedPlans`);
      }

  return (

    <div className='contanerRegister'>
    <div className='contanerRegister-grid'>
        <div className=' title_'>
            <div>
                <h2>Plesure to meet you, {firstName} {LastName} !</h2>
                <h2>What is your install addres?</h2>
            </div>
        </div>
        <div className=' inputs_'>
            <div >
                <TextField  
                fullWidth 
                label="STREET ADDRESS, CITY, STATE" 
                id="fullWidth" 
                />
                 <Link className="hyperlink" to="/Support" >
                    <label className='labelSearcBuildings'> I can't find my address</label>
                 </Link>
            </div>
            <div >
                <TextField fullWidth label="APT #" id="fullWidth" />
            </div>
        </div>
        <div className='cotainerButtonAndlabel'>
            <div className=' buttonAndlabel'>
                <Button onClick={navigateToPlans} variant="contained">NEXT</Button>
                <label>STEP 2 OF 4</label>
            </div>
        </div>
  </div>
</div>
  )
}

export default SearchBuildings



