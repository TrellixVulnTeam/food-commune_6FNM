import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import {Nav,NavbarContainer
    ,NavLogo,MobileIcon,NavMenu,NavItem,
    NavLinks,NavBtn,NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {


    
    return (
        <>
          <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Food Commune
                    </NavLogo>
                   <MobileIcon onClick={toggle}>
                       <FaBars />
                    </MobileIcon  > 
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"> About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="restaurants">Restaurants </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="community"> Community</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Sign Up"> Sign up</NavLinks>
                        </NavItem>
                    </NavMenu>
                  <NavBtn>
                      <NavBtnLink to="/signin">Sign In</NavBtnLink>
                  </NavBtn>
                </NavbarContainer>
            </Nav>  
        </>
    )
}

export default Navbar;
