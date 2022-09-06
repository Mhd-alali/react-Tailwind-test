import React from 'react';
import { transition } from '../animation';
import { Section } from '../components/section';
import {motion} from 'framer-motion'

function Landing({ recipes }) {
    return (
        <motion.main exit={{opacity:0}} transition={transition} className='bg-gray-200 rounded-md flow-root mb-10 relative'>
            <header className='container pt-5 '>
                <h2 className="text-5xl md:text-center font-semibold">Recipes</h2>
                <h3 className="text-xl md:text-center mt-2 text-gray-600 font-semibold">For Nerds</h3>
            </header>
            {['Main Dishes', "Side Dishes", "Dessert"].map((section, index) => <Section recipes={recipes[index]} key={section} section={section} />)}
        </motion.main>
    )
}

export default Landing;