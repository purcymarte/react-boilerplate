import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Home from './screens/Home'
import ExampleContainer from './containers/ExampleContainer'


const routes = () => (
	    <Switch>
        <Route path="/example-page">
          <ExampleContainer/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
)

export default routes
