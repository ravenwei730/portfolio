import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import project1photo from "../assets/images/project1.png";
import project2photo from "../assets/images/project2.png";
import project3photo from "../assets/images/project3.png";


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

const Projects = () => {
    const projects = [
        {
            name: "one",
            title: "Project 1",
            img: project1photo,
            desc: "Description for project 1",
            live: "https://github.com/ravenwei730",
            github: "https://github.com/ravenwei730"
        },
        {
            name: "two",
            title: "Project 2",
            img: project2photo,
            desc: "Description for project 2",
            live: "https://github.com/ravenwei730",
            github: "https://github.com/ravenwei730"
        },
        {
            name: "three",
            title: "Project 3",
            img: project3photo,
            desc: "Description for project 3",
            live: "https://github.com/ravenwei730",
            github: "https://github.com/ravenwei730"
        },
        {
            name: "three",
            title: "Project 3",
            img: project3photo,
            desc: "Description for project 3",
            live: "https://github.com/ravenwei730",
            github: "https://github.com/ravenwei730"
        }
        ];
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleSelect = (project : Project) => {
      setSelectedProject(project);


        const projectElement = document.getElementById("project");
  
        if (projectElement) {
          projectElement.scrollIntoView({
            behavior: "smooth", 
          });
        }
      
    }

    const renderSquares = () => {

    return projects.map((project, i) => (
    <motion.div 
        key={i}
        className={`square square--${project.name} flex flex-col items-center font-Mont relative`} 
        onClick={() => handleSelect(project)}
        variants={squareVariants}
        transition={{ duration: .2, type: 'spring' }}
    >
        <img className='rounded-t-2xl' src={project.img} alt="" />
        <div className='p-4 flex flex-col items-center'>
            <span className='text-l font-semibold'>{project.title}</span>
        </div>

    </motion.div>    
    ));
  }
  return (
    <div className={`justify-self-center mt-16 mb-34 cp-transition cp-transition__container relative z-10 sm:mt-10`}>
      {window.innerWidth < 541 && (
        <div id='project' className='absolute'
        style={{
          marginTop: `-${projects.length * 304 + 384}px`
        }}
        ></div>  
      )}
      <AnimatePresence mode='wait' initial={false}>
        {selectedProject 
          ? (
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
                <button className='self-end' onClick={() => setSelectedProject(null)}>
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
          )
          : (
            <motion.div 
              className="cp-transition__squares-wrapper flex justify-center items-center sm:flex-col"
              key="squares"
              variants={wrapperVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {renderSquares()}
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  )
}

 
export default Projects;

