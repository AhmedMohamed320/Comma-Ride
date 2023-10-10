import React, { useEffect, useState } from "react";
import classes from "./Nav.module.css";
import { IoPerson } from "react-icons/io5";
import { BsListNested  } from "react-icons/bs";
import Link from "next/link";

const Nav = (props) => {
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
                </div>
                <div className={`md:flex hidden gap-4 ${classes.btn}`}>
                    <Link
                        href="/"
                        className="flex  items-center gap-3 text-2xl "
                    >
                        <p>احمد محمد</p>
                        <IoPerson className="text-3xl" />
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
