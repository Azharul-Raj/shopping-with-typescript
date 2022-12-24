import React from 'react';
type nameInfo = {
    name: string
    message: string
    isValid:boolean
}

const Home = (props:nameInfo) => {
    return (
        <div>
            Hey {props.name} Welcome to TYPESCRIPT!!
            You have a happy {props.message}
            {
                props.isValid?'User is Valid':'Invalid User'
            }
        </div>
    );
};

export default Home;