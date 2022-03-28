import React from "react";
import Content from "./Content";
import "./ContentContainer.css";
import ImageOne from "../images/img-4.jpg";
// import ImageTwo from "../images/img-3.jpg";
import ImageThree from "../images/img-5.jpg";
import ImageFour from "../images/img-6.jpg";
import ImageFive from "../images/img-7.jpg";
import OfficeImage from "../images/office-image.png";
import FndsImage from "../images/fnds-image.png";
import OutsideImage from "../images/outside-image.png";

function ContentContainer() {
  return (
    <div className="cards">
      {/* <div className="orange-slice bg-yellow-500"></div> */}
      <h1 id="work" className="bg-yellow-500 shadow-cool up py-4 px-10 text-white full lg:text-3xl md:text-2xl sm:text-xl">Selected Projects</h1>
      <div className="cards_container">
        <div className="cards__wrapper">
        <ul className="cards__items" data-aos="fade-up">
          <Content
              className="shadow-cool"  
              src={OutsideImage}
              text="Outside Lands - Music Festival"
              label="full-stack"
              path="https://www.sfoutsidelands.com/"
            />
            <Content
              className="shadow-cool"  
              src={FndsImage}
              text="The Friends Experience"
              label="full-stack"
              path="https://www.friendstheexperience.com/"
            />
          </ul>
          <ul className="cards__items" data-aos="fade-up">
            <Content
              className="shadow-cool"    
              src={OfficeImage}
              text="The Office Experience"
              label="full-stack"
              path="https://www.theofficeexperience.com/"
            />
            <Content
              className="shadow-cool"  
              src={ImageThree}
              text="Office Space: The Game - Vanilla Javascript choose your own adventure game"
              label="gaming"
              path="https://kiwi3p.github.io/Ironhack-Game/"
            />
          </ul>
          <ul className="cards__items" data-aos="fade-up">
          <Content
              className="shadow-cool"  
              src={ImageOne}
              text="CoHab - Your Home Task Manager"
              label="full-stack"
              path="https://cohab-backend.herokuapp.com/"
            />
            <Content
              className="shadow-cool"  
              src={ImageFour}
              text="Google Holiday SVG Animation"
              label="SVG Animation"
              path="https://kiwi3p.github.io/2020holiday_Presents_300x250/"
            />
            <Content
              className="shadow-cool"  
              src={ImageFive}
              text="Google Holiday SVG Animation variation 2"
              label="SVG Animation"
              path="https://kiwi3p.github.io/2020holiday_Unwrappable_970x250/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContentContainer;
