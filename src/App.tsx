import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";
import treeLogo from "../src/assets/images/tree.png";
import arrow from  "../src/assets/images/arrow.svg";
import profile from  "../src/assets/images/raven-profile.png";

function App() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div className="App">
            <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
            {/* Page container */}
            <div id="top" className="page-container text-white h-">
                {/* Navbar */}
                <div className="nav-bar h-28 flex items-center justify-between" >
                    <a href="#top" className="w-auto inline-block">
                        <img className="h-16 aspect-square ml-20" src={treeLogo} alt="" />
                    </a>
                    <div className="links h-full flex items-center space-x-48 mr-48">
                        <a href="">Home</a>
                        <a href="">Projects</a>
                        <a href="">Contact</a>
                    </div>                        
                </div>
                {/* Main page */}
                {/* Side arrow with scroll text */}
                <div className="flex fixed top-1/2 -left-12 -rotate-90 items-center space-x-4">
                    <img className="h-14 w-8 -rotate-90" src={arrow} alt=""/>
                    <span className="text-sm tracking-wider">SCROLL TO SEE MORE</span>
                </div>
                {/* Center content */}
                <div className="flex flex-col justify-center items-center">
                    {/* Portrait photo */}
                    <img className="w-48 h-auto block rounded-full aspect-square mt-64" src={profile} alt=""/>
                    
                    {/* Title banner */}
                    <div className="text-7xl text-center leading-tight mt-14 mb-20">
                        DATA SCIENTIST. NATURE LOVER. <br />
                        LIFE LONG LEARNER
                    </div>

                    {/* Resume button */}
                    <a style={{ border: "1px solid white" }} className="p-3 rounded-sm w-44 text-center text-lg"
                    target="_blank" href="../assets/files/ravenwei_resume.pdf">
                        <i className="fa-regular fa-file mr-2"></i> Resume
                    </a>

                    {/* Welcome paragraph */}
                    <div className="mt-80 text-6xl w-2/3 max-w-screen-xl">
                        Hey! I'm Raven, twenty-one years old front-end developer. I make beautiful websites that will help you achieve your goals. Also, I'm interested in product and branding design. 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
