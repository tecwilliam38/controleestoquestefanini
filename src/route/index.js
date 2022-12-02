import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import store from '../store/index';
import { Provider } from 'react-redux';
import Data from "../pages/data";
import BdScreen from '../pages/data/bddata';
import CadastroScreen from '../pages/data/cadastro';
import Home from '../pages/home';
import HomeScreen from '../pages/home/home';
import Consulta from '../pages/data/consulta';
import Navbar from '../components/navbar';
import {Switch } from "react-router";
import { isAuthenticated } from './auth';
import Cadastro from '../pages/cadastro';

// const PrivateRoute = ({component: Component, ...rest }) => (    
function PrivateRoute({ component: Component, ...props }){
    if(!Component) return null;
    return props.isAuthenticated
    ? <Component {...props} />
    : <Navigate to={{ pathname: "/"}} />        
    // return(
    // <Route 
    // {...rest} 
    // render = {() =>
    //     isAuthenticated() ? 
    //          <Component {...props} />
       
    //      : 
    //         <Navigate to={{ pathname: "/"}} />        
    // }
    //  />
    // );
}

const Rotas = () =>{
// export default function Routes() {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <Routes>        
          <Route exact path='/' element={<Home />} />
          {/* <PrivateRoute path="/app" component={() => <h1>Hoje</h1>} /> */}
          <Route exact path='/home' element={<Data />} />
          <Route exact path='/data' element={<BdScreen />} />          
          <Route exact path='/cadastro' element={<CadastroScreen />} />
          <Route exact path='/cadastrarUser' element={<Cadastro />} />
          <Route exact path='/consulta' element={<Consulta />} />        
        </Routes>
      </BrowserRouter>
    // </Provider>
  )
}

export default Rotas;