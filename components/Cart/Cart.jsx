import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

import useStyles from './styles'
import CartItem from './CartItem/CartItem'

const Cart = ({ cart, handleUpdateCartQuantity, handleRemoveFromCart, handleEmptyCart }) => {
  const classes = useStyles() 
  

  const EmptyCart = () => (
    <Typography variant="subtitle1"> 
    
    Seu carrinho está vazio, adicione alguns itens a ele! 
    <Link to="/" className="classes.link"> adicione alguns itens a ele! </Link>
     </Typography>
  )

  const FilledCart = () => (
    <>
    <Grid container spacing={3}>
      {cart.line_items.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
          <CartItem item={item} onUpdateCartQuantity={handleUpdateCartQuantity} onRemoveFromCart={handleRemoveFromCart}/>
          </Grid>
      ))}
    </Grid>
    <div className={classes.cardDetails}>
      <Typography>Total: {cart.subtotal.formatted_with_symbol}</Typography>
      <div>
        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Esvaziar Carrinho</Button>
        <Button component={Link} to="/checkout"  className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Pagar</Button>
      </div>
    </div>
    </>
  )

  if(!cart.line_items) return 'loading...'


  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>  Seu Carrinho de compras</Typography>
      { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
    </Container>
  )
}

export default Cart
