import React from "react";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";
import {ReactComponent as Timer} from '../assets/icons/timer.svg'

export function Card({ ID = "", imgSrc, recipe,dishTypes, time }) {  

  return (
      <motion.div className={'bg-white rounded overflow-hidden shadow-lg relative md:hover:-translate-y-[2px] transition'}>
        <Link to={`/${ID}`}>
          <img src={imgSrc} alt="" className={"w-full sm:aspect-auto object-cover"}/>
          <div className="m-4">
            <span className="font-bold whitespace-nowrap">{recipe}</span>
            <div className="">
              {dishTypes.map((type)=> <span key={type} className="inline-block text-white text-sm mr-2 bg-secondary-200 px-1 rounded">{type}</span>)}
            </div>
          </div>
          <div className="bg-secondary-100 text-secondary-200 text-xs font-bold rounded p-1 absolute top-2 left-2">
            <span className="flex items-center gap-1">
              <Timer />
              <time className="whitespace-nowrap">{time} mins</time> 
            </span>
          </div>
        </Link>
      </motion.div>
  );
}
