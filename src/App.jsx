import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';

import Navbar from './components/navbar/Navbar.jsx';
import Home from './containers/home/Home.jsx';
import Portfolio from './containers/portfolio/Portfolio.jsx';
import CurriculumVitae from './containers/curriculum-vitae/CurriculumVitae.jsx';
import About from './containers/about/About.jsx';
import Footer from './components/footer/Footer.jsx';

import './styles/App.css';

import foregroundStars from './assets/frontstars.png';
import middlegroundStars from './assets/middlestars.png';
import backgroundStars from './assets/backstars.png';

class App extends Component {

    static centerX = window.screen.availWidth / 2;
    static centerY = window.screen.availHeight / 2;

    constructor() {
        super();

        this.state = {
            x: 0,
            y: 0
        }
    }

    onMouseMove(e) {
        const translationRatio = 0.05;
        let radiusX = Math.round(e.nativeEvent.clientX) - App.centerX;
        let radiusY = Math.round(e.nativeEvent.clientY) - App.centerY;

        this.setState({
            x: - radiusX * translationRatio,
            y: - radiusY * translationRatio
        });
    }

    render() {
        const { x, y } = this.state;

        return (
            <HashRouter>
                <div
                    className="App"
                    onMouseMove={ this.onMouseMove.bind(this) }
                >
                    <img
                        src={ foregroundStars }
                        className="App__background App__background--front"
                        alt="Various constellations"
                        style={{ transform: `translate(${x}px, ${y}px)` }}
                    />
                    <img
                        src={ middlegroundStars }
                        className="App__background App__background--middle"
                        alt="Various constellations"
                        style={ { transform: `translate(${x * 0.4}px, ${y * 0.4}px)` } }
                    />
                    <img
                        src={ backgroundStars }
                        className="App__background App__background--back"
                        alt="Stars"
                        style={{ transform: `translate(${x * 0.7}px, ${y * 0.7}px)` }}
                    />
                    <Navbar />
                    <div className="App__content">
                        <Route exact path="/" component={ Home } />
                        <Route path="/portfolio" component={ Portfolio } />
                        <Route path="/cv" component={ CurriculumVitae } />
                        <Route path="/about" component={ About } />
                    </div>
                    <Footer />
                </div>
            </HashRouter>
        );
    }
}

export default App;
