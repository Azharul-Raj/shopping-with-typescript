import React, { useContext, useReducer, useState } from "react";
import {StyleContext} from '../contexts/StyleProvider'

type nameInfo = {
    name: string
    message?: string
    isValid:boolean
}
type counterState= {
    count:number
}
type updateAction = {
    type: 'INC' | 'DEC'
    payload:number
}
type resetAction = {
    type:'RESET'
}
type counterAction = updateAction | resetAction

const initialValue = { count: 0 }
const reducer = (state:counterState,action:counterAction) => {
    switch (action.type) {
        case 'INC':
            return { count: state.count + action.payload };
        case 'DEC':
            return { count: state.count - action.payload };
        case 'RESET': return initialValue;
        default:
            return state;
    }
    
}
const Home = ({ name, message, isValid }: nameInfo) => {
    const info = useContext(StyleContext)
    console.log(info);
   const [state,dispatch]=useReducer(reducer,initialValue)
    return (
        <div>
            <h2>{state.count}</h2>
            <div className="">
                <button onClick={()=>dispatch({type:'INC', payload:5})} className="btn">Inc by 5</button>
                <button onClick={()=>dispatch({type:'DEC', payload:3})} className="btn">Dec by 3</button>
                <button onClick={()=>dispatch({type:'RESET'})} className="btn">Reset</button>
            </div>
        </div>
    );
};

export default Home;