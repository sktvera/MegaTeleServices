import { Link} from "react-router-dom";

const Button = (props)=>{

    let buttons = ["LET'S DO IT!","NEXT","YES!","I AM READY","SUSCRIBE NOW!"]
    let rout = ["/","/Awesome","Address","TvPlan","GreatNews"]
    return(<div>


<Link to="/Awesome"><button> {props.buttons} </button></Link>
    </div>)
}

export default Button;