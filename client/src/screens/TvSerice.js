import { useState } from "react";
//REACT ROUTER DOM
import { Link, useNavigate } from "react-router-dom";
//css
import '../styles/styles.css'

const TvSerice = () => {
  // const [age, setAge] = useState(0);
  //const navigate = useNavigate();

  // const chanceAge = (action) => {
 //   let chance = age;

//     //MODIFICAR FORMA 1
// action === "PLUS" ? chance++ : chance--;

//     //MODIFICAR FORMA 2
//     if (action === "PLUS") {
//       chance++;
//     } else {
//       chance--;
//     }
//     setAge(chance);
 //  };

  return (
    <div  className="grilla">
      <div>
        
        <h1>The Best TV service
            <div>
              around!
            </div>
        </h1>
      </div>
      
      <div>
      <p >Are you ready to enjoy ultra-best service?</p>
      </div>
     
      {/* <p>{age}</p>
      {age > 5 && <p>Estas viejo</p>} */}
      {/* <button onClick={() => chanceAge("PLUS")}>+</button>
      <button onClick={() => chanceAge("LESS")}>-</button>
      <button onClick={() => navigate("/Awesome")}>next</button> */}
      {/* <Nuevo /> */}

     <div className="boton">
      <Link to="/Awesome">
     <a href="#" className="btn">LET'S DO IT!</a>
      </Link>
      </div>
     
        
    </div>
  );
};

export default TvSerice;
