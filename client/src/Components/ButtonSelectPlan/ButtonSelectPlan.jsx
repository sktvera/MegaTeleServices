import React from 'react'
import CardActions from '@mui/material/CardActions';
import { Button } from '@mui/material'



function ButtonSelectPlan({tier,keys,setFreeButton, setProButton, setEnterpriseButton}) {

    const hanldeSelectedCard = ()=>{
        if(tier.title === 'Pro'){
            setProButton(true)

            setFreeButton(false)
            setEnterpriseButton(false)
        }else if(tier.title === 'Free'){
            setFreeButton(true)

            setProButton(false)
            setEnterpriseButton(false)
        }else if(tier.title === 'Enterprise'){
            setEnterpriseButton(true)

            setProButton(false)
            setFreeButton(false)
        }

       
      }

  return (
    <CardActions >
    <Button 
    key={keys}
    fullWidth 
    onClick={hanldeSelectedCard}
    variant={tier.buttonVariant}
    >
        {tier.buttonText}
    </Button>
</CardActions>
  )
}

export default ButtonSelectPlan