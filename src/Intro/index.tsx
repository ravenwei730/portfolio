import React from "react";

const Intro = () => {

    const introduction1 = 
    "I'm a Business Analayst at Stellar and a former Data Instructor and Account Executive. My software development journey began when I took a decisive step and joiLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."


    const introduction2 = 
    "When I'm not coding, I enjoy exploring hobby 1, hobby 2, hobby 3, more..."
    

    return ( 
        <div className="self-center mt-24 w-1/2 text-xl text-center font-Mont sm:w-3/4 sm:mt-10 sm:text-base">
            {introduction1}
            <br/>
            <br/>
            {introduction2}
        </div>
     );
}
 
export default Intro;