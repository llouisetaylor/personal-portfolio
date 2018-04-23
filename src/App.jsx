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
            mouseX: 0,
            mouseY: 0,
            backgroundX: 0,
            backgroundY: 0
        }
    }

    componentDidMount() {
        this.animate();
    }

    animate() {
        const translationRatio = 0.05;
        const latency = 0.05;

        this.setState(({ backgroundX, backgroundY, mouseX, mouseY })=> ({
            backgroundX: (((1 - latency) * backgroundX) - (latency * translationRatio * mouseX)),
            backgroundY: (((1 - latency) * backgroundY) - (latency * translationRatio * mouseY))
        }))
        window.requestAnimationFrame(() => this.animate())
    }

    onMouseMove(e) {
        this.setState({
            mouseX: e.nativeEvent.clientX - App.centerX,
            mouseY: e.nativeEvent.clientY - App.centerY
        });
    }

    render() {
        const { backgroundX, backgroundY } = this.state;

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
                        style={{ transform: `translate(${backgroundX}px, ${backgroundY}px)` }}
                    />
                    <img
                        src={ middlegroundStars }
                        className="App__background App__background--middle"
                        alt="Various constellations"
                        style={{ transform: `translate(${backgroundX * 0.4}px, ${backgroundY * 0.4}px)` }}
                    />
                    <img
                        src={ backgroundStars }
                        className="App__background App__background--back"
                        alt="Stars"
                        style={{ transform: `translate(${backgroundX * 0.7}px, ${backgroundY * 0.7}px)` }}
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
