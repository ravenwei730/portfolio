import React, { useRef, useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";
import "./Skills.css";
import SkillItem from "../SkillItem";
import seaborn from "../assets/images/icons/seaborn.svg";

interface Skill {
    name: string;
    img: string;
    url: string;
}

const skillsData: Skill[] = [
  { name: 'Python', img: 'https://github.com/get-icon/geticon/raw/master/icons/python.svg', url: 'https://www.python.org/' },
  { name: 'pandas', img: 'https://github.com/get-icon/geticon/raw/master/icons/pandas-icon.svg', url: 'https://pandas.pydata.org/' },
  { name: 'NumPy', img: 'https://github.com/get-icon/geticon/raw/master/icons/numpy-icon.svg', url: 'https://numpy.org/' },
  { name: 'Jupyter', img: 'https://github.com/get-icon/geticon/raw/master/icons/jupyter.svg', url: 'https://jupyter.org/' },
  { name: 'Visual Studio Code', img: 'https://github.com/get-icon/geticon/raw/master/icons/visual-studio-code.svg', url: 'https://code.visualstudio.com/' },
  { name: 'Git', img: 'https://github.com/get-icon/geticon/raw/master/icons/git-icon.svg', url: 'https://git-scm.com/' },
  { name: 'Github', img: 'https://github.com/get-icon/geticon/raw/master/icons/github-icon.svg', url: 'https://github.com/' },
  { name: 'MongoDB', img: 'https://github.com/get-icon/geticon/raw/master/icons/mongodb-icon.svg', url: 'https://www.mongodb.com/' },
  { name: 'PostgreSQL', img: 'https://github.com/get-icon/geticon/raw/master/icons/postgresql.svg', url: 'https://www.postgresql.org/' },
  { name: 'SQLite3', img: 'https://github.com/get-icon/geticon/raw/master/icons/sqlite.svg', url: 'https://www.sqlite.org/' },
  { name: 'Excel', img: 'https://github.com/get-icon/geticon/raw/master/icons/microsoft-office-excel.svg', url: 'https://www.microsoft.com/en-us/microsoft-365/excel' },
  { name: 'Seaborn', img: seaborn, url: 'https://seaborn.pydata.org/' }
];

  function Skills() {
    const originOffset = useRef({ top: 0, left: 0 });
    const controls = useAnimation();
    const delayPerPixel = 0.0008;

    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref);
  
    useEffect(() => {
      if (inView) {}
      controls.start("visible");
    }, [controls, inView]);
  
    const itemVariants = {
      hidden: {
        opacity: 0,
        scale: 0.5,
      },
      visible: (delayRef: { current: number }) => ({
        opacity: 1,
        scale: 1, 
        transition: { delay: delayRef.current },
      }),
      hover: {
        scale: 1.1, 
      },
      default: {
        opacity: 1,
        scale: 1, 
      }
    };
  
    return (
      <div className="grid grid-cols-6 gap-16 p-4 w-auto self-center mt-32 sm:gap-6 sm:grid-cols-4 sm:mt-12">
        {skillsData.map((skill, index) => (
          <SkillItem key={skill.name} index={index} skill={skill} originOffset={originOffset} itemVariants={itemVariants} delayPerPixel={delayPerPixel} inView={inView}
          />
        ))}
 
        {/* This Div is used to trigger the skills section animation */}
        <div className="-mt-52 relative -z-10" 
        ref={ref}>
        </div>

      </div>
    );
  }
  
  
  
  export default Skills;
  export type { Skill };