import React from "react";
import { Header } from "./Header";
import { Button } from "./Button";
export function Nav() {
    let [toogle, setToogle] = React.useState(false);

    let toggleClasses = toogle ? " h-auto visible mt-2 " : " h-0 invisible ";

    return (
        <div className="bg-white">
            <nav className="container items-center flex flex-col md:flex-row md:justify-between py-4 md:gap-2">
                <div>
                    <Header type="h1" className=" text-center md:text-left text-lg font-bold uppercase">Food for ninjas</Header>
                </div>
                <ul className={"items-center flex flex-col md:flex-row gap-4 md:gap-10 md:h-auto md:visible " + toggleClasses}>
                    <NavItem >About</NavItem>
                    <NavItem >Home</NavItem>
                    <NavItem >Contact</NavItem>
                </ul>
                <div className={'flex flex-col md:flex-row items-center gap-5 md:h-auto md:visible ' + toggleClasses}>
                    <Button type="primary">Log in</Button>
                    <Button type="outline">Sign Up</Button>
                </div>
                <button className="visible md:invisible absolute right-10 top-4 px-0 py-0 w-7 h-7" onClick={() => { setToogle(!toogle) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M2 5L2 7L22 7L22 5L2 5 z M 2 11L2 13L22 13L22 11L2 11 z M 2 17L2 19L22 19L22 17L2 17 z" fill="#5B5B5B" /></svg>
                </button>
            </nav>
        </div>
    );
}

function NavItem({ children }) {
    return (
        <li className="font-bold text-lg hover:text-black">
            <a href="/">
                <span>{children}</span>
            </a>
        </li>);
}
