import React from "react";
import {
    MenuContainer,
    ButtonMenu,

} from "../Styles/MenuStyled.js"
import Homeimg from "../Image/casaMenu.png"
import Sales  from "../Image/vendas.png"
import Stock from "../Image/estoque.png"
import debtors from "../Image/FaltaReceber.png"


const Menu = () =>{
    return(
    <MenuContainer>
      
        <ButtonMenu src={Homeimg} alt="Casa Menu"/>
        <ButtonMenu src={Sales} alt="Casa Menu"/>
        <ButtonMenu src={Stock} alt="Casa Menu"/>
        <ButtonMenu src={debtors} alt="Casa Menu"/>
    </MenuContainer>
    )
}

export default Menu