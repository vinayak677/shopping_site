import { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import { PRODUCT_ROUTE } from "../../../Constants"

const ProductItem = () => {
  const [currentDetails,setCurrentDetails]=useState({})
  const location=useLocation()
  const data=location?.state
  useEffect(()=>{
    setCurrentDetails(data)
  },[data])

  return (
    <div className="container">
      <Link to={`/${PRODUCT_ROUTE}`}>Go Back</Link>
      <h1>{currentDetails?.category}</h1>
      <p>{currentDetails?.description}</p>
      <i>{currentDetails?.price}</i>
      <h3>{currentDetails?.title}</h3>
      <h3>Views:{currentDetails?.rating?.count}</h3>
      <h4>Rating:{currentDetails?.rating?.rate}</h4>
      <img src={currentDetails?.image} alt="img"/>
    </div>
  )
}

export default ProductItem