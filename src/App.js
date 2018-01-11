import React, { Component } from 'react';

import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';

import './styles/App.css';

import louise from './assets/louise.jpg';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <div className="App__profile">
                    <img className="App__image" src={ louise } alt="Louise concentrating while dancing on a longboard by a tall building." />
                    <h1>Louise Taylor</h1>
                    <h2>Junior Developer at Technology Will Save Us</h2>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
