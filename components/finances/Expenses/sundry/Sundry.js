import React from "react";
import classes from "../operational/Operational.module.css";
const Sundry = () => {
    return (
        <section className={`mt-4 ${classes.section}`}>
            <div className={classes.filter}>
                <input type="month" name="" id="" />
                <select name="" id="">
                    <option value="">حدد نوع معين</option>
                    <option value="">ايجار</option>
                    <option value="">كهرباء</option>
                    <option value="">انترنت</option>
                    <option value="">مطبخ</option>
                </select>
            </div>
            <div>
                <table className={classes.table}>
                    <tbody>
                        <tr className={classes.head}>
                            <td>الرقم</td>
                            <td>التوقيت</td>
                            <td>النوع</td>
                            <td>القيمه</td>
                            <td>التفاصيل</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <p>9/10</p>
                                <p className="text-xl">09:30</p>
                            </td>
                            <td>
                                <p>ايجار</p>
                            </td>
                            <td>
                                <p>3000</p>
                            </td>
                            <td>
                                <p> ايجار شهر 9 </p>

                                <a
                                    target="_blank"
                                    href="/image/dummy.jpg"
                                    className="text-xl underline"
                                >
                                    صوره الايصال
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <p>9/10</p>
                                <p className="text-xl">09:30</p>
                            </td>
                            <td>
                                <p>ايجار</p>
                            </td>
                            <td>
                                <p>3000</p>
                            </td>
                            <td>
                                <p> ايجار شهر 9 </p>

                                <a
                                    target="_blank"
                                    href="/image/dummy.jpg"
                                    className="text-xl underline"
                                >
                                    صوره الايصال
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <p>9/10</p>
                                <p className="text-xl">09:30</p>
                            </td>
                            <td>
                                <p>ايجار</p>
                            </td>
                            <td>
                                <p>3000</p>
                            </td>
                            <td>
                                <p> ايجار شهر 9 </p>

                                <a
                                    target="_blank"
                                    href="/image/dummy.jpg"
                                    className="text-xl underline"
                                >
                                    صوره الايصال
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <p>9/10</p>
                                <p className="text-xl">09:30</p>
                            </td>
                            <td>
                                <p>ايجار</p>
                            </td>
                            <td>
                                <p>3000</p>
                            </td>
                            <td>
                                <p> ايجار شهر 9 </p>

                                <a
                                    target="_blank"
                                    href="/image/dummy.jpg"
                                    className="text-xl underline"
                                >
                                    صوره الايصال
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <p>9/10</p>
                                <p className="text-xl">09:30</p>
                            </td>
                            <td>
                                <p>ايجار</p>
                            </td>
                            <td>
                                <p>3000</p>
                            </td>
                            <td>
                                <p> ايجار شهر 9 </p>

                                <a
                                    target="_blank"
                                    href="/image/dummy.jpg"
                                    className="text-xl underline"
                                >
                                    صوره الايصال
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Sundry;
