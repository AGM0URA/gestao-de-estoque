import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App/App.jsx';
import { theme } from "../frontend/Styles/ConfigGlobal.js";
import { ThemeProvider } from "styled-components"; // Importa o ThemeProvider

createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <StrictMode >
        <App />
    </StrictMode>

    </ThemeProvider>

    
);
