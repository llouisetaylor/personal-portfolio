import React, { Component } from 'react';
import { Switch } from 'react-router'

import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';

import routes from './routes/routes.js'

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
                <div
                    className="App"
                    onMouseMove={ this.onMouseMove.bind(this) }
                >
                    <img
                        src={ foregroundStars }
                        className="App__background App__background--front"
                        alt=""
                        style={{ transform: `translate(${backgroundX}px, ${backgroundY}px)` }}
                    />
                    <img
                        src={ middlegroundStars }
                        className="App__background App__background--middle"
                        alt=""
                        style={{ transform: `translate(${backgroundX * 0.4}px, ${backgroundY * 0.4}px)` }}
                    />
                    <img
                        src={ backgroundStars }
                        className="App__background App__background--back"
                        alt=""
                        style={{ transform: `translate(${backgroundX * 0.7}px, ${backgroundY * 0.7}px)` }}
                    />
                    <Navbar />
                    <div className="App__content">
                        { routes }
                    </div>
                    <Footer />
                </div>
        );
    }
}

export default App;
