"use client";
import { useEffect, useRef } from "react";
import SearchBar from "../searchBar/search-bar";
import SortButton from "../sortButton/sortButton";
import "./styles.css";
const Navbar = () => {
  const navRef = useRef(null);
  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 126) {
        navRef.current.classList.add("active");
      } else {
        navRef.current.classList.remove("active");
      }
    };

    //window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="flex absolute justify-center w-full transition ease-in-out -bottom-6 px-6  space-x-2"
    >
      <SortButton />
      <SearchBar />
    </nav>
  );
};

export default Navbar;
