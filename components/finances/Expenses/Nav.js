import React from "react";
import classes from "./Nav.module.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Nav = () => {
    const router = useSearchParams();
    const content = router.get("content") || "operational";
    return (
        <div className={classes.nav}>
            <ul>
                <li className={content == "operational" ? classes.active : ""}>
                    <Link
                        href={{
                            pathname: "/Finances",
                            query: { content: "operational" },
                        }}
                    >
                        التشغيلية
                    </Link>
                </li>
                <li className={content == "sundry" ? classes.active : ""}>
                    <Link
                        href={{
                            pathname: "/Finances",
                            query: { content: "sundry" },
                        }}
                    >
                        النثريه
                    </Link>
                </li>
                <li className={content == "advertising" ? classes.active : ""}>
                    <Link
                        href={{
                            pathname: "/Finances",
                            query: { content: "advertising" },
                        }}
                    >
                        الدعايه والاعلان
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
