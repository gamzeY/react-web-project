import React, { useState } from "react";
import { Button } from "../ButtonElements.js";
import {animateScroll as scroll} from 'react-scroll';
import {
  Container,
  Bg,
  Content,
  H1,
  P,
  btnWrapper,
  ArrowForward,
  ArrowRight,
  Img
} from "./Content";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  const toogleHome = () =>{
    scroll.scrollToBottom();
  };
  return (
    <Container id="home">
      <Bg>
        <Img/>
      </Bg>
      <Content>
        <H1>Technology Consultancy And Mentoring </H1>
        <P>
          Your Technology Partner for Software Innovation and Value-adding
          Solutions
        </P>
        <btnWrapper>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            onClick={toogleHome}
          >
            CONTACT US{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </btnWrapper>
      </Content>
    </Container>
  );
};

export default HeroSection;
