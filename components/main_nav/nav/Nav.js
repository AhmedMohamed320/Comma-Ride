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

    return (
        <section className={navClass}>
            <div className="mainContainer">
                <Link href="/" className={classes.logo}>
                    <img src="/image/dots_logo.png" alt="dots logo" />
                </Link>

                <div
                    className={`hidden md:block font-semibold ${classes.list}`}
                >
                    {pathname != "/" && (
                        <ul className="flex items-center gap-10 text-2xl md">
                            <li>
                                <Link href="/">
                                    <p>الرئيسيه</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Delivery_men">
                                    <p>الطيارين</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Suppliers">
                                    <p>الموردين</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Customers_service">
                                    <p>خدمه العملاء</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <p>التقارير</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <p>احصائيات</p>
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
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
                    <Link
                        href="/sign_in"
                        className="flex  items-center gap-3 text-2xl"
                    >
                        <p> تسجيل الخروج</p>
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
