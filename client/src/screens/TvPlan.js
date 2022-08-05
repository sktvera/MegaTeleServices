import { Link } from "react-router-dom";
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
          <p>50</p>
        <input type="checkbox"></input>
        </div>

        <div className="card" >
          <p>Basic</p>
          <label>Service</label>
          <p>30</p>
        <input type="checkbox"></input>
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
