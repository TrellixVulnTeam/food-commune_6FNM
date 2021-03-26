import React from 'react'
import {RestDescContainer,MenuList,MenuHeading,MenuListContainer,ListItem, MenuPicture} from './RestaurantDescription'
import picture from '../../Images/community.jpg'
const RestuarantDescComponents = () => {
    return (
        <div>
            <RestDescContainer>
                <MenuHeading>The Menu</MenuHeading>
                <MenuListContainer>
                <MenuList>
                    <ListItem>Burritos <MenuPicture src= {picture}></MenuPicture ></ListItem>
                    <ListItem>Nachos</ListItem>
                    <ListItem>Tortillas</ListItem>
                    <ListItem>Quesadila</ListItem>
                    <ListItem>Spicy chorizo enchiladas</ListItem>
                    <ListItem>chicken tacos with corn</ListItem>
                    <ListItem>guacamole with spiced cucumber</ListItem>
                </MenuList> 
                </MenuListContainer>
            </RestDescContainer>
        </div>
    )
}

export default RestuarantDescComponents
