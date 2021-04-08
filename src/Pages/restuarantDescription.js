import React, {useState} from 'react'
import Footer from '../Components/Footer'
import InfoSection from '../Components/InfoSection'
import Navbar from '../Components/Navbar'
import {homeObjRestuarantDemo} from '../Components/InfoSection/Data'
import Sidebar from '../Components/Sidebar'

import Products from '../Components/Products'
import { productData } from '../Components/Products/data'

export const RestuarantDescription = () => {

    const [isOpen,setIsOpen] = useState(false)

    const toggle= () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <Sidebar isOpen= {isOpen} toggle={toggle}/>
          <Navbar toggle={toggle} />  
          <InfoSection {...homeObjRestuarantDemo} />
        <Products heading= 'Menu' data= {productData}></Products>
        <Footer></Footer>

        </>
    )
}
