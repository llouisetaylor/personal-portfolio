import React, { Component } from 'react';

import './styles/App.css';

import louise from './assets/louise.jpg';
import github from './assets/github.svg';
import medium from './assets/medium.svg';
import linkedin from './assets/linkedin.svg';

const svgStyles = {
    height: '40px',
    width: '40px',
    padding: '10px'
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <nav className="App__nav">
                    <a className="App__navitem" href="/">Home</a>
                    <a className="App__navitem" href="/">About</a>
                    <a className="App__navitem" href="/">Tab</a>
                    <a className="App__navitem" href="/">Tab</a>
                </nav>
                <div className="App__profile">
                    <img className="App__image" src={ louise } alt="Louise concentrating while dancing on a longboard by a tall building." />
                    <h1>Louise Taylor</h1>
                    <h2>Junior Developer at Technology Will Save Us</h2>
                </div>
                <div className="App__footer">
                    <a href="https://github.com/llouisetaylor">
                        <img className="App__social" src={ github } alt="The GitHub logo" style={ svgStyles } />
                    </a>
                    <a href="https://www.linkedin.com/in/louise-taylor-757a55130/">
                        <img className="App_social" src={ linkedin } alt="The LinkedIn logo" style={ svgStyles } />
                    </a>
                    <a href="https://medium.com/@llouisetaylor">
                        <img className="App_social" src={ medium } alt="The Medium logo" style={ svgStyles } />
                    </a>
                </div>
            </div>
        );
    }
}

export default App;
