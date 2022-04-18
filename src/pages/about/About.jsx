import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      {/* sayfanın tamamı */}
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer <span> Stravska </span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Stravska</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known JS, Python, ReactJS, ReactNative, SQL .
        </h4>
        <h2>
          <a href="muratertugral93@gmail.com">Send email</a> :
          muratertugral93@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
