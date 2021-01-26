import React, { Component } from 'react';

import About from './containers/about/About';
import Portfolio from './containers/portfolio/Portfolio';
import SettingsBar from './components/settings-bar/SettingsBar';
import ExternalLinks from './components/external-links/ExternalLinks';
import Background from './components/scenery/background/Background';
import Foreground from './components/scenery/foreground/Foreground'
import Button from './components/inputs/button/Button';

import { setCookie, getCookie } from './util/storage.js';
import { hasOSReducedMotion } from './util/os.js';

import './styles/App.css';

class App extends Component {

    static centerX = window.screen.availWidth / 2;
    static centerY = window.screen.availHeight / 2;

    state = {
        mouseX: 0,
        mouseY: 0,
        backgroundX: 0,
        backgroundY: 0,
        background: getCookie('background') === 'on' || getCookie('background') === undefined,
        font: getCookie('font')
    }

    componentDidMount() {
        this.scrollToTop();
        if (hasOSReducedMotion() === true) {
            this.setState({
                background: false
            });
        }
        this.animate();
    }

    scrollToTop() {
        window.scrollTo(0, 60)
        return null
    }

    animate() {
        const translationRatio = 0.05;
        const latency = 0.05;

        this.setState(({ backgroundX, backgroundY, mouseX, mouseY }) => ({
            backgroundX: (((1 - latency) * backgroundX) - (latency * translationRatio * mouseX)),
            backgroundY: (((1 - latency) * backgroundY) - (latency * translationRatio * mouseY))
        }));
        window.requestAnimationFrame(() => this.animate());
    }

    onMouseMove = (e) => {
        this.setState({
            mouseX: e.nativeEvent.clientX - App.centerX,
            mouseY: e.nativeEvent.clientY - App.centerY
        });
    }

    toggleBackground = () => {
        const { background } = this.state;
        setCookie('background', background ? 'off' : 'on');
        this.setState({ background: !background });
    }

    changeFont = (e) => {
        const font = e.nativeEvent.target.value;
        setCookie('font', font);
        this.setState({ font });
    }

    render() {
        const { backgroundX, backgroundY, background, font } = this.state;

        const toggleBackgroundButton = (
            <Button
                aria-label={`${background ? 'Disable' : 'Enable'} background animation`}
                onClick={this.toggleBackground}
            >
                {`${background ? 'Turn off' : 'Turn on'} background animation`}
            </Button>
        );

        return (
            <div
                className={`App ${font}`}
                onMouseMove={this.onMouseMove}
            >
                {
                    background
                        ? <div className="App__background">
                            <Background
                                xOffset={backgroundX}
                                yOffset={backgroundY}
                            />
                        </div>
                        : null
                }
                <Foreground />

                <SettingsBar
                    toggleBackgroundButton={toggleBackgroundButton}
                    changeFont={this.changeFont}
                />
                <ExternalLinks />

                <div className="App__content" role="main">
                    <About />
                    <Portfolio />
                </div>
            </div >
        );
    }
}

export default App;
