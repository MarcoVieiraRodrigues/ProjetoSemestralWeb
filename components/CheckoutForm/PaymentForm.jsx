import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core'
import { Elements, CardElement, ElementsConsumer} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import Review from './Checkout/Review'

const stripePromise = loadStripe('...')

const PaymentForm = ( {checkoutToken, backStep, shippingData, onCaptureCheckout,  nextStep} ) => {
  
  return (
    <>
      <Review checkoutToken={checkoutToken}/>
      <Divider />
      <Typography variant="h6" gutterBottom style={{margin: '20px 0'}}>Metodo de Pagamento</Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form>
              <CardElement />
              <br /> <br /> <br />
              <div style={{ display: 'flex', justifyContent: 'space-between'}}>
              <Button variant="outlined" onClick={backStep}>Voltar</Button>
              <Button type="submit" variant="contained" disable={!stripe} color="primary">
                Pagar { checkoutToken.live.subtotal.formatted_with_symbol }
              </Button>
              </div>
              </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  )
 }


export default PaymentForm
