import React from 'react';
import { useParams } from 'react-router-dom'
import {motion} from 'framer-motion'
import { pageFade } from '../animation';

function Recipe() {
    const { id } = useParams()

    return (
        <motion.div variants={pageFade} initial="from" animate="to" exit="exit" className='bg-white min-h-screen flex flex-col'>
            <div className="min-h-screen flex items-center justify-start ">
                <img src="./img/3.jpg" alt="" className='w-1/2 object-cover'/>
            </div>
        </motion.div>
    );
}

export default Recipe;