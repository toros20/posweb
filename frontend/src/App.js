import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from './components/products';
import pageProducts from './pages/products';
//import './App.css';

function App() {
  return (

    <Router>
      <Route path="/" exact component={Products} />
      <Route path="/products" exact component={pageProducts} />
    </Router>
   
  );
}

export default App;
