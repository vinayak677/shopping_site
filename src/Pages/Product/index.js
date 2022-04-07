import { useEffect, useState } from "react";
import { PRODUCT_URL } from "../../Constants";
import ProductList from "./ProductList";
import '../Product/p_index.css';

function Product() {
  const [list, setList] = useState([])
  const [query, setQuery] = useState("")
  const [searchParam] = useState(["category", "title"]);
  const [selectedItem, setSelectedItem] = useState("")
  const [filterList,setFilterList]=useState([])

  useEffect(() => {
    fetch(PRODUCT_URL)
      .then(response => response.json())
      .then(_data => setList(_data));
  }, [])

  const searchFunction = (list) => {
    return list?.filter((_items) => {
      return searchParam.some((newItem) => {
        return _items[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      })
    })
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const FilterData=(option)=>{
     const newArrray=[...list]
     let data=[]
     for( let items of newArrray){
       if(items?.category === option){
          data.push(items)          
       }
     }
     setFilterList(data)

  }
  const handleChangeSelect = (e) => {
    setSelectedItem(e.target.value)
    FilterData(e.target.value)
  }

  return (
    <div className="container" style={{ minHeight:"1000px"}}>
      <div className="row" style={{ marginTop: "30px", marginBottom: "20px" }}>
        <div className="col-8" style={{height:'30px'}}>
          <input type="search" placeholder="Search" value={query} onChange={handleChange} />
        </div>
        <div className="col-4" style={{height:"30px"}}>
          <select value={selectedItem} onChange={handleChangeSelect}>
            <option value="">select filter by category</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothin</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
          </select>
        </div>
      </div>
      <ProductList list={ filterList?.length > 0 ? filterList : list} searchFunction={searchFunction} />
    </div>
  )
}

export default Product