"use client";
import React from "react";
import classes from "./Aside.module.css";
import { MdDeliveryDining, MdOutlineClose } from "react-icons/md";
import { AiFillShopping, AiOutlineBarChart } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BiLogOut, BiSolidReport } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuBoxes } from "react-icons/lu";

const Aside = (props) => {
    const pathname = usePathname();

    return (
        <section className={classes.section}>
            <aside className={classes.aside}>
                <div className={classes.close} onClick={props.onHideAside}>
                    <MdOutlineClose />
                </div>
                <div className={classes.head}>
                    <Link href="/" className={classes.logo} onClick={props.onHideAside}>
                        <img src="/image/dots_logo_2.png" alt="dots logo" />
                    </Link>
                </div>
                <ul className="flex gap-8 flex-col">
                    <li className={pathname == "/info" && classes.active}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/User_Profile",
                            }}
                            onClick={props.onHideAside}
                        >
                            <BsPersonFill />
                            حسابي
                        </Link>
                    </li>
                    <li
                        className={
                            pathname.includes("/Delivery_men") && classes.active
                        }
                    >
                        <span className={classes.border}></span>
                        <Link href="/Delivery_men" onClick={props.onHideAside}>
                            <MdDeliveryDining />
                            الطيارين
                        </Link>
                    </li>
                    <li className={pathname == "/Suppliers" && classes.active}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/Suppliers",
                            }}
                            onClick={props.onHideAside}
                        >
                            <AiFillShopping />
                            الموردين
                        </Link>
                    </li>
                    <li className={pathname == "/Customers" && classes.active}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/Customers",
                            }}
                            onClick={props.onHideAside}
                        >
                            <FaPeopleGroup />
                            العملاء
                        </Link>
                    </li>
                    <li className={pathname == "/Customers_service" && classes.active}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/Customers_service",
                            }}
                            onClick={props.onHideAside}
                        >
                            <RiCustomerService2Fill />
                            خدمه العملاء
                        </Link>
                    </li>
                    <li className={pathname == "/Orders" && classes.active}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/Orders",
                            }}
                            onClick={props.onHideAside}
                        >
                            <LuBoxes />
                            الطلبات
                        </Link>
                    </li>
                    <li className={pathname == "/Doctory" && classes.active}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/",
                            }}
                            onClick={props.onHideAside}
                        >
                            <BiSolidReport />
                            التقارير
                        </Link>
                    </li>
                    <li className={pathname == "/Doctory" && classes.active}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/",
                            }}
                            onClick={props.onHideAside}
                        >
                            <AiOutlineBarChart />
                            احصائيات
                        </Link>
                    </li>
                </ul>
                <span className={classes.hr}></span>
                <div className="flex items-center  px-10  gap-4 cursor-pointer font-semibold">
                    <Link href="/sign_in">تسجيل الخروج</Link>
                    <BiLogOut className="text-4xl" />
                </div>
            </aside>
        </section>
    );
};

export default Aside;
