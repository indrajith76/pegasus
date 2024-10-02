import localFont from "next/font/local";
import "./globals.css";

 

export const metadata = {
  title: "pegasus",
  description: "Generated by pegasus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="background-screen pt-6" 
      >
        {children}
      </body>
    </html>
  );
}
