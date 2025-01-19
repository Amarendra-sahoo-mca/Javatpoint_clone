import { formatString } from '../../../constant/functions';
import Card from '../card';
import './style.css'
function Language(props: { name: string; data: any[] }) {
  const { name, data } = props;
  const title2 = formatString(name)
  
    
  return (
    <div className='main_container'>
      <div className='title'>{title2}</div>
      <div className="cont">
      {data?.map((item: any, index: any) => (
        <Card key={index}  logo={item.logo} title= {item.title}/>
      ))}
      </div>
    </div>
  );
}

export default Language;
