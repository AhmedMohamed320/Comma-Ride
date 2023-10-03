import { Fragment } from "react";
import classes from "./Home.module.css";
import Link from "next/link";
export default function Home() {
    return (
        <Fragment>
            <div className={classes.up}>
                <main className={`m-4 ${classes.main}`}>
                    <div className={`mainContainer ${classes.nav}`}>
                        <div className={classes.logo}>
                            <img src="/image/dots_logo.png" alt="" />
                        </div>
                        <div className={classes.account}>
                            <Link href="">اهلا احمد محمد</Link>
                            <Link href="">تسجيل الخروج</Link>
                        </div>
                    </div>
                    <div className={classes.welcome}>
                        <p>
                            انت الان على النظام الداخلي الخاص بشركه{" "}
                            <span>Dots</span>
                        </p>
                        <p>powered by comma ride</p>
                    </div>
                </main>
                <section className= {classes.section}>
                    <p className="p-6 text-4xl">الاقسام المتاحه لك ك مالك</p>
                    <div >
                        <Link href="">
                            <p>احصائيات</p>
                        </Link>
                        <Link href="">
                            <p>تقارير</p>
                        </Link>
                        <Link href="">
                            <p>رحله العميل</p>
                        </Link>
                        <Link href="">
                            <p>طيارين</p>
                        </Link>
                        <Link href="">
                            <p>موردين</p>
                        </Link>
                        <Link href="">
                            <p>خدمه العملاء</p>
                        </Link>
                    </div>
                </section>
            </div>
        </Fragment>
    );
}
