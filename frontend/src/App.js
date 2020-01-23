import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from './components/Products';
import Navbar from './components/Navbar.js';
import Sidebar from './components/Sidebar.js';
import pageProducts from './pages/products';
//import './App.css';

function App() {
  return (

    <Router>
      <Navbar />
      <Sidebar />
      <Route path="/" exact component={Products} />
      <Route path="/products" exact component={pageProducts} />
    </Router>
   
  );
}

export default App;
