import React, { useState ,useEffect,lazy,useRef,Suspense} from 'react'
import product1 from '../../Images/tacos.jpg'
import {CartContainer,CartProductHolder,CartItemDesc,CartItemPrice,CheckOutButton,QuantityInput,CHeader,CartTotal,CartDiscount,ItemPrice,ItemQuantity,ItemImage,CartProduct,CartTotalContainer,QuantityButtonPlus,QuantityButtonMinus ,Headings} from './CartElements'
import {Button} from '../ButtonElement';



const Cart = () => {
    const [menu,setmenu]=useState((JSON.parse(localStorage.getItem('cart'))));

    const increase_item=(id)=>{
         menu.map((item)=>{if(item._id==id){ var qty=parseInt(item.quantity)+1;
            item.quantity=qty;
            document.getElementById('qty_'+item._id).value=qty;
          }

         
        });
        JSON.stringify(localStorage.setItem("cart", JSON.stringify(menu)));

        cost();

    }
    const decrease_item=(id)=>{
        var item_price=0;
        menu.map((item)=>{if(item._id==id && parseInt(item.quantity)>1 ){ var qty=parseInt(item.quantity)-1;
            item.quantity=qty;
            document.getElementById('qty_'+item._id).value=qty;
            item_price=item.price
            }

         
        });
        JSON.stringify(localStorage.setItem("cart", JSON.stringify(menu)));
        cost();

    }
    const remove_item=(id)=>{
        var index=menu.findIndex((item)=>(item._id==id));
        if (index > -1) {
        menu.splice(index, 1);
        }
        JSON.stringify(localStorage.setItem("cart", JSON.stringify(menu)));
        document.getElementById('pro_'+id).style.display = "none";
        cost();

    }
    const cost=()=>{
        var sum=0;
        menu.map((item)=>{ ;
            sum+=parseFloat(item.price)*item.quantity;
            });

        var wotax=parseFloat(((sum*13)/100).toFixed(2));
        var ntotal=(parseFloat(sum)+wotax).toFixed(2);
        document.getElementById('tax').innerHTML=wotax;
        document.getElementById('total').innerHTML=ntotal;
        document.getElementById('price').innerHTML=(sum).toFixed(2);


    }
    useEffect(()=>{
     cost();
    },[])
    return (    
       <CartContainer>
           <CHeader>Shopping Cart</CHeader>
           <CartProductHolder>
               <Headings>Products</Headings>
               <Suspense fallback={<h1>Loading posts...</h1>}>
               { menu ?  menu.map((item)=>(  <CartProduct id={'pro_'+item._id} key={item._id}>
               <ItemPrice>{item.item_name}</ItemPrice>  
                <ItemPrice>{'$'+item.price}</ItemPrice>
                <QuantityInput type="text" id={'qty_'+item._id} value={item.quantity}></QuantityInput>
                <QuantityButtonMinus  onClick={()=>decrease_item(item._id)}>-</QuantityButtonMinus>
                <QuantityButtonPlus onClick={()=>increase_item(item._id)}>+</QuantityButtonPlus>
                <button type="button" onClick={()=>remove_item(item._id)} className="btn btn-danger">Remove</button>


            </CartProduct>)):<div><span style={{'textAlign':'center'}}>No Item in cart..</span></div> }
            
      </Suspense>
           
           

            
           
           </CartProductHolder>
           <CartTotalContainer>
           <Headings>Cost</Headings>
           {menu &&<>
           <CartTotal>
            <CartItemDesc>Item Cost </CartItemDesc>
            <CartItemPrice ><span id="price">0</span></CartItemPrice>
            </CartTotal>
            <CartDiscount>
            <CartItemDesc>Tax</CartItemDesc>
            <CartItemPrice id="tax">0</CartItemPrice>
            </CartDiscount>
            <CartTotal>
            <CartItemDesc>Total </CartItemDesc>
            <CartItemPrice id="total">0</CartItemPrice>
            </CartTotal>
            <CheckOutButton to ="/">Pay Now</CheckOutButton></>}
           </CartTotalContainer>
       </CartContainer>
    )
}


export default Cart
