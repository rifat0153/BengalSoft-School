import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "../App.css";
import Cristiano from "../images/cristiano.jpg";
import Messi from "../images/messi.jpg";
import Neymar from "../images/neymar.jpg";
import Kaka from "../images/kaka.jpg";
import Pele from "../images/pele.jpg";

export default class Home extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2 
    };
    return (
      <div className="container">
        

        <div  className="row carousel"> 
          <div className="col-12 col-md-5 "> 
            <h1 className="carousel-text"><b>BEST PLATFROM <br></br>TO LEARN<br></br> EVERYTHING</b></h1>
          </div >

          <div className="col-md-6"> 
            <Slider {...settings}>
              <div>
                <img className="carousel-image" src={Cristiano}/>
              </div>
              <div>
                <img className="carousel-image" src={Messi} />
              </div>
              <div>
                <img className="carousel-image" src={Neymar} />
              </div>
              <div>
                <img className="carousel-image" src={Kaka} />
              </div>
              <div>
                <img className="carousel-image" src={Pele} />
              </div>
            </Slider>
          </div>

        </div>
        
      </div>
    );
  }
}