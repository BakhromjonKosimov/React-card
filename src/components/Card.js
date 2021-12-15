
import './Card.css'

function Card(props){
    return(
        <div className="card">
             <div className="cardBody">
                 <img src={props.img} className='cardImg'/>
                 <h2 className='cardTitle'>{props.title}</h2>
                 <p className='cardDescription'>{props.description}</p>
             </div>
             <button className='cardBtn'>View Recipe</button>
        </div>
    )
}

export default Card