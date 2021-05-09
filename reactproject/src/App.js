import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarek from "./Navbarek/Nav.js";
import Home from "./Home/Home.js";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Shop from "./Shop";
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
            <Navbarek />
            {/*<Home />*/}
            {/*<Cards img="/d1.jpg" />*/}
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/products" exact component={Products} />
                <Route path="/products/:id"  component={ProductDetail} />
                <Route path="/shop"  component={Shop} />
            </Switch>


        </div>
      </Router>
  );
}

export default App;

