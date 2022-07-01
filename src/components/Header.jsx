import React from "react";

export function Header({children,type,className}) {
  if (type === 'h1') {
    return <h1 className={"text-xl  font-lora " +className}>{children}</h1>;
  }
  if (type === 'h2') {
    return <h2 className={"text-6xl font-lora " +className}>{children}</h2>;
  }
  if (type === 'h3') {
    return <h3 className={"text-2xl font-lora " +className}>{children}</h3>;
  }
  if (type === 'h4') {
    return <h4 className={"text-2xl font-lora " +className}>{children}</h4>;
  }
  if (type === 'h5') {
    return <h5 className={"text-xl  font-lora " +className}>{children}</h5>;
  }
  if (type === 'h6') {
    return <h6 className={"text-xl  font-lora " + className}>{children}</h6>;
  }
}
  