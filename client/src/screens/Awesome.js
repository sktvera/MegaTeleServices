import { useState } from "react";
/* import uniquid from "uniqid"
import axios from 'axios' */
//REACT ROUTER DOM
import { Link/* , useNavigate */ } from "react-router-dom";


//validaciones de formularios
  const Awesome = () => {
     /*   const navigate = useNavigate(); */
      const [coasters, setCoasters] = useState([]);
      /* const [lastName, setLastName] = useState(""); 
/*
      const validateData = () => {
       let validate = name !== "" && lastName != "";

      console.log(validate);
      validate && navigate("/Address");
    };

    const awesome = () =>{
      const user = { 
        name:name,
        lastName:lastName,
        idUsuario:uniquid()
      }

      console.log(user)
     
      axios.post('/user/awesome',user)
      .then(res => {
        alert (res.data)
      })
      .then(err => {console.log(err)})

    }; */
    const loadBuildings = () =>{
      fetch('http://localhost:3300/api/buildings')
      .then(res =>res.json())
      .then(allBuildings => setCoasters(allBuildings))
    } 

    
      loadBuildings();
       return (
       <div className="grilla">
        <div>
            <p>Awesome! Let's get started with the basics.</p>
           
           {coasters.map(eachCoaster =>{
            return(
              <article>
                <p>
                  {eachCoaster.name}
                </p>
              </article>
            )
           })}
        </div>

          <div className="box">
          
             
     
              <input className="input_select" /* value={name} */ /* onChange={(e)=>{setName.e.target.value}} */ /* onBlur={(v) => setName(v.target.value)} */></input>
      
          </div>
      
      <div className="inputs">
          <input className="input_select"/* value={lastName} */ /* onChange={(e)=>{setLastName.e.target.value}} */ placeholder="LAST NAME" /* onBlur={(v) => setLastName(v.target.value)} */></input>
      </div>
      
      <div className="btns">
      <Link to="/Address">
          <a href="#"/* onClick={validateData} */ className="btn">NEXT</a>
      </Link>
      </div>

      <div>
        <label className="label_down">
          STEP 1 OF 4
        </label>
      </div>
      
    </div>
  );
};

export default Awesome ;
