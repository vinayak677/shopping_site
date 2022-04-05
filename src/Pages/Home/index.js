import React, { useEffect, useState } from 'react'
import { PRODUCT_ROUTE} from '../../Constants'
import Card from '../../Components/Card'
const data = [
  {
    id: "1",
    catagory_name: "Mens clothing",
    description: "Wake up & choose fun with this Men's Peppy Pink Full Sleeve T-Shirt. Style this t-shirt with a pair of trousers and sneakers for a smart look.Country of Origin India",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6NiSA7EobEeSxrXpDS5JmxhzADfHmawUwQ&usqp=CAU",
  },
  {

    id: "2",
    catagory_name: "Women's clothing",
    description: "Wake up & choose fun with this Men's Peppy Pink Full Sleeve T-Shirt. Style this t-shirt with a pair of trousers and sneakers for a smart look.Country of Origin India",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6NiSA7EobEeSxrXpDS5JmxhzADfHmawUwQ&usqp=CAU",
  },
  {
    id: "3",
    catagory_name: "Footwear",
    description: "Wake up & choose fun with this Men's Peppy Pink Full Sleeve T-Shirt. Style this t-shirt with a pair of trousers and sneakers for a smart look.Country of Origin India",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6NiSA7EobEeSxrXpDS5JmxhzADfHmawUwQ&usqp=CAU",
  }, {

    id: "1",
    catagory_name: "Electronics",
    description: "Wake up & choose fun with this Men's Peppy Pink Full Sleeve T-Shirt. Style this t-shirt with a pair of trousers and sneakers for a smart look.Country of Origin India",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6NiSA7EobEeSxrXpDS5JmxhzADfHmawUwQ&usqp=CAU",
  }
]

function Home() {
  return (
    <div className="container">
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