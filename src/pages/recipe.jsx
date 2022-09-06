import React from 'react';
import { useParams } from 'react-router-dom'
import {motion} from 'framer-motion'
import { pageAnimation } from '../animation';

function Recipe() {
    const { id } = useParams()

    return (
        <motion.div variants={pageAnimation} initial="from" animate="to" exit="exit" className='bg-white min-h-screen flex flex-col'>
            <div className="h-[50vh] flex items-center justify-center ">
                <h1 >5 Bean Chilli Stew</h1>
            </div>
            <img src="./img/3.jpg" alt="" className='h-[30vh] w-full object-cover'/>
        </motion.div>
    );
}

export default Recipe;