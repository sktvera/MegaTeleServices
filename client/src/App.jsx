import React from "react";
import { Route, Routes } from 'react-router-dom'
import Welcome from './Routes/Welcome/Welcome'
import FormLogin from'./Routes/FormLogin/FormLogin'
import Search from'./Routes/Search/Search'
import SelectedPlans from'./Routes/SelectedPlans/SelectedPlans'
import FormEmail from'./Routes/FormEmail/FormEmail'
import Result from'./Routes/Result/Result'
import Footer from "./Components/Includes/Footer/Footer";
import Header from "./Components/Includes/Header/Header";
import Support from './Routes/Support/Support';
import Enterprise from './Routes/Enterprise/Enterprise';
import Login from './Routes/Login/Login'

import './App.css'

function App() {
  return (<>
    <div className="App">
      <Header/>
    <Routes>
      <Route path='/' exact={true} element={<Welcome/>}/>
      <Route path='/https://sktvera.github.io/MegaTeleServices' element={<Welcome/>}/>
      <Route path="/FormLogin" element={<FormLogin/>}/>
      <Route path="/Search" element={<Search/>}/>
      <Route path="/SelectedPlans" element={<SelectedPlans/>}/> 
      <Route path="/FormEmail" element={<FormEmail/>}/>
      <Route path="/Result" element={<Result/>}/>
      <Route path="/Support" element={<Support/>}/>
      <Route path="/Enterprise" element={<Enterprise/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    <Footer/>
    </div>
    
  </>
  );
}

export default App;
