import React from 'react';
import { useParams } from 'react-router-dom'

function Recipe() {
    const { id } = useParams()

    return (
        <div className='bg-white min-h-screen flex flex-col'>
            <div className="h-[50vh] flex items-center justify-center ">
                <h1 >5 Bean Chilli Stew</h1>
            </div>
            <img src="./img/3.jpg" alt="" className='h-[30vh] w-full '/>
        </div>
    );
}

export default Recipe;