import React, { useEffect,useState } from 'react'
import {ProductsContainer,ProductsHeading,ProductWrapper,ProductCard,ProductImg,ProductInfo,
ProductTitle,ProductDesc,ProductPrice,ProductButton} from './ProductElements';
import product3 from '../../Images/tacos.jpg'

import axios from 'axios'

const Products = ({heading,res,id}) => {
    const [result,setresult]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/get_restaurant/${id}`)
       .then(response => {
        setresult(response.data);
         console.log(response.data)
       })
     },[]);  
     const addtocart=(product)=>
     {
         if(localStorage.getItem('cart')===undefined)
         {
            setcart(JSON.parse(localStorage.getItem('cart')));
            
         }
         else
         {
             const [cart,setcart]=useState([]);
             localStorage.setItem("test", JSON.stringify(items));

         }
        console.log(product);
     }
       return (
       <ProductsContainer>
           {<ProductsHeading>{res.res_name}</ProductsHeading>}
           <ProductWrapper>
               {result.map((product) => {
                   return(
                       <ProductCard key={product._id}>
                             <ProductImg src={product3} alt={product.price} />
                       <ProductInfo>
                       <ProductTitle>{product.item_name}</ProductTitle>
                       {/* <ProductDesc>{product.description}</ProductDesc> */}
                       <ProductPrice>{product.price}</ProductPrice>
                       <ProductButton onClick={()=>addtocart(product)}>{'Add to cart'}</ProductButton>
                       </ProductInfo>
                       </ProductCard>
                   )
               })}
           </ProductWrapper>
       </ProductsContainer>
    )
}

export default Products
