import React, { useState } from 'react';

const List = () => {
    
    return (
        <div>
            <h2>TODO LIST</h2>
            <div className="flex justify-center items-center relative">
                <form  action="">
                <input className='p-3 bg-gray-600 text-white focus:border-gray-800 active:border-red-500 rounded-3xl w-11/12' type="text" name="" id="" />
                    <button className='btn rounded-full absolute right-10' type='submit'>Go</button>
                    </form>
            </div>
        </div>
    );
};

export default List;