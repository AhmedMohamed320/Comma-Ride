"use client";
import { Fragment } from "react";
import classes from "./Home.module.css";
import { BsFileEarmarkArrowDownFill } from "react-icons/bs";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Orders from "@/components/mainDashboard/orders/Orders";
import Customers from "@/components/mainDashboard/customers/Customers";
import Suppliers from "@/components/mainDashboard/suppliers/Suppliers";
import Main from "@/components/mainDashboard/main/Main";

export default function Home() {
    const router = useSearchParams();
    const content = router.get("content") || "main";
    return (
        <Fragment>
            <section className={`main ${classes.section}`}>
                {/* <div className={classes.welcome}>
                    <p>
                        انت الان على النظام الداخلي الخاص بشركه{" "}
                        <span>Comma Ride</span>
                    </p>
                </div> */}
                <div className={classes.dashboard}>
                    <div className={` w-fit ${classes.nav}`}>
                        <ul>
                            <li
                                className={
                                    content == "main" ? classes.active : ""
                                }
                            >
                                <Link
                                    href={{
                                        pathname: "/",
                                    }}
                                >
                                    الرئيسيه
                                </Link>
                            </li>
                            <li
                                className={
                                    content == "orders" ? classes.active : ""
                                }
                            >
                                <Link
                                    href={{
                                        pathname: "/",
                                        query: {
                                            content: "orders",
                                        },
                                    }}
                                >
                                    الطلبات
                                </Link>
                            </li>
                            <li
                                className={
                                    content == "customers" ? classes.active : ""
                                }
                            >
                                <Link
                                    href={{
                                        pathname: "/",
                                        query: {
                                            content: "customers",
                                        },
                                    }}
                                >
                                    العملاء
                                </Link>
                            </li>
                            <li
                                className={
                                    content == "suppliers" ? classes.active : ""
                                }
                            >
                                <Link
                                    href={{
                                        pathname: "/",
                                        query: {
                                            content: "suppliers",
                                        },
                                    }}
                                >
                                    الموردين
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <main className="py-4">
                        {content == "main" && <Main />}
                        {content == "orders" && <Orders />}
                        {content == "customers" && <Customers />}
                        {content == "suppliers" && <Suppliers />}
                    </main>
                </div>
            </section>
        </Fragment>
    );
}
