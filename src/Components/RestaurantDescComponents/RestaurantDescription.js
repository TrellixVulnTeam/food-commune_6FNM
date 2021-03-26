import styled from 'styled-components'

export const RestDescContainer =styled.div`
background: #0c0c0c;
display:flex;
justify-content:space-evenly;
align-items:center;
padding: 0 30px;
height: 800px;
position:relative;
z-index: 1;
flex-direction:column;
`

export const MenuListContainer= styled.div `

background: #ffffff;
display:flex;
justify-content:space-evenly;
align-items:center;
padding: 30px;
z-index:1;
height: 400px;
flex-direction:column;
max-width:600px;
width:100%;
margin:30px;

`

export const MenuHeading = styled.h1`
color:#fff;
font-size: 48px;
text-align:center;

@media screen and (max-width: 768px){
    font-size:32px;
}

@media screen and (max-width: 480px){
    font-size:28px;
}
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  border-top: 1px solid gray;
  :first-of-type {
    border-top: none;
  }
  
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 3px solid green;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

export const MenuPicture= styled.image`
max-width:10em;
max-height:10em;
/* width:50%auto;
height:50%auto; */
margin:10px 20px;
width:100%;
height:100%;


`
