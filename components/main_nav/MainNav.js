"use client";
import Nav from "./nav/Nav";
import Aside from "./aside/Aside";
import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";

const MainNav = () => {
    const [showAside, setShowAside] = useState(false);
    const funHideAside = () => {
        setShowAside(false);
    };

    const funShowAside = () => {
        setShowAside(true);
    };

    return (
        <>
            <div className="md:hidden block">
                <Nav onShowAside={funShowAside} />
            </div>

            {showAside && <Aside onHideAside={funHideAside} />}
            <div className="md:block hidden ">

            <Sidebar />
            </div>
        </>
    );
};

export default MainNav;
