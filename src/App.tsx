import React, { useState } from "react";
import "./reset.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import styled from "styled-components";

import Cookies from "js-cookie";

import Login from "./pages/Login";
import Offer from "./pages/Offer";
import Offers from "./pages/Offers";
import Order from "./pages/Order";
import Publish from "./pages/Publish";
import Register from "./pages/Register";
import Header from "./components/organisms/Header";

import Footer from "./components/organisms/Footer";

const MainContainer = styled.div`
  background-color: #fafafa;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const client = new ApolloClient({
  uri: process.env.REACT_APP_SERVER_URL,
});

function App() {
  const [token, setToken] = useState<string | undefined>(Cookies.get("token"));

  return (
    <MainContainer>
      <Router>
        <ApolloProvider client={client}>
          <Header token={token} setToken={setToken} />
          <Switch>
            <Route path="/login">
              <Login token={token} setToken={setToken} />
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
          <Footer />
        </ApolloProvider>
      </Router>
    </MainContainer>
  );
}

export default App;
