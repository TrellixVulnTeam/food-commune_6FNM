import React, {useState,Component,useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import { Link,useHistory } from 'react-router-dom';
import {Nav,NavbarContainer
    ,NavLogo,MobileIcon,NavMenu,NavItem,
    NavLinks,NavBtn,NavBtnLink} from './NavbarElements';

// const Navbar = ({toggle}) => {


    
//     return (
//         <>
//           <Nav>
//                 <NavbarContainer>
//                     <NavLogo to='/'>Food Commune
//                     </NavLogo>
//                    <MobileIcon onClick={toggle}>
//                        <FaBars />
//                     </MobileIcon  > 
//                     <NavMenu>
//                         <NavItem>
//                             <NavLinks to="about"> About</NavLinks>
//                         </NavItem>
//                         <NavItem>
//                             <NavLinks to="restaurants">Restaurants </NavLinks>
//                         </NavItem>
//                         <NavItem>
//                             <NavLinks to="community"> Community</NavLinks>
//                         </NavItem>
//                         <NavItem>
//                             <NavLinks to="Sign Up"> Sign up</NavLinks>
//                         </NavItem>
//                     </NavMenu>
                             
//                   <NavBtn>
//                       <NavBtnLink to="/signin">Sign In</NavBtnLink>
//                   </NavBtn>
//                   <NavBtn>
//                       <NavBtnLink to="/">Sign out</NavBtnLink>
//                   </NavBtn>


//                 </NavbarContainer>
//             </Nav>  
//         </>
//     )
// }

// export default Navbar;




export default class Navbar extends Component {

    constructor(props){
        super(props);
        this.toggle= this.toggle;

    }
    state={};
  
    componentDidMount(){
            if(localStorage.getItem('token')){
                console.log("success");
            }
            else{
                console.log("token not found")
            }
    }

    render() {
        
        if(localStorage.getItem('token')){
            
            return(
                <NavBarSignIn />
            )
        }else{
            return(
<NavBarSignOut></NavBarSignOut>
            )
            
        }
    }
}

const NavBarSignIn= ({toggle})=>{
    return(
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
                      <NavBtnLink to= "/" onClick={localStorage.clear()} >Sign out</NavBtnLink>
                  </NavBtn>


                </NavbarContainer>
            </Nav>  
        
    )
}


const NavBarSignOut= ({toggle})=>{
    return(
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
        
    )
}

