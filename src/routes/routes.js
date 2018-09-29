import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '../containers/home/Home.jsx';
import Portfolio from '../containers/portfolio/Portfolio.jsx';
import CurriculumVitae from '../containers/curriculum-vitae/CurriculumVitae.jsx';
import About from '../containers/about/About.jsx';

const routes = (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route path="/portfolio" component={ Portfolio } />
    <Route path="/cv" component={ CurriculumVitae } />
    <Route path="/about" component={ About } />
  </Switch>
);

export default routes;
