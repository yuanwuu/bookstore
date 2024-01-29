import { footerNav } from "../data"
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-black text-white p-10 ">
      
        {
        footerNav.map((item,idx)=>(
          <ul className="lg:flex w-full lg:justify-around" key={idx}>
            <Link to={item.link}><li className="uppercase">{item.name}</li></Link>
          </ul>
        ))
        }
    </div>
  )
}

export default Footer