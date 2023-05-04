import "./Card.css";

const card =({title,par ,lesson}) =>(
    <div className="Card">
    <h6>{title}</h6>
    <p>{par}</p> 
    { lesson>20? <div>yuksek idealler</div> : <div>istirham etmek</div>}
<button>Continue</button></div>

);


export default card;