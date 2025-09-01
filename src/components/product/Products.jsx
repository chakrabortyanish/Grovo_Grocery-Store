import React from 'react'
import "./Products.css"

import {apple,
  chili,
  onion,
  tamato,
  patato,
  garlic,
  ginger,
  cucumber,
  pack1,
  pack3,
  pack2,} from "../../assets/index.js"

const products = [
  {
    img: onion,
    name: "Onion",
    weight: "1k",
    price: 70
  },{
    img: apple,
    name: "Apple",
    weight: "1k",
    price: 100
  },{
    img: chili,
    name: "Chili",
    weight: "1k",
    price: 50
  },{
    img: tamato,
    name: "Tomato",
    weight: "1k",
    price: 90
  },{
    img: patato,
    name: "Potato",
    weight: "1k",
    price: 70
  },{
    img: garlic,
    name: "Garlic",
    weight: "1k",
    price: 60
  },{
    img: cucumber,
    name: "Cucumber",
    weight: "1k",
    price: 50
  },{
    img: ginger,
    name: "Ginger",
    weight: "1k",
    price: 100
  },
]

const bundle_products = [
  {
    img: pack1,
    name: "Small Pack",
    price: 500,
    des: "Lemon, Tomato, Potato,+2"
  },{
    img: pack2,
    name: "Large Pack",
    price: 580,
    des: "Lemon, Tomato, Potato,+3"
  },{
    img: pack3,
    name: "Big Pack",
    price: 650,
    des: "Lemon, Tomato, Potato,+10"
  },{
    img: pack1,
    name: "Small Pack",
    price: 500,
    des: "Lemon, Tomato, Potato,+2"
  }
]

const Products = () => {
  return (
    <div className='product-container'>
        <div className="Popular-Product">
            <h2 className='title'>Popular Product</h2>
            <div className="product">
              {
                products.map((item, i)=>{
                   return(<div className="item itemInfo" key={i}>
                   <div className="image"><img src={item.img} alt={item.name} /></div>
                   <h3>{item.name}</h3>
                   <select name="weight" id="">
                     <option value="1k">1k</option>
                     <option value="2k">2k</option>
                     <option value="3k">3k</option>
                     <option value="4k">4k</option>
                     <option value="5k">5k</option>
                   </select>
                   <div className="price">Rs. {item.price}</div>
                   <div className="add-to-cart">
                      Add to Cart
                   </div>
                </div>)
                })
              }
            </div>
        </div>

       {/*  Popular Bundle Pack */}
       <section className="popular-bundle">
          <h2 className='title'>Popular Bundle Pack</h2>
          <div className="bundle-products">
              <div className="bunble-items">
                  {
                bundle_products.map((item, i)=>{
                   return(<div className="itemInfo bundle-item" key={i}>
                   <div className="image"><img src={item.img} alt={item.name} /></div>
                   <h3>{item.name}</h3>
                   <div className="des">
                       {item.des}
                   </div>
                   <div className="price">Rs. {item.price}</div>
                   <div className="add-to-cart">
                      Add to Cart
                   </div>
                </div>)
                })
              }
              </div>
          </div>
       </section>
    </div>
  )
}

export default Products
