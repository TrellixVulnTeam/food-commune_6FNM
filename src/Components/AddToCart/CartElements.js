import styled from 'styled-components'
import {Link} from 'react-router-dom'
import product1 from '../../Images/tacos.jpg'


export const CartContainer =styled.div`
display:flex;
height:auto;
padding:1em;
border: 1px solid black;
flex-direction:column;
justify-items:space-evenly;
background-color:black;
color:white;
align-items:center;

`


export const CHeader =styled.h2`
margin-top:4rem;
display:flex;
justify-content:center;
color:whitesmoke !important;
:hover{
    color:#010606;
}
border-radius: 8px;
background-color:#01bf71 !important;
width:100%;
max-width:30rem;
padding:1rem;

`
;

export const Headings= styled.h4`
align-items:center;
display:flex;
justify-content:center;
color:white !important;


`

export const CartProductHolder= styled.div`
display:flex;
height:100%auto;
flex-direction:column;
width:100%;
margin-top:1.5em;
border-bottom:2px;
border-bottom-color:#01bf71 !important ;
justify-content:space-evenly;
max-width:50rem !important;
box-shadow: 0  2px 0 0  #01bf71;
`;

export const CartProduct =styled.div`
border:1px solid black;
display:flex;
height:auto;
display:flex;
justify-content:space-evenly;
margin:1em;

`;
export const ItemImage =styled.img`
border:1px solid white;
margin:1rem;
width:100%;
max-width:12rem;


`;
export const ItemQuantity =styled.div`
border:1px solid black;
margin:1rem;
width:100%;
align-items:center;
display:flex;
`;
export const ItemPrice =styled.h3`
margin:1rem;
width:100%;
align-items:center;
display:flex;
justify-content:center;

`;
export const CartTotalContainer=styled.div`

display:flex;
height:100%auto;
width:100%;
margin-top:.5em;

flex-direction:column;
justify-content:space-evenly;
align-items:center;
max-width:30rem !important;
max-height:20rem;
margin-top:4rem;

`;


export const CartDiscount =styled.div`
border:1px solid black;
margin-left:1rem;
margin-right:1rem;
height:100%;
display:flex;
justify-content:space-between;
width:90%;

`;
export const CartTotal =styled.div`

margin-left:1rem;
margin-right:1rem;
height:100%;
display:flex;
justify-content:space-between;
width:90%;
`;

export const CheckOutButton =styled(Link)`
transition: all 0.2s ease-in-out;
max-width:10rem;
max-height:5rem;
justify-content:center;
margin:0.1rem;
margin-bottom:1rem;
padding:0.5rem;
background-color:#01bf71 !important;
color:black;
font-size:1.1rem;
border-radius:50px;
padding:0.8rem;
&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#010606')};
  
}

`

export const CartItemDesc=styled.p`
margin:0.5rem;
font-size:1.1rem;
width:100%;
`;

export const CartItemPrice=styled.p`
margin:0.5rem;
font-size:1.1rem;
width:100%;
align-items:center;
display:flex;
justify-content:center;


`;

