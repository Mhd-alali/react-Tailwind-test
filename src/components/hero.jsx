import React from "react";
import { Button } from "./button"
import { motion } from "framer-motion";

const slashMotion = {
  rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    opacity: 1,
    width:'auto',
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn"
    }
  }
};

export function Hero({ }) {
  return (
    <div className="container min-h-[70vh] grid sm:grid-cols-2 ">
      <div className="w-full max-w-lg flex flex-col justify-center space-y-5">
        <h1 className="text-6xl">Taste the new floavor</h1>
        <p className="font-thin text-md w-4/5">best food for your taste from the world top chefs in the tip of your finger</p>
        <Button type="primary" className="w-fit group">
          <span className="inline-block transition-all duration-300 translate-x-4 group-hover:translate-x-0">Know more</span>
          <span className="inline-block transition-all duration-300 -translate-x-full group-hover:delay-200 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">test</span>
        </Button>
      </div>
      <div className="w-full invisible sm:visible relative flex items-center">
        <motion.img src="./img/2.jpg" alt="" className="aspect-square row-span-4 rounded-2xl object-cover" />
      </div>
    </div>
  );
}
