"use client";
import React from "react";
import { usePathname } from "next/navigation";
import classes from "./Sidebar.module.css";
import { LuBoxes } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaPeopleGroup, FaShop } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { MdDeliveryDining } from "react-icons/md";
import Link from "next/link";

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
                        <li
                            className={
                                pathname == "/Orders" ? classes.active : ""
                            }
                        >
                            <Link href="/Orders">
                                <LuBoxes title="طلبات" />
                            </Link>
                        </li>
                        <li
                            className={
                                pathname == "/Customers" ? classes.active : ""
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
                                pathname == "/Suppliers" ? classes.active : ""
                            }
                        >
                            <Link href="/Suppliers">
                                <FaShop title="الموردين" />
                            </Link>
                        </li>
                        <li
                            className={
                                pathname == "/Delivery_men"
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
                                pathname == "/Customers_service"
                                    ? classes.active
                                    : ""
                            }
                        >
                            <Link href="/Customers_service">
                                <RiCustomerService2Fill title="خدمه العملاء" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={classes.branchLogo}>
                    <ul>
                        <li>
                            <img src="/image/dots.png" alt="dots logo" />
                        </li>
                        <li>
                            <img src="/image/firnas.png" alt="firnas logo" />
                        </li>
                        <li>
                            <img src="/image/cube.png" alt="cube logo" />
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
