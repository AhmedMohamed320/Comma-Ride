"use client";
import React, { Fragment, useEffect, useState } from "react";
import classes from "../globalsSign.module.css";
import Link from "next/link";
// import axios from "axios";
// import Button2 from "@/components/UI/Button2";
// import Loading from "@/components/loading/Loading";
// import { useRouter } from "next/navigation";
// import { useCookies } from "react-cookie";

const Login = () => {
    // const router = useRouter();
    // const [cookies, setCookies] = useCookies(["token"]);

    // const [form, setForm] = useState({
    //     password: "",
    //     username: "",
    // });

    // const [err, setErr] = useState("");
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     let timeout;
    //     if (err !== "") {
    //         timeout = setTimeout(() => {
    //             setErr("");
    //         }, 4000);
    //     }
    //     return () => clearTimeout(timeout);
    // }, [err]);

    // async function Submit(e) {
    //     e.preventDefault();
    //     setLoading(true);
    //     try {
    //         const res = await axios.post(
    //             `${process.env.NEXT_PUBLIC_BASEURL}/comma/authentication/generate-token`,
    //             form
    //         );
    //         setLoading(false);

    //         setCookies("token", res.data.data.token);
    //         router.push("/");
    //     } catch (err) {
    //         setLoading(false);
    //         setErr("خطاء في التسجيل من ان تكون كلمه السر او الايمل خطاء");
    //     }
    // }

    function handleChangeForm(e) {
        // setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <Fragment>
            {/* {loading && <Loading />} */}

            <div className={classes.up}>
                {/* <div className={classes.circle1}></div>
                <div className={classes.circle2}></div> */}
                {/* {err !== "" && (
                    <div className={classes.error}>
                        <p>{err}</p>
                    </div>
                )} */}
                <form className={classes.login}>
                    <div>
                        <Link href="/">
                            <img
                                src="/image/dots_logo_2.png"
                                alt="/dots logo"
                            />
                        </Link>
                        <div>
                            <p>تسجيل الدخول</p>
                            <p className="text-2xl">
                                تسجيل الدخول برقم الهاتف
                            </p>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="username">رقم الهاتف</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="ادخل  رقم الهاتف"
                            onChange={handleChangeForm}
                            autoComplete="off"
                        />
                        <label htmlFor="password">كلمه السر</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="ادخل كلمه السر"
                            minLength="6"
                            onChange={handleChangeForm}
                        />
                    </div>

                    <div>
                        <button>تسجيل الدخول</button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

export default Login;
