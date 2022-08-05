import React from "react";
//REACT ROUTER DOM
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
//SCREENS
import TvSerice from "../screens/TvSerice"
import Awesome from "../screens/Awesome"
import Address from "../screens/Address"
import TvPlan from "../screens/TvPlan"
import GreatNews from "../screens/GreatNews"
import Errors from "../screens/Errors"

const Navigation = () =>{
    return(
<Router>
    <div>       
        <Routes>
           <Route  path="/"  element = {<TvSerice/>} />
           <Route path="/Awesome" element = {<Awesome/>} />
           <Route path="/Address" element = {<Address/>} />
           <Route path="/TvPlan" element = {<TvPlan/>} />
           <Route path="/GreatNews" element = {<GreatNews/>} />
          <Route  path="" component = {<Errors/>} />
       </Routes>
   </div>
</Router>
    );
        }

export default Navigation;