import React, { useState ,useEffect} from 'react'
import Footer from '../Components/Footer'
import InfoSection from '../Components/InfoSection'
import Navbar from '../Components/Navbar'
import {homeObjRestuarantDemo} from '../Components/InfoSection/Data'
import Sidebar from '../Components/Sidebar'
import {
   
    useParams
  } from "react-router-dom";
import Products from '../Components/Products'
import { productData } from '../Components/Products/data'
import axios from "axios"

export const RestuarantDescription = (props) => {

    console.log(props);
    const [isOpen,setIsOpen] = useState(false)
    let { id } = useParams();

    const [restot,setRest]=useState([]);
    useEffect(()=>{
       axios.get(`http://localhost:3000/api/get_restaurant/${id}`)
       .then(response => {
           setRest(response.data);
       })

       
    },[restot]);

    const toggle= () => {
        setIsOpen(!isOpen)
        
    }

    return (
        <>
          <Sidebar isOpen= {isOpen} toggle={toggle}/>
          <Navbar toggle={toggle} />  
          <InfoSection {...homeObjRestuarantDemo} />
        <Products heading= 'Menu' data= {restot}></Products>
        <Footer></Footer>

        </>
    )
}
