import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
    return (
        <section className={classes.section}>
            
            <div className={classes.info}>
                <p>
                    الاسم : <span>محمد على محمد</span> - 2 -
                </p>
                <p>
                    رقم الهاتف : <span>01254987940</span>
                </p>
                <p>
                    الرقم القومي : <span>1485275451654785</span>
                </p>
                <p>
                    بدايه العمل : <span>1/10/2023</span>
                </p>
                <p>
                    فتره العمل اليوميه <span>11:00 ص</span> :{" "}
                    <span>07:00 م</span>
                </p>
                <p>
                    متوسط التقيم الكلي : <span>4/5</span>
                </p>
                <p>عدد الاوردارت الكلي : <span>150</span></p>
            </div>
            <div className={classes.img}>
                <img src="/image/person.jfif" alt="Delivery image" />
            </div>
        </section>
    );
};

export default Profile;
