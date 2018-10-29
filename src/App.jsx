import React, { Component } from 'react';

import SettingsBar from './components/settings-bar/SettingsBar';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Background from './components/background/Background.jsx';

import routes from './routes/routes.js'

import './styles/App.css';

class App extends Component {

    static centerX = window.screen.availWidth / 2;
    static centerY = window.screen.availHeight / 2;

    constructor() {
        super();

        this.state = {
            mouseX: 0,
            mouseY: 0,
            backgroundX: 0,
            backgroundY: 0,
            background: true
        }
    }

    componentDidMount() {
        this.animate();
    }

    animate() {
        const translationRatio = 0.05;
        const latency = 0.05;

        this.setState(({ backgroundX, backgroundY, mouseX, mouseY }) => ({
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

    toggleBackground = () => {
        const { background } = this.state

        this.setState({
            background: !background
        });
    }

    render() {
        const { backgroundX, backgroundY, background } = this.state;

        const toggleBackgroundButton = (
            <button
                className="settings-bar__toggle-background"
                aria-label={`${background ? 'Disable' : 'Enable'} background animation`}
                onClick={ this.toggleBackground }
            >
                { `${background ? 'Turn off' : 'Turn on'} background animation` }
            </button>
        );

        return (
            <div
                className="App"
                onMouseMove={ this.onMouseMove.bind(this) }
            >
                {
                    background
                        ? <div className="App__background">
                            <Background
                                xOffset={ backgroundX }
                                yOffset={ backgroundY }
                            />
                        </div>
                        : null
                }

                <div className="App__header">
                    <SettingsBar toggleBackgroundButton={ toggleBackgroundButton } />
                    <Navbar />
                </div>

                <div className="App__content" role="main">
                    { routes }
                </div>

                <Footer />
            </div>
        );
    }
}

export default App;
