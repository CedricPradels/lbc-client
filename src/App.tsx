import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Offer from "./pages/Offer";
import Offers from "./pages/Offers";
import Order from "./pages/Order";
import Publish from "./pages/Publish";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/publish">
            <Publish />
          </Route>
          <Route path="/order/:id">
            <Order />
          </Route>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/">
            <Offers />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
