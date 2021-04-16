import React, { useState ,useEffect,lazy,Suspense} from 'react'
import product1 from '../../Images/tacos.jpg'
import {CartContainer,CartProductHolder,CartItemDesc,CartItemPrice,CheckOutButton,CHeader,CartTotal,CartDiscount,ItemPrice,ItemQuantity,ItemImage,CartProduct,CartTotalContainer, Headings} from './CartElements'
import {Button} from '../ButtonElement';
const menu=(JSON.parse(localStorage.getItem('cart')));

const Cart = () => {
 
    return (    
       <CartContainer>
           <CHeader>Shopping Cart</CHeader>
           <CartProductHolder>
               <Headings>Products</Headings>
               <Suspense fallback={<h1>Loading posts...</h1>}>
        <ProfileTimeline />
      </Suspense>
           
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
            <CheckOutButton>Pay Now</CheckOutButton>
           </CartTotalContainer>
       </CartContainer>
    )
}
const ProfileTimeline=()=> {
    // Try to read posts, although they might not have loaded yet
    const [menu,setmenu]=useState([]);
    useEffect(()=>{
       },[]);
    return (<>
        { menu && menu.map((item)=>{ <b>{item.item_name}</b>})
           
           }    </>
    );
  }

export default Cart
