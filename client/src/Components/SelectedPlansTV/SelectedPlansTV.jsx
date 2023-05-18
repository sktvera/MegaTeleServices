
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { TextField, Button, Radio } from '@mui/material'
import ButtonSelectPlan from '../../Components/ButtonSelectPlan/ButtonSelectPlan'
import { useNavigate } from "react-router-dom";

import './Assets/styles.css'

function SelectedPlansTV(){

  const [freeButton, setFreeButton] = useState(false)
  const [proButton, setProButton] = useState(true)
  const [enterpriseButton, setEnterpriseButton] = useState(false)

    const navigate = useNavigate();

    const navigateToFormEmail = () => {
      navigate(`/FormEmail`);
      }

      const tiers = [
        {
          title: 'Free',
          subheader:`${freeButton=== true ? 'selected' : ''}`,
          price: '0',
          description: [
            '10 users included',
            '2 GB of storage',
            'Help center access',
            'Email support',
          ],
          buttonText: 'Sign up for free',
          buttonVariant: `${freeButton=== true ? 'contained' : 'outlined'}`,
        },
        {
          title: 'Pro',
          subheader:`${proButton=== true ? 'Most popular' : ''}`,
          price: '15',
          description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
          ],
          buttonText: 'Get started',
          buttonVariant: `${proButton=== true ? 'contained' : 'outlined'}`,
        },
        {
          title: 'Enterprise',
          subheader:`${enterpriseButton=== true ? 'selected' : ''}`,
          price: '30',
          description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
          ],
          buttonText: 'Contact us',
          buttonVariant: `${enterpriseButton=== true ? 'contained' : 'outlined'}`,
        },
      ];

      const footers = [
        {
          title: 'Company',
          description: ['Team', 'History', 'Contact us', 'Locations'],
        },
        {
          title: 'Features',
          description: [
            'Cool stuff',
            'Random feature',
            'Team feature',
            'Developer stuff',
            'Another one',
          ],
        },
        {
          title: 'Resources',
          description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
        },
        {
          title: 'Legal',
          description: ['Privacy policy', 'Terms of use'],
        },
      ];
  
  return (
    <div >
        <div>
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* Hero unit */}
          <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
              <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              >
                  Choose Your Plan
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" component="p">
                  The Tele-Communications Plan That Best Suits You
              </Typography>
          </Container>
      {/* End hero unit */}
          <Container maxWidth="md" component="main">
              <Grid container spacing={5} alignItems="flex-end">
                  {tiers.map((tier,keys) => (
                      // Enterprise card is full width at sm breakpoint
                      <Grid
                      item
                      key={tier.title}
                      xs={12}
                      sm={tier.title === 'Enterprise' ? 12 : 6}
                      md={4}
                      >
                          <Card>
                              <CardHeader
                              title={tier.title}
                              subheader={tier.subheader}
                              titleTypographyProps={{ align: 'center' }}
                              action={
                                tier.title === 'Pro' && proButton === true ? 
                                <StarIcon /> 
                                :
                                 tier.title === 'Enterprise' && enterpriseButton === true?
                                  <StarIcon /> 
                                :
                                 tier.title === 'Free' && freeButton === true ? 
                                 <StarIcon /> 
                                :
                                 null 
                                }
                              subheaderTypographyProps={{
                              align: 'center',
                              }}
                              sx={{
                              backgroundColor: (theme) =>
                              theme.palette.mode === 'light'
                              ? theme.palette.grey[200]
                              : theme.palette.grey[700],
                              }}
                              />
                              <CardContent>
                                  <Box
                                  sx={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'baseline',
                                  mb: 2,
                                  }}
                                  >
                                      <Typography component="h2" variant="h3" color="text.primary">
                                          ${tier.price}
                                      </Typography>
                                      <Typography variant="h6" color="text.secondary">
                                          /mo
                                      </Typography>
                                  </Box>
                                  <ul>
                                      {tier.description.map((line) => (
                                          <Typography
                                          component="li"
                                          variant="subtitle1"
                                          align="center"
                                          key={line}
                                          >
                                              {line}
                                          </Typography>
                                      ))}
                                  </ul>
                              </CardContent>
                              <ButtonSelectPlan
                              tier={tier}
                              keys={keys}
                              setFreeButton={setFreeButton}
                              setProButton={setProButton}
                              setEnterpriseButton={setEnterpriseButton}
                              />
                           
                          </Card>
                      </Grid>
                  ))}
              </Grid>
          </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
      </Container>
    </React.Fragment>
            <div className='cotainerButtonAndlabel_'>
                <div className=' buttonAndlabel'>
                    <Button onClick={navigateToFormEmail} variant="contained">NEXT</Button>
                    <label>STEP 3 OF 4</label>
                </div>
            </div>
          
      </div>
  </div>
  )
}

export default SelectedPlansTV

