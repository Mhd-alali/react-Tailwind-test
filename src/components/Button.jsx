import React from "react";
export function Button({type,children,className}) {
  let classes = "font-bold px-2 py-1 rounded-lg transition border-4 border-gray-800 active:translate-y-[2px] active:brightness-110 "
  let outline = " hover:bg-gray-800 hover:text-gray-100 "
  let primary = " bg-gray-800 text-gray-100 "

  classes += type === "primary" ? primary: outline 

  return <button className={classes + className }>
    {children}
    </button>;
}
  