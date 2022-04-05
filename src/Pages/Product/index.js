import { useEffect, useState } from "react";
import { PRODUCT_URL } from "../../Constants";
import ProductList from "./ProductList";


function Product() {
  const [list, setList] = useState([])
  const [query, setQuery]=useState("")

  useEffect(() => {
    fetch(PRODUCT_URL)
      .then(response => response.json())
      .then(_data => setList(_data));
  }, [])

  const handleChange=(e)=>{
    setQuery(e.target.value)
    const result=list?.filter((_items)=>{
      return _items?.category?.toLowerCase().includes(query.toLowerCase()) || _items?.title?.toLowerCase()?.includes(query?.toLowerCase())
    })
    if(result?.length != 0 ){
      setList(result)
    }
  }
  return (
    <div className="container">
      <div className="row" style={{ marginTop:"30px",marginBottom:"20px"}}>
        <div className="col-8">
          <input type="text" placeholder="Search" value={query} onChange={handleChange}/>
        </div>
        <div className="col-4">
          <select>
            <option>welcome</option>
          </select>
        </div>
      </div>
      <ProductList list={list} />
    </div>
  )
}

export default Product