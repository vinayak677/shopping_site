import { Link } from 'react-router-dom';
import './index.css';

const Card = (props) => {
  const { id, url, description,state, catagory_name, route, price } = props
  return (
    <Link to={route}  state={state} className="home_text">
      <div className="col" key={id}>
        <div className="card">
          <img src={url} className="card-img-top" alt="card" />
          <div className="card-body">
            <h6 className="card-title">{catagory_name}</h6>
            <p >{description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
} 

export default Card