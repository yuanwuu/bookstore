import { footerNav } from "../data"
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-black text-white p-10 ">
      <ul className="lg:flex w-full lg:justify-around">
        {
        footerNav.map((item,idx)=>(
          <Link to={item.link}><li key={idx} className="uppercase">{item.name}</li></Link>
        ))
        }
      </ul>
    </div>
  )
}

export default Footer