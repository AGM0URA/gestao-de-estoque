import React from "react";
import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { theme } from "./ConfigGlobal.js";

export const NavbarContainer = styled.div`
    background-color: ${({theme}) => theme.colors.Branco};
    width: 100%; 
    height: 80px;
    position: sticky; 
    top: 0; 
    display:flex;
    align-items: center;
    justify-content: space-between; 

    @media (min-width: 768px) {
        height: 70px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    margin-left: 15px;
    margin-bottom: 15px;

    @media (min-width: 768px) {
        margin-left: 25px;
    }
`;


export const TitleH1 = styled.h1`
    display: flex;
    font-family: 'League Gothic', sans-serif; 
    font-size: 2rem; 
    color: #FDC0DF; 
    margin-left: 40px;
    padding-top: 12px;

    @media (min-width: 768px) {
        font-size: 2.5rem; 
    }
`   
export const SubTitleH1 = styled.h1`
    font-family: "Love Ya Like A Sister", serif;
    font-size: 14px; 
    color: #333; 
    margin-left: 40px;

    @media (min-width: 768px) {
        font-size: 16px;
    }

`

export const Logo = styled.img`

    width: 120px;
    height: 100px;
    margin-left: 40px;

    @media (min-width: 768px) {
        width: 100px;
        height: 85px; 
    }
`;