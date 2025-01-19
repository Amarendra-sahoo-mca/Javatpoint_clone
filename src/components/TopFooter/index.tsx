import './style.css'

function TopFooter() {
  return (
    <div className='main_contt'>
      <div className="img">
        <img src="https://images.javatpoint.com/static/img/Ellipse%202.png" alt="Ellipse-2" id='round_1'/>
        <img src="https://images.javatpoint.com/static/img/Ellipse%201.png" alt="Ellipse-1" id='round_2'/>
        <img src="https://images.javatpoint.com/static/img/aboutjp.png" alt="xxx" id='jhia' />
        <div className="k100">
            <img src="https://images.javatpoint.com/static/img/followers.png" alt="nogo" />
            <p className="i2p1" style={{marginTop : '20px'}}>100K+</p>
              <p className="i2p2">SUBSCRIBERS</p>
        </div>
      </div>
      <div className="texxt">
            <p style={{width:'90%' , margin:'50px 0px 0px 30px'}}>
            <p className="ll" style={{fontWeight:'700', fontSize: '18px',marginBottom:'10px'}}>Youtube Channel</p>
            <h2 className="llb" style={{fontSize:'25px'}}>Explore Latest Tutorials by Subscribing to Our YouTube Channel</h2>
            </p>
            <button className='btn'>
            <i className="fa-solid fa-arrow-right" style={{color: "#ffffff"}}></i>                {/* <i className="fa-sharp fa-solid fa-moon" style={{ color: "#ffffff" }}></i> */}
                Join Now</button>
      </div>
    </div>
  )
}

export default TopFooter
