"use client";
import { useSearchParams } from "next/navigation";
import Operational from "./operational/Operational";
import Sundry from "./sundry/Sundry";
import Advertising from "./advertising/Advertising";
import Nav from "./Nav";
const Main = () => {
    const router = useSearchParams();
    const content = router.get("content") || "operational";
    return (
        <>
            <p className="text-4xl font-semibold pb-4">المصروفات</p>
            <Nav />
            <div>
                {content == "operational" && <Operational />}
                {content == "sundry" && <Sundry />}
                {content == "advertising" && <Advertising />}
            </div>
        </>
    );
};

export default Main;
