import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '../containers/home/Home.jsx';
import Portfolio from '../containers/portfolio/Portfolio.jsx';
import Work from '../containers/work/Work.jsx';
import About from '../containers/about/About.jsx';

const routes = (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route path="/portfolio" component={ Portfolio } />
    <Route path="/work" component={ Work } />
    <Route path="/about" component={ About } />
  </Switch>
);

export default routes;
