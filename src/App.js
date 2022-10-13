import React from "react";
import './App.css';
import Home from "./Home";
//import Carosel from './Carosel';
import Navbar from "./Navbar";
//import Products from "./Products";
import {Switch, Route} from "react-router-dom";
import Products from "./Products";
import Product from "./Product";
import Cart from "./Cart";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      
      {/*<Carosel />
      <Products />*/}
    </>
  );
};

export default App;
