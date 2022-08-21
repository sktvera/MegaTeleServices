import { Link } from "react-router-dom";
/* import{FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{fabrands, faxing}from "@fortawesome/free-solid-svg-icons" */
const TvPlan = () => {
  return (
    <div className="grilla">
      <div>
      <p className="title">Please select the Tv plan you wnat to enjoy:</p>
      </div>
      
       <div className="container">
       <div className="card"> 
          <p>Premium</p>
          <label>Service</label>
          {/* <FontAwesomeIcon icon={faxing} />
          <FontAwesomeIcon icon={fabrands} /> */}
          <p className="numberx">50</p>
        <input type="radio"></input>
        </div>

        <div className="card" >
          <p>Basic</p>
          <label>Service</label>
          {/* <FontAwesomeIcon icon="fa-brands fa-xing" /> */}
          <p className="numberx">30</p>
        <input className="radio" type="radio"></input>
        </div>
       </div>
      
      

      <div className="btns">
      <Link to="/GreatNews">
        <a href="#" className="btn">I AM READY</a>
      </Link>
      </div>

      <div>
        <label className="label_down">
          STEP 3 OF 4
        </label>
      </div>
      
    </div>
  );
};

export default TvPlan;
