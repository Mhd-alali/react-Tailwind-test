import React from "react";
import {Link} from 'react-router-dom'
export function Nav() {
  let [toogle ,setToogle] = React.useState(false);
  let toggleClasses = toogle?" h-auto visible mt-2 ":" h-0 invisible ";

  return (
    <div className="bg-white">
      <nav className="container items-center flex flex-col md:flex-row md:justify-between py-4 md:gap-2">
        <div>
          <h1 className="text-center md:text-left text-lg font-bold uppercase">Yummy In The Tummy</h1>
        </div>
          <ul className={"items-center flex flex-col md:flex-row gap-4 md:gap-10 md:h-auto md:visible " + toggleClasses}>
            <Link to="/24"><NavItem >About</NavItem></Link>
            <Link to="/"><NavItem >Home</NavItem></Link>
            <Link to="/23"><NavItem >Contact</NavItem></Link>
          </ul>
          <button className="visible md:invisible absolute right-10 top-4 px-0 py-0 w-7 h-7" onClick={()=>{setToogle(!toogle)}}>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" ><path d="M2 5L2 7L22 7L22 5L2 5 z M 2 11L2 13L22 13L22 11L2 11 z M 2 17L2 19L22 19L22 17L2 17 z" fill="#5B5B5B" /></svg>
          </button>
      </nav>
    </div>
  );
}

function NavItem({ children}) {
  return (
  <li className="font-bold text-lg">
      <span>{children}</span>
  </li>);
}
