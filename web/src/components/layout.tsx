import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

enum HeaderStates {
  Opaque = "header-opaque",
  Transparent = "header-transparent",
}

const Layout = ({ location, title, children }) => {
  useEffect(() => {
    // const mainElement = window;
    // const header = document.getElementById('top-header');
    // const scrollListener = function () {
    //   console.log('scroll offset', mainElement.scrollY, mainElement.scrollY <= 10);
    //   // TODO use vanilla js here instead of react
    //   if (mainElement.scrollY > 10 && !header.classList.contains(HeaderStates.Transparent)) {
    //     console.log('set header to transparent');
    //     header.classList.add(HeaderStates.Transparent)
    //   } else if (mainElement.scrollY <= 10 && header.classList.contains(HeaderStates.Transparent)) {
    //     console.log('set header to opaque!')
    //     header.classList.remove(HeaderStates.Transparent)
    //   }
    // }
    // console.log("Adding scroll listener!")
    // mainElement.addEventListener('scroll', scrollListener, { passive: true });
    // return () => {
    //   console.log("removing scroll listener!")
    //   mainElement.removeEventListener('scroll', scrollListener);
    // }
  }, []);

  return (
    <div className="flex flex-column w-full">
      <header
        className={`p-14 flex flex-row justify-between items-center`}
        id="top-header"
      >
        <h1 className="text-4xl">
          <Link to="/">{title}</Link>
        </h1>
        <div className={`mr-5 space-x-8 text-2xl`}>
          <Link to="/">Weddings</Link>
          <Link to="/">Portraits</Link>
          <Link to="/">Pricing</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Gallery</Link>
          <Link to="/">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
      </header>
      <main className="w-full mt-32">{children}</main>
      {/* <footer>
        <p className="p-5">Michigan Based Photographer</p>
      </footer> */}
    </div>
  );
};

export default Layout;
