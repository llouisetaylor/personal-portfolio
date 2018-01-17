import React, { Component } from 'react';

import '../../styles/containers/home/home.css';

class Home extends Component {
    render() {
        return (
            <div className="profile">
                <h1 className="profile__heading">Louise<br/>Taylor</h1>
                <h2 className="profile__subheading">Junior Developer at Technology Will Save Us</h2>
            </div>
        );
    }
}

export default Home;
