import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Kirobo from './App';
import reportWebVitals from './reportWebVitals';
import { Container, Header } from "semantic-ui-react";

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Header as="h2">Ori Shalom</Header>
    {children}
  </Container>
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App>
    <Kirobo />
  </App>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
