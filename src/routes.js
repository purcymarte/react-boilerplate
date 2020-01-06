import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch, 
  Link
} from "react-router-dom";

import Home from './screens/Home'
import ExampleContainer from './containers/ExampleContainer'


const routes = () => (
	<Router>
	  <Link to="/">home</Link>
	  <Link to="/example-page">example</Link>
	  <Switch>
        <Route path="/example-page">
          <ExampleContainer/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
)

export default routes
