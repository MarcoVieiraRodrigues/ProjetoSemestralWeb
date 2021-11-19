import React from "react";
import { Grid, Typography } from "@material-ui/core"
import Product from "./Product/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
import useStyles from "./styles";


const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
<main className={classes.content}>
  < div className={classes.toolbar}/>
    <Grid container justifyContent="center" spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product} onAddToCart={onAddToCart}/>
          </Grid>
      ))}
    </Grid>


    <Typography className={classes.title} variant="h2" align="center" color="textPrimary">Demonstracao dos produtos</Typography>
    <Grid  container justifyContent="center" spacing={3}>
    <iframe className={classes.video} width="560" height="315" src="https://www.youtube.com/embed/6kalcrYLIIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Grid>



      <Grid container className={classes.icons} justifyContent="center">
        <a href="https://www.instagram.com/marco_vrodrigues/" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="6x" color="black" />
        </a>
        <a href="https://www.facebook.com/marco.vrodrigues.9" className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="6x" color="#4968ad" />
        </a>
        <a href="https://twitter.com/marco_vrodrigues" className="twitter social ">
          <FontAwesomeIcon icon={faTwitter} size="6x" color="#49a1eb" />
        </a>
        <a href="https://www.youtube.com/channel/UC6EXB2D_XnIPzxnFMX74WdA" className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="6x" color="#eb3223" />
        </a>
        
      </Grid>
  </main>
  
  ) 
}

export default Products;