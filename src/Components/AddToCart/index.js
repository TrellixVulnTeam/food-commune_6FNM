import React,{useState} from 'react'
import product1 from '../../Images/tacos.jpg'
import {CartContainer,CartProductHolder,CartItemDesc,CartItemPrice,CheckOutButton,CHeader,CartTotal,CartDiscount,ItemPrice,ItemQuantity,ItemImage,CartProduct,CartTotalContainer, Headings} from './CartElements'
import {Button} from '../ButtonElement';
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IgvT7FowvHTDhySXUnSDxMbioQabiBtBQLQvo0aRpC05CCLWeKHJYZVWVcjdNdPIz7RSGFLtx428MP92Q0GIcD400tcUt3svE');

const Cart = (props) => {

    console.log((localStorage.getItem('cart')));
    

    return (    
       <CartContainer>
           <CHeader>Shopping Cart</CHeader>
           <CartProductHolder>
               <Headings>Products</Headings>
           
        {/* {cart.map((product)=> {

                return(
                    <CartProduct>
                    <ItemImage src= {product1}></ItemImage>
                    <ItemQuantity></ItemQuantity>
                    <ItemPrice>$5.99</ItemPrice>
                </CartProduct>

                )

        })
        } */}

            <CartProduct>
                <ItemImage src= {product1}></ItemImage>
                <ItemQuantity></ItemQuantity>
                <ItemPrice>$5.99</ItemPrice>
            </CartProduct>
            <CartProduct>
                <ItemImage src= {product1}></ItemImage>
                <ItemQuantity></ItemQuantity>
                <ItemPrice>$5.99</ItemPrice>
            </CartProduct>
           </CartProductHolder>
           <CartTotalContainer>
           <Headings>Cost</Headings>
           <CartTotal>
            <CartItemDesc>Item Cost </CartItemDesc>
            <CartItemPrice>$11.99</CartItemPrice>
            </CartTotal>
            <CartDiscount>
            <CartItemDesc>Total Discount</CartItemDesc>
            <CartItemPrice>-$1.00</CartItemPrice>
            </CartDiscount>
            <CartTotal>
            <CartItemDesc>Total </CartItemDesc>
            <CartItemPrice>$10.99</CartItemPrice>
            </CartTotal>
            <CheckOutButton to ="/">Pay Now- inactive now</CheckOutButton>
           </CartTotalContainer>
       </CartContainer>
    )
}

export default Cart
