import { useEffect, useState } from "react";
import { PRODUCT_URL } from "../../Constants";
import ProductList from "./ProductList";
import '../Product/p_index.css';

function Product() {
  const [list, setList] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetch(PRODUCT_URL)
      .then(response => response.json())
      .then(_data => setList(_data));
  }, [])

  const searchFunction = (list) => list?.filter((lis) => {
    return lis.category.toLowerCase().includes(query.toLowerCase())
  });

  return (
    <div className="container" style={{ minHeight: "1000px" }}>
      <div className="row" style={{ marginTop: "30px", marginBottom: "20px" }}>
        <div className="col-8" style={{ height: '30px' }}>
          <input type="search" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <div className="col-4" style={{ height: "30px" }}>
          <select value={query} onChange={(e) => setQuery(e.target.value)}>
            <option value="">select filter by category</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothin</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
          </select>
        </div>
      </div>
      <ProductList list={list} searchFunction={searchFunction} />
    </div>
  )
}

export default Product