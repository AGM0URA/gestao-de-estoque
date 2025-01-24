import React from "react";
import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom"; 
import { Link } from "react-router-dom"; 

export const MenuContainer = styled.div`
    background-color:${({theme}) => theme.colors.Branco};
    width: 100%; 
    max-width: 480px;
    height: 85px;
    position:fixed;
    bottom: 0;
    justify-content: space-around;
    align-items: center;
    display: flex;


    @media (min-width: 768px) {
        height: 70px; 
    }
`;

export const ButtonMenu =styled.img`
    width: 50px;
    height: 50px;
    display: inline-block;
    cursor: pointer;

    @media (min-width: 768px) {
        width: 60px;
        height: 60px; 
    }

`;

