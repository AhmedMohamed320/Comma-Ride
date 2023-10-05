import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
    return (
        <section className={classes.section}>
            <div className={classes.head}>
                <div className={classes.info}>
                    <div>
                        <p>التقيم : </p>
                        <ul className="flex gap-1">
                            <li>
                                <img src="/image/star.png" alt="star" />
                            </li>
                            <li>
                                <img src="/image/star.png" alt="star" />
                            </li>
                            <li>
                                <img src="/image/star.png" alt="star" />
                            </li>
                            <li>
                                <img src="/image/star.png" alt="star" />
                            </li>
                            <li>
                                <img src="/image/star.png" alt="star" />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            عدد الاوردات : <span>150</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            يعمل بنسبه : <span>50%</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            يعمل بثابت : <span>1500 ج.م</span>
                        </p>
                    </div>
                </div>
                <div className={classes.img}>
                    <img src="/image/person.jfif" alt="Delivery image" />
                </div>
            </div>
            <div className={classes.info}>
                <table>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>الاسم</td>
                            <td>محمد على محمد</td>
                        </tr>
                        <tr>
                            <td>رقم الهاتف </td>
                            <td>01254987940</td>
                        </tr>
                        <tr>
                            <td> الرقم القومي </td>
                            <td>54126545555555</td>
                        </tr>
                        <tr>
                            <td>بدايه العمل </td>
                            <td>1/10/2023</td>
                        </tr>
                        <tr>
                            <td>فتره العمل  </td>
                            <td>11 ص : 7م</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Profile;
