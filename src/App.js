import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Navbar from './components/navbar/Navbar.jsx';
import Home from './containers/home/Home.jsx';
import Portfolio from './containers/portfolio/Portfolio.jsx';
import CurriculumVitae from './containers/curriculum-vitae/CurriculumVitae.jsx';
import About from './containers/about/About.jsx';
import Footer from './components/footer/Footer.jsx';

import './styles/App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <div className="App__content">
                        <Route exact path="/" component={ Home } />
                        <Route path="/portfolio" component={ Portfolio } />
                        <Route path="/cv" component={ CurriculumVitae } />
                        <Route path="/about" component={ About } />
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
