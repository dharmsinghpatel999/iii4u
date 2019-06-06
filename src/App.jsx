import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from './component/common/NavBar.jsx';
import Routing from './component/routing'
import { Container } from 'react-bootstrap';
import './styles/bootstrap.css'
import './styles/pallete.css'
import './resources/font.css'

export default function App() {
    return (
        <Container fluid>
            <Router>
                <div>
                    <Header />
                    <Routing />
                </div>
            </Router>
        </Container>
    );
}