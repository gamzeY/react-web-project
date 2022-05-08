import React from "react";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  Line,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  line,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  img,
  alt,
  color,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} color={color} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine} </TopLine>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Heading lightText={lightText}>{headline}</Heading>
                <Line lightText={lightText}>{line}</Line>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
