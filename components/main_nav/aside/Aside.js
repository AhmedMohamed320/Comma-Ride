"use client";
import React from "react";
import classes from "./Aside.module.css";
import { MdDeliveryDining, MdOutlineClose } from "react-icons/md";
import { AiFillShopping } from "react-icons/ai";
import { BsClipboard2DataFill, BsPersonFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
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
                    <Link
                        href="/"
                        className={classes.logo}
                        onClick={props.onHideAside}
                    >
                        <img src="/image/ride_logo_2.png" alt="dots logo" />
                    </Link>
                </div>
                <ul className="flex gap-8 flex-col">
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
                    <li
                        className={
                            pathname == "/Customer_service" && classes.active
                        }
                    >
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/Customer_service",
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
                    <li className={pathname == "/Finances" && classes.active}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/Finances",
                            }}
                            onClick={props.onHideAside}
                        >
                            <BsClipboard2DataFill />
                            الماليات
                        </Link>
                    </li>
                </ul>
                <span className={classes.hr}></span>
                <div className="flex items-center  px-10  gap-4 cursor-pointer font-semibold">
                    <Link href="/sign_in">تسجيل الخروج</Link>
                    <BiLogOut className="text-4xl" />
                </div>
                <div className={classes.branchLogo}>
                    <ul>
                        <li>
                            <img src="/image/firnas-2.png" alt="firnas logo" />
                        </li>
                        <li>
                            <img src="/image/dots-2.png" alt="dots logo" />
                        </li>
                        <li>
                            <img src="/image/cube-2.png" alt="cube logo" />
                        </li>
                    </ul>
                </div>
            </aside>
        </section>
    );
};

export default Aside;
