"use client";
import classes from "./page.module.css";
import Link from "next/link";
import Search from "@/components/UI/input/Search";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TimeLine from "@/components/Delivery_men/TimeLine";
import dynamic from "next/dynamic";

const page = () => {
    const DynamicMap = dynamic(() => import("../../../components/map/Map"), {
        ssr: false,
    });
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slides: {
            perView: 8,
            spacing: 0,
        },
        breakpoints: {
            "(max-width: 65rem)": {
                slides: {
                    perView: 6,
                    spacing: 0,
                },
            },
            "(max-width: 45rem)": {
                slides: {
                    perView: 4,
                    spacing: 0,
                },
            },
        },
    });
    return (
        <section className={classes.section}>
            <div className={classes.head}>
                <div>
                    <p className="text-4xl font-semibold ">
                        الطيارين <span className="text-2xl">3</span>
                    </p>
                    <div >
                        <Search placeholder="ادخل رقم او كود الطيار" />
                    </div>
                </div>
                <div>
                    <select name="" id="">
                        <option value="">فلتر حسب عدد الاوردرات </option>
                        <option value="">تصاعديا</option>
                        <option value="">تنازليا</option>
                    </select>
                    <select name="" id="">
                        <option value="">فلتر حسب قيمه التحصيل </option>
                        <option value="">تصاعديا</option>
                        <option value="">تنازليا</option>
                    </select>
                    <select name="" id="">
                        <option value="">فلتر حسب قيمه التحصيل </option>
                        <option value="">تصاعديا</option>
                        <option value="">تنازليا</option>
                    </select>
                    <select name="" id="">
                        <option value="">فلتر حسب التقيم</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                    </select>
                </div>
            </div>
            <div className={classes.table}>
                <table>
                    <tbody>
                        <tr className={classes.head}>
                            <td>الكود</td>
                            <td>الاسم</td>
                            <td>الاوردرات</td>
                            <td>التحصيل</td>
                            <td>الحاله</td>
                        </tr>
                        <tr>
                            <td>124</td>
                            <td className="underline underline-offset-8 cursor-pointer">
                                <Link href="/Delivery_men/Profile">
                                    محمد على محمد
                                </Link>
                            </td>
                            <td>20</td>
                            <td>200 ج.م</td>
                            <td>متاح</td>
                        </tr>
                        <tr>
                            <td>124</td>
                            <td className="underline underline-offset-8 cursor-pointer">
                                <Link href="/Delivery_men/Profile">
                                    محمد على محمد
                                </Link>
                            </td>
                            <td>20</td>
                            <td>200 ج.م</td>
                            <td>متاح</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="text-2xl pt-4 font-semibold text-center">
                مواقع الطيارين
            </p>

            <div className={classes.map}>
                <DynamicMap />
            </div>
            <p className="text-2xl pt-4 font-semibold text-center">
                الطيارين المتاحين
            </p>
            <div ref={sliderRef} className={`keen-slider ${classes.timeLine}`}>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
            </div>
        </section>
    );
};

export default page;
