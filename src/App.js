import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import DieuHuong from './Component/DieuHuong/DieuHuong';

function App() {
  return (
    <Router>
    <div className="App">
      <Header></Header>
      <DieuHuong></DieuHuong>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
