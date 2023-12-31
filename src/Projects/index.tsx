import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import project1photo from "../assets/images/population_density.jpg";
import project2photo from "../assets/images/fandango1.jpg";
import project3photo from "../assets/images/datascience2.jpg";
import project4photo from "../assets/images/bestmarket1.jpg";
import placeholder from "../assets/images/project1.png";

const wrapperVariants = {
  initial: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', 
    transition: { duration: .4 }
  },
  animate: {
     clipPath: 'polygon(-20px -20px, calc(100% + 20px) -20px, calc(100% + 20px) calc(100% + 20px), -20px calc(100% + 20px))',
    transition: { duration: .4, staggerChildren: .1 }
  },
  exit: {
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    transition: { duration: .4 }
  }
}

const squareVariants = {
  initial: {
    opacity: .6,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  }
}

type Project = {
  name: string;
  title: string;
  img: string;
  desc: string;
  live: string;
  github: string;
};

const Projects = ({mobileView}: {mobileView: boolean}) => {
    const projects = [
        {
            name: "one",
            title: "Market Insights: Population Analysis",
            img: project1photo,
            desc: "This project utilized SQL to analyze global territories using demographic indicators such as population, mortality, and fertility.",
            live: "https://nbviewer.org/github/ravenwei730/WorldPopulation/blob/main/CIA%20Factbook%20Data%20Analysis.ipynb",
            github: "https://github.com/ravenwei730/WorldPopulation"
        },
        {
            name: "two",
            title: "Investigating Fandango Movie Ratings",
            img: project2photo,
            desc: "This project examines Fandango's movie ratings data to determine whether any alterations have been made to improve the fairness of ratings within the Fandango's rating system.",
            live: "https://nbviewer.org/github/ravenwei730/FandangoRatings/blob/main/Investigating%20Fandango%20Movie%20Ratings.ipynb",
            github: "https://github.com/ravenwei730/FandangoRatings"
        },
        {
            name: "three",
            title: "Trending Data Science Topics",
            img: project3photo,
            desc: "This project analyzes the Data Science Stack Exchange to identify the types of content that a data science education company should create, based on user activities.",
            live: "https://nbviewer.org/github/ravenwei730/PopularDataScienceQuestions/blob/main/Popular%20Data%20Science%20Questions.ipynb",
            github: "https://github.com/ravenwei730/PopularDataScienceQuestions"
        },
        {
            name: "four",
            title: "Comparing Advertising Markets",
            img: project4photo,
            desc: "In this project analyzes survey data from people new to coding. The goal is to figure out the two best places to advertise for an online learning company that teaches programming, with a focus on web development, data science, and game development courses. We dug into the data to find the most promising markets for promoting these courses effectively.",
            live: "https://nbviewer.org/github/ravenwei730/BestMarketAdvertise/blob/main/Finding%20the%20Best%20Markets%20to%20Advertise%20In.ipynb",
            github: "https://github.com/ravenwei730/BestMarketAdvertise/tree/main"
        }
        ];
        const [selectedProject, setSelectedProject] = useState<Project | null>(null);
        const scrollableDivRef = useRef<HTMLDivElement | null>(null); 
        const [showPrevBtn, setShowPrevBtn] = useState(false);
        const [showNextBtn, setShowNextBtn] = useState(false);
        const presetScroll = 467;
      
        useEffect(() => {
          const divRef = scrollableDivRef.current;
          if (divRef !== null) {
            const handleScroll = () => {
              const { scrollWidth, scrollLeft, clientWidth } = divRef;
              setShowPrevBtn(scrollLeft > 0);
              setShowNextBtn(scrollLeft + clientWidth < scrollWidth);
            };
            divRef.addEventListener('scroll', handleScroll);
            handleScroll();
            return () => divRef.removeEventListener('scroll', handleScroll);
          }
        }, []);
      
        const scrollNext = () => {
          const divRef = scrollableDivRef.current;
          if (divRef && divRef.scrollLeft !== undefined) {
            const { scrollLeft } = divRef;
            const scrollAmount = presetScroll; 
            divRef.scrollTo({
              left: scrollLeft + scrollAmount,
              behavior: 'smooth'
            });
          }
          setShowPrevBtn(true);
          if (divRef !== null) {
            const handleScroll = () => {
              const { scrollWidth, scrollLeft, clientWidth } = divRef;
              setShowPrevBtn(scrollLeft > 0);
              setShowNextBtn(scrollLeft + clientWidth < scrollWidth);
            };
            divRef.addEventListener('scroll', handleScroll);
            handleScroll();
            return () => divRef.removeEventListener('scroll', handleScroll);
          }
        };
        
      
        const scrollPrev = () => {
          const divRef = scrollableDivRef.current;
          if (divRef && divRef.scrollLeft !== undefined) {
            const { scrollLeft } = divRef;
            const scrollAmount = presetScroll; 
            divRef.scrollTo({
              left: scrollLeft - scrollAmount,
              behavior: 'smooth'
            });
          }
          if (divRef !== null) {
            const handleScroll = () => {
              const { scrollWidth, scrollLeft, clientWidth } = divRef;
              setShowPrevBtn(scrollLeft > 0);
              setShowNextBtn(scrollLeft + clientWidth < scrollWidth);
            };
            divRef.addEventListener('scroll', handleScroll);
            handleScroll();
            return () => divRef.removeEventListener('scroll', handleScroll);
          }
        };

        const handleSelect = (project : Project) => {
          setSelectedProject(project);
            const projectElement = document.getElementById("project");
            setShowPrevBtn(false);
            setShowNextBtn(false);
            if (projectElement) {
              projectElement.scrollIntoView({
                behavior: "smooth", 
              });
            }
        }

        const handleClose = () => {
          setSelectedProject(null);
          if (!mobileView) setShowNextBtn(true);
        }
      
        return (
          <div className={`justify-self-center mt-16 mb-34 cp-transition cp-transition__container relative z-10 sm:mt-10`}>
            {mobileView && (
              <div id='project' className='absolute'
              style={{
                marginTop: `-${projects.length * 304 + 184}px`
              }}
              ></div>  
            )}
            <AnimatePresence mode='wait' initial={false}>
              {selectedProject ? (
                <motion.div 
                  className={`card font-Mont rounded-2xl sm:flex-col`}
                  key="card"
                  variants={wrapperVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                <img className="project-card-img rounded-l-2xl sm:rounded-t-2xl sm:rounded-bl-none sm:w-4/5" src={selectedProject.img} alt="" />
                <div className='w-full px-12 py-6 flex flex-col sm:px-5 sm:py-6 sm:pb-4'>
                  <button className='self-end' onClick={handleClose}>
                    <i className="fas fa-times fa-2x sm:text-base sm:absolute sm:right-10 sm:-mt-2"/>
                  </button>
                  <div className="card__header flex justify-between mb-4">
                    <h2>{selectedProject.title}</h2>
                  </div>
                  <div className="w-full text-xl leading-base sm:text-sm sm:w-full sm:mb-1">
                    {selectedProject.desc}
                  </div>
                  <div className='card-buttons flex justify-between w-full mt-auto'>
                    <button onClick={() => window.open(selectedProject.github, '_blank')} className='mt-2 w-20 h-7 bg-stone-300 text-slate-900 rounded-2xl'>
                      CODE
                    </button>
                    <button onClick={() => window.open(selectedProject.live, '_blank')} className='mt-2 w-20 h-7 bg-blue-700 text-white rounded-2xl'>
                      LIVE
                    </button>
                  </div>
                </div>
                </motion.div>
              ) : (
                <motion.div 
                  className="cp-transition__squares-wrapper flex" 
                  key="squares"
                  variants={wrapperVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  ref={scrollableDivRef}
                  style={{
                    flexDirection: mobileView ? "column" : "row",
                  }}
                >
                  {projects.map((project, i) => (
                    <motion.div 
                      key={i}
                      className={` square square--${project.name} flex flex-col items-center font-Mont relative`}
                      onClick={() => handleSelect(project)}
                      variants={squareVariants}
                      transition={{ duration: 0.2, type: 'spring' }}
                      style={{
                        // minWidth: window.innerWidth > 1510 ? "415px" : "300px"
                        minWidth: window.innerWidth > 1400 ? "415px" : mobileView ? "300" : "360px"
                      }}
                    >
                      <img className='project-thumbnail rounded-t-2xl' src={project.img} alt="" />
                      <div className='p-4 flex flex-col items-center'>
                        <span className='text-l font-semibold'>{project.title}</span>
                      </div>
                    </motion.div>    
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <svg 
              className="scroll-btn prev-btn" 
              onClick={scrollPrev}   
              style={{ 
                display: showPrevBtn ? 'block' : 'none',
                transform: 'scaleX(-1)' 
              }} 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 384 512"
            >
            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
            </svg>
            <svg 
              className="scroll-btn next-btn" 
              onClick={scrollNext} 
              style={{ display: showNextBtn ? 'block' : 'none' }}
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 384 512"
            >
            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
            </svg>
          </div>
        );
      }
      
      export default Projects;