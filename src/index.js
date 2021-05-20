import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {ThemeProvider} from 'styled-components'
import App from "./App";
import MyStyles from './MyStyles'
//changes

ReactDOM.render(
<ThemeProvider theme={MyStyles}>
    <App />
</ThemeProvider>
, 
document.getElementById("root")
);

