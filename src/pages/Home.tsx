import React from 'react';
type nameInfo = {
    name:string
}

const Home = (props:nameInfo) => {
    console.log(props);
    return (
        <div>
           Hey {props.name} Welcome to TYPESCRIPT!!
        </div>
    );
};

export default Home;