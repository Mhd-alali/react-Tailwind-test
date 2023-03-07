import React from "react";
import { Button } from "./button"

import {ReactComponent as Arrow} from '../assets/icons/arrow.svg'

export function Hero() {
  return (
    <div className="container min-h-[70vh] grid sm:grid-cols-2 grid-cols-1 grid-rows-1">
      <div className="w-full max-w-lg flex flex-col justify-center space-y-5">
        <h1 className="text-6xl">Taste the new floavor</h1>
        <p className="font-thin text-md w-4/5">best food for your taste from the world top chefs in the tip of your finger</p>
        <Button type="primary" className="w-fit group hover:text-white">
          <span className="inline-block transition-all ease-in-out duration-300 translate-x-4 group-hover:translate-x-0">Know more</span>
          <span className="inline-block transition-all ease-out duration-300 translate-y-1 -translate-x-full group-hover:delay-200 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
            <Arrow/>
          </span>
        </Button>
      </div>
      <div className="invisible sm:visible h-0 sm:h-auto relative flex items-center justify-center">
        <img src="./img/2.jpg" alt="" className="aspect-[1.2/1] scale-[.85] rounded-2xl object-cover" />
      </div>
    </div>
  );
}
