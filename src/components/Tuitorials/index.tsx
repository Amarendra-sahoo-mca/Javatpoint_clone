import { tuitorials } from '../../constant/data'
import Language from '../core_components/Language';

import './tuitorial.style.css'
type TutorialKeys = keyof typeof tuitorials;
function Tuitorials() {
  return (
    <div className="container">
      <h3>Tutorials</h3>
      <p>Start learning programming language of your choice.</p>
        {
            Object.keys(tuitorials).map((key)=>(
             
            <Language   key={key} name={key} data={tuitorials[key as TutorialKeys]} />
            ))
        }
      
    </div>
  )
}

export default Tuitorials
