import React, { useEffect,useState } from 'react'
import {ProductsContainer,ProductsHeading,ProductWrapper,ProductCard,ProductImg,ProductInfo,
ProductTitle,ProductDesc,ProductPrice,ProductButton} from './ProductElements';

import axios from 'axios'

const Products = ({heading,res,id}) => {
    const [result,setresult]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/get_restaurant/${id}`)
       .then(response => {
        setresult(response.data);
         console.log(response.data)
       })
     },[]);    return (
       <ProductsContainer>
           {<ProductsHeading>{res.res_name}</ProductsHeading>}
           {/* <ProductWrapper>
               {data.map((product,index) => {
                   return(
                       <ProductCard key={index}>
                             <ProductImg src={product.price} alt={product.price} />
                       <ProductInfo>
                       <ProductTitle>{product.price}</ProductTitle>
                       <ProductDesc>{product.price}</ProductDesc>
                       <ProductPrice>{product.price}</ProductPrice>
                       <ProductButton>{product.price}</ProductButton>
                       </ProductInfo>
                       </ProductCard>
                   )
               })}
           </ProductWrapper> */}
       </ProductsContainer>
    )
}

export default Products
