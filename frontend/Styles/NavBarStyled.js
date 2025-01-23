import React from "react";
import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { theme } from "./ConfigGlobal.js";

export const NavbarContainer = styled.div`
    background-color: ${({theme}) => theme.colors.primary};
    width: 100%; 
    height: 85px;
    position: sticky; 
    top: 0; 
    display:flex;
    align-items: center;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    margin-left: 15px; 
`;


export const TitleH1 = styled.h1`
    display: flex;
    font-family: 'League Gothic', sans-serif; 
    font-size: 2rem; 
    color: #FDC0DF; 
    margin-left: 40px;
    padding-top: 12px;
`   
export const SubTitleH1 = styled.h1`
    font-family: "Love Ya Like A Sister", serif;
    font-size: 14px; 
    color: #333; 
    margin-left: 40px;
`

export const Logo = styled.img`

    width: 120px;
    height: 100px;
    margin-left: 40px;
`;