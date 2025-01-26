import React from "react";
import styled from "styled-components";
import "../App/App.css";
import NavBar from "../Components/NavBar";
import Menu from "../Components/Menu";

const AppContainer = styled.div`
    width: 100%;
    max-width: 480px;
    height:720px ;
    margin: 0 auto; 
    background-color: aliceblue;

`;

const App = () => {
    return (
        <AppContainer>
            <NavBar />
            <Menu />
        </AppContainer>
    );
};

export default App;