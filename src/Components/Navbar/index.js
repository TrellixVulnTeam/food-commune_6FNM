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
        // alert(localStorage.getItem('token'));
    }
<<<<<<< HEAD
    state={};
  
    componentDidMount(){
    //alert(localStorage.getItem('token'));
    }
=======
>>>>>>> bee2ad6487a78325cb1780e33e614924ab757213

    render() {
        
        
        if(localStorage.getItem('token')){
            
            
            return(
               
                <NavBarSignIn />
            )
        }else{
            return(
<NavBarSignOut />
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
                            <NavLinks to="/about"> About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/list">Restaurants </NavLinks>
                        </NavItem>
                        <NavItem>
<<<<<<< HEAD
                            <NavLinks to="/community"> Community</NavLinks>
=======
                            <NavLinks to="/cart"> Cart</NavLinks>
>>>>>>> bee2ad6487a78325cb1780e33e614924ab757213
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                   <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg></NavLinks>
                        </NavItem>

                    </NavMenu>
                             
                  <NavBtn>
<<<<<<< HEAD
                      <NavBtnLink  >Sign out</NavBtnLink>
=======
                      <NavBtnLink to= "/" onClick={localStorage.clear()}>Sign out</NavBtnLink>
>>>>>>> bee2ad6487a78325cb1780e33e614924ab757213
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
                            <NavLinks to="list">Restaurants </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="community"> Community</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Sign Up"> Sign up</NavLinks>
                        </NavItem>
                    </NavMenu>
                             
                    <NavBtn>
                      <NavBtnLink to="signin">Sign In</NavBtnLink>
                 </NavBtn>

                </NavbarContainer>
            </Nav>  
        
    )
}

