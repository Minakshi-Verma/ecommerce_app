import React from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import useStyles from './styles';

const Cart = (props) => {
    console.log("p==>>", props)
    console.log("Props==>>", props.cart.line_items)
    const classes = useStyles()
    const isEmpty = !props.cart.line_items;   // no of item in cart is 0 OR isEmpty===true

    const EmptyCart = () => (     //Example of implicit return in arrow function
        <Typography variant="subtitle">You cart is empty. Continue shopping to add items!</Typography> 
    )

    const FilledCart = () =>{    // Example of explicit return in arrow function
        return(
            <>
            <Grid container spacing={3}>
                {props.cart.line_items.map((item)=>(      //implicit return to display some jsx
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>{item.name}</div>
                    </Grid>               
                ))}
            </Grid>
            <div className={classes.cartDetails}>
                <Typography variant="h4">Subtotal:{props.cart.subtotal.formatted_with_symbol}</Typography>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout now</Button>
            </div>
            </>
        )
    }

    return (
        <container>
            <div className={classes.toolbar} />
            <Typography className= {classes.title} variant="h3">Items in Shopping Cart</Typography>
            {isEmpty ? <EmptyCart /> : <FilledCart />}
            
        </container>
    )
}

export default Cart
