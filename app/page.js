import { Fragment } from "react";
import classes from "./Home.module.css";
import Link from "next/link";
export default function Home() {
    return (
        <Fragment>
            <div className={classes.up}>
                {/* <div className={classes.circle}></div> */}
                <main className={classes.main}>
                    <div className={classes.welcome}>
                        <p>
                            انت الان على النظام الداخلي الخاص بشركه{" "}
                            <span>Dots</span>
                        </p>
                        <p>powered by comma ride</p>
                    </div>
                </main>
                <section className={classes.section}>
                    <p className="p-6 text-4xl">الاقسام المتاحه لك ك مالك</p>
                    <div>
                        <Link href="">
                            <p>احصائيات</p>
                        </Link>
                        <Link href="">
                            <p>التقارير</p>
                        </Link>
                        <Link href="">
                            <p>الموارد البشريه</p>
                        </Link>
                        <Link href="">
                            <p>الطلبات الجاريه</p>
                        </Link>
                        <Link href="/Customers_service">
                            <p>خدمه العملاء</p>
                        </Link>
                        <Link href="">
                            <p>رحله العميل</p>
                        </Link>
                        <Link href="/Delivery_men">
                            <p>الطيارين</p>
                        </Link>
                        <Link href="/Suppliers">
                            <p>الموردين</p>
                        </Link>
                        <Link href="/Customers">
                            <p>العملاء</p>
                        </Link>
                    </div>
                </section>
            </div>
        </Fragment>
    );
}
