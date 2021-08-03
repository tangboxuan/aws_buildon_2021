import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import HeroSection from '../Components/HeroSection'
import InfoSection from '../Components/InfoSection'
import { homeObjOne , homeObjTwo, homeObjThree} from '../Components/InfoSection/Data';

function Home() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection/>
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
      </>
    );
  }

  export default Home;