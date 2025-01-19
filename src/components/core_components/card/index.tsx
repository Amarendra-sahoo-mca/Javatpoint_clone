import { formatString } from '../../../constant/functions'
import './style.css'
function Card(props : {logo:string, title:string}) {
    const {logo, title} = props
   
   
  return (
    <div className="card_cont">
      <img src={logo}></img> <br /> 
      {title}
    </div>
  )
}

export default Card
