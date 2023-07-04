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
                <div className="nav-bar h-32 flex items-center justify-between" >
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
                <div className="flex flex-col justify-center items-center space-y-12">
                    {/* Portrait photo */}
                        <img className="w-48 h-auto  block rounded-full aspect-square mt-48" src={profile} alt=""/>

                        <div className="text-7xl text-center">
                            DATA SCIENTIST. NATURE LOVER. <br />
                            LIFE LONG LEARNER
                        </div>

                </div>
            </div>
        </div>
    );
}

export default App;
