import "./App.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import firestore from "./Services/firestore";
import Nav from "./Components/Nav";
import Home from "./Containers/Home";
import ProductPage from "./Containers/ProductPage";
import ProductList from "./Components/ProductList";
// import { useState, useEffect } from "react";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/products/:id">
          <ProductList />
        </Route>
        <Route path="/products">
          <ProductPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
