import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./components/AppNavbar/AppNavbar.js";
import Home from "./views/Home/Home.js";
import Products from "./views/Products/Products";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Shop from "./views/Shop/Shop";
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
            <AppNavbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/products" exact component={Products} />
                <Route path="/products/:id" component={ProductDetail} />
                <Route path="/shop"  component={Shop} />
            </Switch>


        </div>
      </Router>
  );
}

export default App;

