import React from 'react';
import { pageFade } from '../animation';
import {motion} from 'framer-motion'

function About() {
    return ( 
        <motion.div variants={pageFade} initial="from" animate="to" exit="exit" className='container h-screen'>
            <h1>muhammed alali ¯\_(ツ)_/¯</h1>
        </motion.div>
    );
}

export default About;