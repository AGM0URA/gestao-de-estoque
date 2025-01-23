import React from "react";
import{
    NavbarContainer,
    TextContainer,
    TitleH1,
    SubTitleH1,
    Logo
} from "../Styles/NavBarStyled.js"
import logoimg from "../Image/logo.png"

const NavBar =() =>{
    return(

        <NavbarContainer>
            <TextContainer>
            <TitleH1>Tamires Freitas</TitleH1>
            <SubTitleH1>consultora Mary kay</SubTitleH1>
            </TextContainer>
            <Logo src={logoimg} alt="Logo"  />
        </NavbarContainer>


    );
};

export default NavBar