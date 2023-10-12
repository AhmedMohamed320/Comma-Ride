"use client"
import React, { useState } from "react";
import classes from "./page.module.css";
import { BiSearchAlt } from "react-icons/bi";
import FormAddNewCustomers from "@/components/UI/Form/FormAddNewCustomers";
import FormCreateOrder from "@/components/UI/Form/FormCreateOrder";
const page = () => {
    const [customerCode, setCustomerCode] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    function sendCustomerCode(){
        setCustomerCode(45)
    }

    function sendCustomerAddress(){
        setCustomerAddress("مستشفى حمدي السيد")
    }
    return (
        <section className="mainContainer p-4">
            <p className="text-4xl py-4 font-semibold">انشاء طلب</p>
            <main className={classes.main}>
                <div className={classes.part1}>
                    <div className={classes.search}>
                        <div className={classes.input}>
                            <input
                                type="search"
                                placeholder="ادخل رقم العميل"
                            />
                            <BiSearchAlt className="text-4xl text-gray-400" />
                        </div>
                        <div className={classes.customer}>
                            <p>
                                الاسم : <span>عمر محمد محمد</span>
                            </p>
                            <div>
                                <p>
                                    الكود : <span>45</span>
                                </p>
                                <button onClick={sendCustomerCode}>تاكيد</button>
                            </div>
                            <div>
                                <ul className="flex flex-col gap-4">
                                    <li>
                                        <p>العناوين : </p>
                                    </li>
                                    <li>
                                        -<p>مستشفى حمدي السيد</p>
                                        <button onClick={sendCustomerAddress}>اختار</button>
                                    </li>
                                    <li>
                                        -<p>مستشفى حمدي السيد</p>
                                        <button>اختار</button>
                                    </li>
                                </ul>
                            </div>
                            <p>
                                عدد الاوردرات : <span>45</span>
                            </p>
                        </div>
                    </div>
                    <div className={classes.newCustomer}>
                        <FormAddNewCustomers />
                    </div>
                </div>
                <div className={classes.part2}>
                    <FormCreateOrder customer_code={customerCode} customer_address={customerAddress}/>
                </div>
            </main>
        </section>
    );
};

export default page;