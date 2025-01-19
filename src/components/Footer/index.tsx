import React from "react";
import { FooterData, FooterKeys, imagepath } from "../../constant/data";
import { formatString } from "../../constant/functions";

function Footer() {
    const smedia = {
        margin: '4px',
        borderRadius:'10px',
        display: 'flex',
        justifyContent:'center',
        height: '40px',
        width: '40px',
        backgroundColor:'#333'
    }
  return (
    <>
      <div
        style={{
          width: "90%",
          height: "530px",
          backgroundColor: "#ff0",
          margin: "0 auto",
          display: "flex",
        }}
      >
        <div
          className="cgild"
          style={{ height: "100%", width: "40%", backgroundColor: "#fff", }}
        >
          <img src={imagepath.logo} alt="Logo" />
          <p style={{ margin: "20px 10px 20px 0", lineHeight: "20px" }}>
            We provides tutorials and interview questions of all technology like
            java tutorial, android, java frameworks
          </p>
          <p style={{ fontWeight: "bold", margin: "20px 0px" }}>Contact info</p>
          <p
            style={{
              marginTop: "20px",
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
            }}
          >
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "#000000", fontSize: "25px" }}
            ></i>{" "}
            &nbsp; G-13, 2nd Floor, Sec-3, Noida, UP, 201301, India
          </p>
          <p
            style={{
              marginTop: "20px",
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
            }}
          >
            <i
              className="fa-regular fa-envelope"
              style={{ color: "#000000", fontSize: "25px" }}
            ></i>{" "}
            &nbsp; hr@javatpoint.com.
          </p>
          <p style={{ fontWeight: "bold", margin: "20px 0px" }}>Follow us</p>
          <div className="parent" style={{display:'flex'}}>
            <div className="smedia" style={smedia}><img src="https://images.javatpoint.com/static/img/facebook.png" alt="" 
             style={{scale:'0.5'}}/></div>
            <div className="smedia" style={smedia}><img src="https://images.javatpoint.com/static/img/twitter.png" alt="" 
             style={{scale:'0.5'}}/></div>
            <div className="smedia" style={smedia}><img src="https://images.javatpoint.com/static/img/jp.png" alt="" 
             style={{scale:'0.5'}}/></div>
            <div className="smedia" style={smedia}><img src="https://images.javatpoint.com/static/img/youtube.png" alt="" 
             style={{scale:'0.5'}}/></div>            
          </div>
          <p style={{color:'green', margin:'20px 0'}}>Latest Post</p>
          <p style={{color:'green'}}>PRIVACY POLICY</p>
        </div>
        {Object.keys(FooterData).map((item) => (
          <div
            className="cgild"
            style={{
              height: "100%",
              width: "20%",
              backgroundColor: "#fff",
              padding: "30px 40px",
            }}
            key={item}
          >
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "30px",
              }}
            >
              {" "}
              {formatString(item)}
            </p>
            {FooterData[item as FooterKeys].map((key) => (
              <a href="" style={{ textDecoration: "none", color: "#000" }}>
                <p
                  style={{
                    height: "20px",
                    margin: "20px 0",
                  }}
                  key={key}
                >
                  {key}
                </p>
              </a>
            ))}
          </div>
        ))}
      </div>
      <div
        className="copyright"
        style={{
          width: "85%",
          height: "80px",
          margin: "0 auto",
          textAlign: "center",
          borderTop: "1px solid #3332",
          padding: "30px",
        }}
      >
        © Copyright 2025 Javatpoint. All Rights Reserved.
      </div>
    </>
  );
}

export default Footer;
