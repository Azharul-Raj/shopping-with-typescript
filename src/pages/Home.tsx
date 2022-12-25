import React, { useContext, useEffect, useReducer, useState } from "react";
import {StyleContext} from '../contexts/StyleProvider'




const Home = () => {

    // fetch data from rapid api    
    const {theme1}= useContext(StyleContext)
    return (
        <div>
            <h2 className="text-4xl font-bold text-center" style={{color:theme1.secondary}}></h2>
            <div className="">
            </div>
        </div>
    );
};

export default Home;