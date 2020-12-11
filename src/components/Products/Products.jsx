import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles'

const products = [
    { id:1, name: 'Shoes', description: 'Running shoes', price:"5", image:'https://slimages.macys.com/is/image/MCY/products/2/optimized/3538742_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$'},
    { id:2, name: 'Mac', description: 'Apple macbook', price:"500", image: "https://www.bhphotovideo.com/images/images2500x2500/apple_mwtl2ll_a_13_3_macbook_air_with_1553858.jpg"}
]

const Products = () => {

    const classes = useStyles()
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}></div>
            <Grid container justify="center" spacing={4}>
                {products.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}

            </Grid>
        </main>
    )
}

export default Products
