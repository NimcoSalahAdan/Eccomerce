import React from 'react'
/// import react routers
import {BrowserRouter as Router, Route,Routes}from 'react-router-dom'
/// import pages
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
//import components
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
//// import contexts





const App =() => {
  return (
    <div className='overflow-hidden'>
      <Router>
      <Header/>
        <Routes>
          <Route path='/'element={< Home/>}     />
          <Route  path='product/:id/' element={<ProductDetails/>}/>
        </Routes>
        <Sidebar/>
        <Footer/>
      </Router>
       </div>
  );
};

export default App
