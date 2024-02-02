import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <>
      <header className="xl:min-h-screen flex flex-col">
        <Navbar />
        <main className="flex min-h-screen bg_header"></main>
      </header>
    </>
  );
};

export default Header;
