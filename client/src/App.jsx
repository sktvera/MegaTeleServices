import React from "react";
import { Route, Routes } from 'react-router-dom';
import Welcome from './Routes/Welcome/Welcome'
/* import Selected from'./Routes/Welcome/Selected'
import Search from'./Routes/Welcome/Search'
import FormLogin from'./Routes/Welcome/FormLogin'
import FormEmail from'./Routes/Welcome/FormEmail' */


function App() {
  return (<>
    <Routes>
      <Route path='/' exact={true} element={<Welcome/>}/>
      {/* <Route path="/Selected" element={<Selected/>}/> 
      <Route path="/Search" element={<Search/>}/>
      <Route path="/FormLogin" element={<FormLogin/>}/>
      <Route path="/FormEmail" element={<FormEmail/>}/> */}
    </Routes>
  </>
  );
}

export default App;
