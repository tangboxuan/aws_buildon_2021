import React, { useState } from 'react';
import { Button } from '../ButtonElements';

import Video from '../../videos/hero_video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='hero_video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Making you smile online</HeroH1>
        <HeroP>
        Challenge Statement: A C2C marketplace brings a buyer and seller together for a deal. How might we help them deal amicably, bringing their best to each other?
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
