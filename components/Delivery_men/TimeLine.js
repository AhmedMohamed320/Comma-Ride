import React from "react";
import classes from "./TimeLine.module.css";
const TimeLine = (props) => {
    return (
        <>
            <div className={classes.section}>
                <div className={classes.time}>{props.time}</div>
                <div className={classes.line}></div>
                <div>
                    <div className={classes.person}>
                        <div>
                            <p>خالد على</p>
                            <p className={classes.unavailable}>داخل الشركه</p>
                        </div>
                        <div>
                            <p>خالد على</p>
                            <p className={classes.available}>داخل الشركه</p>
                        </div>
                        <div>
                            <p>خالد على</p>
                            <p className={classes.unavailable}>داخل الشركه</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TimeLine;
