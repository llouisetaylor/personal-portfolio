import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';

import Home from '../containers/home/Home.jsx';
import Portfolio from '../containers/portfolio/Portfolio.jsx';
import About from '../containers/about/About.jsx';

const ScrollToTop = () => {
  window.scrollTo(0, 60)
  return null
}

const routes = (
  <Fragment>
    <Route component={ ScrollToTop } />
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/portfolio" component={ Portfolio } />
      <Route path="/about" component={ About } />
    </Switch>
  </Fragment>
);

export default routes;
