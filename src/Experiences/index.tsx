import React, { useEffect, useState } from "react";
import "./Experiences.css"; 
import ExperienceItem from "../ExperienceItem";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Experiences = () => {

    const ref = useRef<HTMLDivElement>(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [mobileView, setMobileView ] = useState((windowWidth < 541));

    // handle screen size changing 
    useEffect(() => {
        const handleResize = () => {
            const newWindowWidth = window.innerWidth;
            setWindowWidth(newWindowWidth);
            setMobileView(newWindowWidth < 541);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: mobileView ? 
        ["-.3 1", "1.1 1"] : 
        ["0 1", "1.85 1"]
    })

    const opacityScale = useTransform(
        scrollYProgress, [0.25, 0.68, 1], [0.1, 0.4, 1]
        )


    const experiences = [
        {
            time: "Dec. 2023 - Present",
            title: "Project Analyst",
            company: "Stellar Services",
            flow: true
        },
        {
            time: "Mar. 2020 - Present",
            title: "Business Dev. Analyst",
            company: "Asian Creative Foundation",
            flow: false
        },
        {
            time: "Jun. 2021 - Jun. 2022",
            title: "Business Analyst",
            company: "Tianfu Greenway",
            flow: true
        },
        {
            time: "Dec. 2019 - Mar. 2020",
            title: "Curator Assistant",
            company: "FLAG Art Foundation",
            flow: false
        }
    ]
    return ( 
        <div className="w-full font-Mont mt-32 text-2xl self-center relative sm:overflow-x-hidden sm:pt-12 sm:mt-16">
            {experiences.map((e, i) =>
                <ExperienceItem
                key={i}  
                time={e.time}
                title={e.title}
                company={e.company}
                flow={e.flow}
                mobileView={mobileView}
                setMobileView={setMobileView}
                windowWidth={windowWidth}
                setWindowWidth={setWindowWidth}
                />
            )}
            
        <motion.div className="timeline-div flex items-center justify-center relative mb-24 sm:-mt-80 sm:h-80"
        ref={ref}
        style={{
            opacity: opacityScale
        }}
        >
            <div className="experience-timeline w-0.5 h-96 absolute rounded-full"></div>

            {/* <motion.div
            className="-mt-60 rounded-full h-2 w-2 absolute bg-white"
            style={{opacity: dotOpacityScale}}
            ></motion.div>
            <motion.div
            className="rounded-full h-2 w-2 absolute bg-white"
            style={{opacity: dotOpacityScale}}
            ></motion.div> */}

            
        </motion.div>
  
        </div>
     );
}
 
export default Experiences;
