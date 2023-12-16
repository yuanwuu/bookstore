import { Link } from "react-router-dom"
import { CiShoppingCart } from "react-icons/ci"
import {products} from '../data.jsx'
import { useState } from "react"

const Merch = ({title}) => {
    // const [products,setProducts] = useState([])
    // const randomproducts = []
    //     while (randomproducts.length < 4){
    //       const product = products[Math.floor(Math.random() * response.data.length)]
    //       if(!randomproducts.includes(product)) {
    //         randomproducts.push(product)
    //        //  console.log(randomproducts.length)
    //        }
    //     }
    //     setProducts(randomproducts)
    //     // console.log(randomproducts)
 
  return (
    <div id="products" className="lg:mx-[100px]">
      <p className="text-[1.5rem] lg:text-[2.5rem] p-4 uppercase">{title}</p>
      <div id="book-card" className="lg:flex grid grid-cols-1" >

          {products.map((product,idx)=>(
             <div className="lg:flex flex-col justify-between items-stretch lg:w-1/3 h-[500px] lg:p-5">
                <div>
                  <img src={product.image} alt="" className=" w-[200px] h-[250px]" key={idx}/>
                  <p className="text-xl">{product.name}</p>
                  <p className="truncate">{product.desc}</p>
                  <p>$ {product.price}</p>
                </div>
                  <button className="uppercase text-white bg-green-950 lg:w-full h-[50px] flex p-3">
                    <CiShoppingCart size={25} className="mr-2"/>
                    add to cart
                  </button>
             </div>
          ))}
          
      </div>
    </div>
  )
}

export default Merch