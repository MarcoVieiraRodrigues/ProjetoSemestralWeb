import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, CircularProgress, Typography, Divider, Button } from '@material-ui/core'

import { commerce } from '../../../lib/commerce'
import useStyles from './styles'
import AddresForm from '../AddresForm'
import PaymentForm from '../PaymentForm'

const steps = ['Endereco', 'Detalhes de Pagamento']

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [activeStep, setActiveStep] = useState(0)
  const [shippingData, setShippingData] = useState({})
  const classes = useStyles()


  

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
        
        
        setCheckoutToken(token);
      } catch {

      }
    }

    generateToken()
  }, [cart])

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

  const next = (data) => {
    setShippingData(data)

    nextStep()
  }

  const Confirmation = () => (
    <div>
    Confirmacao  
    </div>
  )

  const Form = () => activeStep === 0
   ? <AddresForm checkoutToken={checkoutToken} next={next}/> 
   : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout}/>

  return (
    <>
      <div className={classes.toolbar}/>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Pagamento</Typography>
          <Stepper activeStep={0} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> :checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  )
}

export default Checkout
