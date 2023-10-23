import React, { useEffect, useState } from "react";
import classes from "./Nav.module.css";
import { usePathname } from "next/navigation";
import { BsListNested } from "react-icons/bs";
import Link from "next/link";

const Nav = (props) => {
    const pathname = usePathname();
    // -----------
    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsFixed(scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const navClass = `${classes.section}  ${
        isFixed ? `${classes.onScroll}` : ""
    }`;

    // -----------------

    return (
        <section className={navClass}>
            <div className="mainContainer w-full">
                <Link href="/" className={classes.logo}>
                    <img src="/image/ride_logo_1.png" alt="dots logo" />
                </Link>
                <div className={`md:flex hidden gap-4 ${classes.btn}`}>
                    <Link
                        href="/User_Profile"
                        className="flex  items-center gap-3 text-2xl text-white "
                    >
                        <p>
                            {pathname == "/" && <span>اهلا </span>}
                            احمد محمد
                        </p>
                    </Link>
                </div>
                <div className={`md:hidden`}>
                    <BsListNested
                        className="text-5xl cursor-pointer text-white"
                        onClick={props.onShowAside}
                    />
                </div>
            </div>
        </section>
    );
};

export default Nav;
