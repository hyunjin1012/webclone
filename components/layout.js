import React from "react";
import Navbar from "./navbar";


export default function Layout({children}) {
  return (
    <>
      <Navbar />
      <main className="pt-28">{children}</main>
    </>
  )
}