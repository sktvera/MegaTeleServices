
import React from 'react'
import { Radio, Button } from '@mui/material'
import { useNavigate } from "react-router-dom";
import './Assets/styles.css'

function SelectedPlansTV(){

    const navigate = useNavigate();

    const navigateToFormEmail = () => {
      navigate(`/FormEmail`);
      }
  
  return (
    <div className='containerCards'>
        <div className='containerCards-grid'>
            <div className=' title_cards'>
                <div>
                    <h2>Please select the TV plan you want to enjoy:</h2>
                </div>
            </div>
            <div className='cards_Container'>
                <div className=' cards_'>
                      <div className='itemCard'>
                            <div className='itemCard_'>
                                 <div>
                                      <h3>Basic</h3>
                                      <label>service</label>
                                 </div>
                            </div>
                            <div className='itemCard_'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M5.5 2H4.1c-1 0-1.5 1.1-.8 1.8L9 9.5c1.6 1.6 4.3 1.6 5.9 0l5.7-5.7c.8-.7.3-1.8-.7-1.8h-1.4c-.8 0-1.6.3-2.2.9l-3.6 3.6c-.4.4-1.1.4-1.5 0L7.7 2.9C7.1 2.3 6.3 2 5.5 2ZM5.5 22H4.1c-.9 0-1.4-1.1-.7-1.8L9 14.5c1.6-1.6 4.3-1.6 5.9 0l5.7 5.7c.7.7.2 1.8-.7 1.8h-1.4c-.8 0-1.6-.3-2.2-.9l-3.6-3.6c-.4-.4-1.1-.4-1.5 0l-3.6 3.6c-.5.5-1.3.9-2.1.9Z" stroke="#FF8A65" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                            <div className='itemCard_'>
                                <div>
                                      <h2>
                                          <p>$</p>
                                          30
                                          <p>/mo</p>
                                        </h2>
                                    <Radio
                                      /* checked={selectedValue === 'a'}
                                      onChange={handleChange} */
                                      value="a"
                                      name="radio-buttons"
                                      inputProps={{ 'aria-label': 'A' }}
                                    />
                                </div>
                            </div>
                      </div>
                      <div className='itemCard'>
                            <div className='itemCard_'>
                                 <div>
                                      <h3>Basic</h3>
                                      <label>service</label>
                                 </div>
                            </div>
                            <div className='itemCard_'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M5.5 2H4.1c-1 0-1.5 1.1-.8 1.8L9 9.5c1.6 1.6 4.3 1.6 5.9 0l5.7-5.7c.8-.7.3-1.8-.7-1.8h-1.4c-.8 0-1.6.3-2.2.9l-3.6 3.6c-.4.4-1.1.4-1.5 0L7.7 2.9C7.1 2.3 6.3 2 5.5 2ZM5.5 22H4.1c-.9 0-1.4-1.1-.7-1.8L9 14.5c1.6-1.6 4.3-1.6 5.9 0l5.7 5.7c.7.7.2 1.8-.7 1.8h-1.4c-.8 0-1.6-.3-2.2-.9l-3.6-3.6c-.4-.4-1.1-.4-1.5 0l-3.6 3.6c-.5.5-1.3.9-2.1.9Z" stroke="#FF8A65" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                            <div className='itemCard_'>
                                <div>
                                      <h2>
                                          <p>$</p>
                                          30
                                          <p>/mo</p>
                                        </h2>
                                    <Radio
                                      /* checked={selectedValue === 'a'}
                                      onChange={handleChange} */
                                      value="a"
                                      name="radio-buttons"
                                      inputProps={{ 'aria-label': 'A' }}
                                    />
                                </div>
                            </div>
                      </div>
                </div>
            </div>
            <div className='cotainerButtonAndlabel_'>
                <div className=' buttonAndlabel'>
                    <Button onClick={navigateToFormEmail} variant="contained">NEXT</Button>
                    <label>STEP 1 OF 4</label>
                </div>
            </div>
          
      </div>
  </div>
  )
}

export default SelectedPlansTV

