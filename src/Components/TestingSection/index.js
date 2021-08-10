import React from 'react';
import { Button } from '../ButtonElements';

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
  BtnWrap,
} from './TestingElements';

const TestingSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  ModelForm,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2
}) => {
  console.log(primary);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    onClick={event => window.open('https://drive.google.com/file/d/1ioo0tkl_QCmeo6g1G4QjHFtoR8K0Dp3U/view?usp=sharing', "_blank")}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ModelForm />
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default TestingSection;
