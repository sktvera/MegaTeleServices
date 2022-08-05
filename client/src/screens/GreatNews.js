import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const GreatNews = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");


  const validateData = () => {
    let validate = email !== "" && phoneNumber != "";

    console.log(validate);
    validate && navigate("/");
  };
  return (
    <div className="grilla">
      <div>
      <p>Great news! your first month's free!</p>
      </div>
      
      <label className="sub_tittle_two">
        to get set up, just provide your email and phone numer and we can remind
        you when the free trial ends
      </label>

      <div className="inputs">
      <input className="input_select" placeholder="EMAIL" onBlur={(v) => setEmail(v.target.value)}></input>
      </div>

      <div className="inputs">
      <input className="input_select" onBlur={(v) =>  setPhoneNumber(v.target.value)}></input>
      </div>

      <div>
        <p className="sub_address"><a href="">I have promo code!</a></p>
      </div>
      
      

      <div className="btns">
      <Link to="/">
      <a href="#"onClick={validateData} className="btn">SUSCRIBE NOW!</a>
      </Link>
      </div>

      <div>
        <label className="label_down">
          STEP 4 OF 4
        </label>
      </div>
      
     
      
    </div>



  );
};

export default GreatNews;
