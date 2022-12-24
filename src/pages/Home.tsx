import { useState } from "react";

type nameInfo = {
    name: string
    message?: string
    isValid:boolean
}

const Home = ({ name, message, isValid }: nameInfo) => {
    const [count,setCount]=useState<number>(0)
    return (
        <div>
            <h2>{ count}</h2>
            <div className="">
                <button onClick={()=>setCount(prev=>prev+1)} className="btn">Inc</button>
            </div>
        </div>
    );
};

export default Home;