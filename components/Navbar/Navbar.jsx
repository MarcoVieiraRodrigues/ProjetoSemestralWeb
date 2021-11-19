import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart  } from '@material-ui/icons';
import { Link } from 'react-router-dom'


import logo from '../../assets/logo.png'
import useStyles from './styles'

const Navbar = ({ totalItems }) => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="fixed" className={ classes.appBar } color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
          <img src={logo} alt="Projeto Web" height="25px" className={classes.image}/>
          Projeto Web
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}> 
            <IconButton component={Link} to="/cart" color="inherit">
              <Badge badgeContent={totalItems} color="secondary"> 
                <ShoppingCart />
              </Badge>
            </IconButton >
          </div>
        </Toolbar>
        </AppBar> 
    </>
  )
}

export default Navbar
