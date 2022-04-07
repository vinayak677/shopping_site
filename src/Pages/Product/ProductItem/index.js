import { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import { PRODUCT_ROUTE } from "../../../Constants"

const ProductItem = () => {
  const [currentDetails, setCurrentDetails] = useState({})
  const location = useLocation()
  const data = location?.state
  useEffect(() => {
    setCurrentDetails(data)
  }, [data])

  return (


    <div className="container">

      <div className="card mb-3" style={{maxwidth:'540px'}}>
        <div className="row g-0">
          <Link to={`/${PRODUCT_ROUTE}`}>Go Back</Link>
          <div className="col-md-4">
            <img src={currentDetails?.image} style={{height:'300px',marginLeft:'10px',marginTop:'20px'}} className="img-fluid rounded-start" alt="img" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 style={{color:'green'}}>{currentDetails?.category}</h1>
              <h4 style={{color:'blue'}}>Rating:{currentDetails?.rating?.rate}</h4>
              <p className="card-text">{currentDetails?.description}</p>
              <h5 className="card-title">Views:{currentDetails?.title}</h5>
            </div>
          </div>
        </div>
      </div>
      </div>

      )
}

      export default ProductItem