import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import HeroSection from '../Components/HeroSection'
import InfoSection from '../Components/InfoSection'
import { homeObjOne} from '../Components/InfoSection/Data';
import TestingSection from '../Components/TestingSection';
import { testObjOne,testObjTwo } from '../Components/TestingSection/Data'



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

        <TestingSection {...testObjOne} />
        <TestingSection {...testObjTwo} />
        {/* <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} /> */}
  

      </>
    );
  }



  export default Home;
