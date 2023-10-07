import React, { useState } from "react";
import classes from "./Orders.module.css";
import { IoMdClose } from "react-icons/io";
import OrderCard from "./OrderCard";
const Orders = () => {
    const [alertData, setAlertData] = useState("");
    const [showAlert,setShowAlert]=useState(false);
    const alertClass = `${classes.pop}  ${
        showAlert ? `${classes.show}` : ""
    }`;
    return (
        <section className={classes.section}>
            <div className={alertClass}>
                <div>
                    <div className={classes.close}>
                        <IoMdClose onClick={()=>{setShowAlert(false)}} />
                    </div>
                    <div>
                        <p className="mb-4 w-4/5 m-auto">{alertData}</p>
                        <button onClick={()=>{setShowAlert(false)}}>تاكيد</button>
                    </div>
                </div>
            </div>
            <div className={classes.head}>
                <p>اوردرات يوم</p>
                <input type="date" />
                <p>العدد : 2</p>
            </div>
            <div className={classes.orders}>
                <OrderCard alertText={setAlertData} showAlertDiv={setShowAlert} />
            </div>
        </section>
    );
};

export default Orders;
