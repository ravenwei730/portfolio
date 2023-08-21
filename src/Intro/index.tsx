import React from "react";

const Intro = () => {

    const introduction1 = 
    "Hello, I'm Raven, a data/business analyst with expertise in ecological urban project planning. My objective is to apply strategic approaches to link data insights with practical real-world applications. My aspiration and drive is to innovate and enhance processes to foster sustainability and drive greater efficiencies."


    const introduction2 = 
    "When I'm not coding, I enjoy exploring national parks, hiking, surfing, cycling, and all kinds of outdoor activities."

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