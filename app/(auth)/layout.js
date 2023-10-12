import "../globals.css"
import localFont from "next/font/local";
const myFont = localFont({
    src: "../../fonts/font.otf",
    display: "swap",
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};


export default function RootLayout({ children }) {
    return (
        <html lang="en" className={myFont.className}>
            <body>
                <div>{children}</div>
            </body>
        </html>
    );
}