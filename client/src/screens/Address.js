import { useState } from "react";


//REACT ROUTER DOM
import { Link, useNavigate } from "react-router-dom";
//validaciones de formularios
const Address = () => {
  const navigate = useNavigate();
  const [streetAdress, setStreetAdress] = useState("");
  const [apt, setApt] = useState("");
  const [coasters, setCoasters] = useState([]);
  const[filterData, setFilterData] = useState([])

    const validateData = () => {
    let validate = streetAdress !== "" && apt != "";

    console.log(validate);
    validate && navigate("/TvPlan");
  };

  const loadBuildings = () =>{
    fetch('http://localhost:3300/api/buildings')
    .then(res =>res.json())
    .then(allBuildings => setCoasters(allBuildings))
  } 

  
    loadBuildings();

    const handleFilter = (event)=>{
      const searchWord = event.target.value
      const newFilter = coasters.filter((value) =>{
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
      });
      setFilterData(newFilter)
    }
  return (
    <div className="grilla">
      <div></div>
      <div>
      <p>
        Pleasure to meet you,Cristian! 
        <div>
        what is your install Address?
        </div>
       
      </p>
      </div>
     
      
      <div className="inputs">
      <input className="input_street"placeholder="STREET ADDRESS, CITY, STATE" onBlur={(v) => setStreetAdress(v.target.value)} onChange={handleFilter}></input>

      <input className="APT" placeholder="APT#" onBlur={(v) =>  setApt(v.target.value)}></input>
      </div>

    { filterData.length != 0 &&
      <div className="dataResult">
      {filterData.map(eachCoaster =>{
            return(
              <a className="dataItem" >
                <p>
                  <div className="itemName">
                  {eachCoaster.name}
                  </div>

                <div className="itemP grillaJunior">
                  <div className="texto"> 
                    {eachCoaster.address},
                    {eachCoaster.city},
                    {eachCoaster.state},
                    {eachCoaster.postal}
                  </div>
                      <div 
                        className="btns"><a href="#"onClick={validateData} className="btnAdress">SELECT</a>
                      </div>
                  
                  
                </div>
                  
                </p>
              </a>
            )
           })}
      </div>

}
       
    

      <div>
        <p className="sub_address"><a href="">I can't find my address</a></p>
      </div>
      
     

      <div className="btns">
      <a href="#"onClick={validateData} className="btn">YES!</a>
      </div>

      <div>
        <label className="label_down">
          STEP 2 OF 4
        </label>
      </div>

      <div></div>
      
      
    </div>

    
    
  );
};

export default Address;


/* import React, { useContext, useEffect } from "react"; */


