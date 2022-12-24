import { useReducer, useState } from "react";

type nameInfo = {
    name: string
    message?: string
    isValid:boolean
}
type value = {
    count:number
}

const Home = ({ name, message, isValid }: nameInfo) => {
    const initialValue : value = { count: 0 }
    const reducer = (state,action) => {
        
    }
   const [state,dispatch]=useReducer(reducer,initialValue)
    return (
        <div>
            <h2>{}</h2>
            <div className="">
                <button onClick={()=>{}} className="btn">Inc</button>
            </div>
        </div>
    );
};

export default Home;