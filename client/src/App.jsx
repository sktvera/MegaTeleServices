import React from "react";
import { Route, Routes } from 'react-router-dom'
import Welcome from './Routes/Welcome/Welcome'
import FormLogin from'./Routes/FormLogin/FormLogin'
import Search from'./Routes/Search/Search'
import SelectedPlans from'./Routes/SelectedPlans/SelectedPlans'
/* 
import FormEmail from'./Routes/Welcome/FormEmail' */


function App() {
  return (<>
    <Routes>
      <Route path='/' exact={true} element={<Welcome/>}/>
      <Route path="/FormLogin" element={<FormLogin/>}/>
      <Route path="/Search" element={<Search/>}/>
      <Route path="/SelectedPlans" element={<SelectedPlans/>}/> 
      {/* 
      
      <Route path="/FormEmail" element={<FormEmail/>}/> */}
    </Routes>
  </>
  );
}

export default App;
