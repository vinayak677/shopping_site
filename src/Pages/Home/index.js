import React, { useEffect, useState } from 'react';
import { PRODUCT_ROUTE} from '../../Constants';
import Card from '../../Components/Card';
import './index.css';
const data = [
  {
    id: "1",
    catagory_name: "Mens clothing",
    description: "Wake up & choose fun with this Men's Peppy Pink Full Sleeve T-Shirt. Style this t-shirt for a smart look.",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6NiSA7EobEeSxrXpDS5JmxhzADfHmawUwQ&usqp=CAU",
  },
  {

    id: "2",
    catagory_name: "Women's clothing",
    description: "Wake up & choose fun with this Women's Peppy Pink Full Sleeve T-Shirt. Style this t-shirt for a smart look.",
    url: "https://st.depositphotos.com/2325841/2530/i/950/depositphotos_25307051-stock-photo-women-shopping.jpg",
  },
  {
    id: "3",
    catagory_name: "Footwear",
    description: "Wake up & choose fun shoes.Sneakers for a smart look.Country of Origin India",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5lGBv0FZYnvHrQJA4WfP0kIyCNUSnbDN_TA&usqp=CAU",
  }, {

    id: "4",
    catagory_name: "Electronics",
    description: "Wake up & choose Electronic items.Country of Origin India",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3h6ttouW2Be8KRM4CCRUrdgIHyitN1Mp3A&usqp=CAU",
  }
]

function Home() {
  return (
    <div className="container" style={{ minHeight:"500px"}}>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {data?.map((_items) => {
          return (
            <Card {..._items} route={`/${PRODUCT_ROUTE}`}/>
           )
        })}
      </div>
    </div>
  )
}

export default Home