import React from 'react';

function Loading({isLoading}) {
    return ( <>
    <div className={`fixed z-10 bg-white h-screen w-screen flex items-center transition duration-500 delay-500 justify-center ${isLoading || "opacity-0" }`}>
        loading...
    </div>
    </> );
}

export default Loading;