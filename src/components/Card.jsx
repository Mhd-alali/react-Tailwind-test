import React from "react";
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import {transition} from '../animation'

export function Card({ imgSrc, recipe, shef, time }) {

  return (
    <Link to="/23">
      <motion.div className={"bg-white rounded overflow-hidden shadow-lg relative md:hover:-translate-y-[2px] transition"}>
        <motion.img src={imgSrc} alt="" className="w-full sm:aspect-auto object-cover"/>
        <div className="m-4">
          <motion.span className="font-bold">{recipe}</motion.span>
          <span className="block text-gray-500 text-sm">Recipe By {shef}</span>
        </div>
        <div className="bg-secondary-100 text-secondary-200 text-xs font-bold rounded p-1 absolute top-2 left-2">
          <span className="flex items-center gap-1"> <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M15.293,16.707L11,12.414V6h2 v5.586l3.707,3.707L15.293,16.707z" fill="#5B5B5B" />
          </svg>
            <time>{time}</time> mins</span>
        </div>
      </motion.div>
    </Link>
  );
}
