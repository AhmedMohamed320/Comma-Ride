"use client";
import React from "react";
import { usePathname } from "next/navigation";
import classes from "./Sidebar.module.css";
import { LuBoxes } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaPeopleGroup, FaShop } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { MdDeliveryDining } from "react-icons/md";
import { HiMiniHome } from "react-icons/hi2";

import Link from "next/link";
import { BsClipboard2DataFill } from "react-icons/bs";

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <>
            <aside
                className={`flex flex-col justify-between items-center h-screen ${classes.aside}`}
            >
                <div className={classes.sidebar}>
                    <Link
                        href="/"
                        className={`center mb-4 mt-4 ${classes.logo}`}
                    >
                        <img src="/image/ride_logo_4.png" title="comma ride" />
                    </Link>

                    <ul>
                        <li className={pathname == "/" ? classes.active : ""}>
                            <Link href="/">
                                <HiMiniHome title="الرئيسيه" />
                            </Link>
                        </li>
                        <li
                            className={
                                pathname.includes("/Orders")
                                    ? classes.active
                                    : ""
                            }
                        >
                            <Link href="/Orders">
                                <LuBoxes title="طلبات" />
                            </Link>
                        </li>
                        <li
                            className={
                                pathname.includes("/Customers")
                                    ? classes.active
                                    : ""
                            }
                        >
                            <Link
                                href={{
                                    pathname: "/Customers",
                                }}
                            >
                                <FaPeopleGroup title="العملاء" />
                            </Link>
                        </li>
                        <li
                            className={
                                pathname.includes("/Suppliers")
                                    ? classes.active
                                    : ""
                            }
                        >
                            <Link href="/Suppliers">
                                <FaShop title="الموردين" />
                            </Link>
                        </li>
                        <li
                            className={
                                pathname.includes("/Delivery_men")
                                    ? classes.active
                                    : ""
                            }
                        >
                            <Link href="/Delivery_men">
                                <MdDeliveryDining title="الطيارين" />
                            </Link>
                        </li>
                        <li
                            className={
                                pathname.includes("/Customer_service")
                                    ? classes.active
                                    : ""
                            }
                        >
                            <Link href="/Customer_service">
                                <RiCustomerService2Fill title="خدمه العملاء" />
                            </Link>
                        </li>
                        <li
                            className={
                                pathname.includes("/Finances")
                                    ? classes.active
                                    : ""
                            }
                        >
                            <Link href="/Finances">
                                <BsClipboard2DataFill title="الماليات" />
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={classes.userInfo}>
                    <p className="text-center font-semibold">احمد محمد </p>
                    <Link
                        href="/sign_in"
                        className="center gap-4 text-3xl cursor-pointer"
                    >
                        <BiLogOut title="تسجيل الخروج" />
                    </Link>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
