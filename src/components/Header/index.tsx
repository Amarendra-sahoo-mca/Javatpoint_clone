import  { useRef, useState } from "react";
import "./header_style.css";
import { bheader, imagepath } from "../../constant/data";
import { useTuggle } from "../../context/tuggleContext";

export default function Header() {
  const [theme, setTheme] = useState("#059862");
  const [mode, setMode] = useState(false);
  const bodyRef = useRef(document.body);
  const {themMode,lightMode, darkMode} =useTuggle();
 
  

  const changethem = (color: string) => {
    setTheme(color);
  }

  const Mode = () => {
   
    !mode ? darkMode() : lightMode();
    setMode(!mode);
  }
  return (
    <>
      <div className="header" style={ 
        { backgroundColor:`${themMode == 'daymode' ? '#ECF9F1' : 'rgba(0, 0, 0)'}`}}>
        <div className="logo">
          <img src={imagepath.logo} alt="Logo" />
        </div>
        <div className="body">
          <div className="tab">
            <div className="tutorial">
              Tutorials <i className="fa-solid fa-caret-down"></i>
            </div>
            <div className="tutorial">
              Interview <i className="fa-solid fa-caret-down"></i>
            </div>
            <div className="tutorial">
              Compiler <i className="fa-solid fa-caret-down"></i>
            </div>
          </div>
          <div className="theme-switcher">
            <div onClick={() => Mode()} className="them" id="A">
             { !mode ? <i
                className="fa-sharp fa-solid fa-moon"
                style={{ color: "#ffffff" }}
              ></i>
            :<i 
              className="fa-sharp fa-solid fa-sun" 
              style={{color:" #ffffff", marginLeft:"-2px"}}>
             </i>}
            </div>
            <div onClick={() => changethem('#059862')} className="them" id="B"></div>
            <div onClick={() => changethem('#0D4549')} className="them" id="C"></div>
            <div onClick={() => changethem('#231760')} className="them" id="D"></div>
            <div onClick={() => changethem('#286562')} className="them" id="E"></div>
          </div>
        </div>
      </div>
      <div className="header2">
        <div className="nav" style={{ backgroundColor: theme }}>
          {bheader.map((item: any) => (
            <a href="#" key={item.id}>
              <div className="course">
                <div className="image">
                  <img src={item.image} alt={item.text} />
                </div>
                <div className="text">{item.text}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
