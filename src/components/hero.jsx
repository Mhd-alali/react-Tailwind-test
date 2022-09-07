import React from "react";
import { motion } from "framer-motion";

export function Hero({}) {
  return (
    <div className="container min-h-[80vh] grid sm:grid-cols-2 ">
      <div className="w-full ">
        <p>Taste the new flavor</p>
        <h1>Some cool Head</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit illum modi officia soluta repellat. Impedit alias totam asperiores a quibusdam.</p>
      </div>
      <div className="w-full invisible sm:visible relative flex items-center">
        <motion.img src="./img/2.jpg" alt="" className="col-start-2 col-span-10 row-span-4 "/>
      </div>
    </div>
  );
}
