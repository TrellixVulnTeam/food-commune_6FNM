import React, { useEffect } from 'react'
import {ProductsContainer,ProductsHeading,ProductWrapper,ProductCard,ProductImg,ProductInfo,
ProductTitle,ProductDesc,ProductPrice,ProductButton} from './ProductElements';



const Products = ({heading,data}) => {
    
    useEffect(()=>{
        console.log(data.dat);
        
     },[]);    return (
       <ProductsContainer>
           {data.res && <ProductsHeading>{data.res.res_name}</ProductsHeading>}
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
