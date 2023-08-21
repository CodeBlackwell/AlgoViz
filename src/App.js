import React, { useRef, useEffect } from 'react';
import { DarkModeContext, DarkModeProvider } from './Main/DarkModeContext';
import AboutMe from "./About Me/AboutMe";
import Projects from "./Projects/Projects";
import Blog from "./Blog/Blog";
import Contacts from "./Contacts/Contacts";
import ParallaxBackground from "./Main/ParallaxBackground";
import OutsideOfTech from "./Outside Tech/OutsideOfTech";

const App = () => {

    return (
        <ParallaxBackground>
            <AboutMe/>
            <Projects/>
            <Blog/>
            <Contacts/>
            <OutsideOfTech/>
        </ParallaxBackground>
    );
};

export default App;
