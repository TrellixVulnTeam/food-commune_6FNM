import React,{useState, useEffect} from 'react'
import product1 from '../../Images/tacos.jpg'
import {CartContainer,CartProductHolder,CartItemDesc,CartItemPrice,CheckOutButton,CHeader,CartTotal,CartDiscount,ItemPrice,ItemQuantity,ItemImage,CartProduct,CartTotalContainer, Headings, ItemName, QuantityButtonPlus, QuantityButtonMinus, QuantityInput} from './CartElements'
import {Button} from '../ButtonElement';
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_51IgvT7FowvHTDhySXUnSDxMbioQabiBtBQLQvo0aRpC05CCLWeKHJYZVWVcjdNdPIz7RSGFLtx428MP92Q0GIcD400tcUt3svE');

const menu= JSON.parse(localStorage.getItem('cart'));
const Cart = () => {

        useEffect(()=>{
        console.log(menu);

    },[]);

    
    return (    
       <CartContainer>
           <CHeader>Shopping Cart</CHeader>
        <CartProductHolder>
           
            { menu && menu.map((item)=>(
                <>
                <CartProduct>
                <ItemName>{item.item_name}</ItemName>
                <ItemImage src= {product1}></ItemImage>
                <ItemQuantity>
                <QuantityButtonMinus>-</QuantityButtonMinus> 
                    <QuantityInput></QuantityInput>
                <QuantityButtonPlus>+</QuantityButtonPlus>
                   
                </ItemQuantity>
                <ItemPrice>{item.price}</ItemPrice>
            </CartProduct>
                </>
            ))
               
        }   
           
        </CartProductHolder>
           
           {/* <CartProductHolder>
               <Headings>Products</Headings>

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
           </CartTotalContainer> */}
       </CartContainer>
    )
}


export default Cart
