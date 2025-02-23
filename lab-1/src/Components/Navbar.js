"use client";
import Link from "next/link";
// import "../app/globals.css";

import { usePathname } from "next/navigation";

export default function NavBar() {
  const currentPath = usePathname();

  return (
    <nav className=" w-[40%]">
      <div className=" flex justify-between p-2">
        <h1 className="text-xl font-bold text-gray-700">NAVBAR</h1>
        <Link
          href="/"
          className={
            currentPath == "/"
              ? "border-b border-1  border-gray-700 text-gray-700 text-xl"
              : "text-xl"
          }
        >
          Home
        </Link>
        <Link
          href="/about"
          className={
            currentPath == "/about"
              ? "border-b border-1  border-gray-700 text-gray-700 text-xl "
              : "text-xl"
          }
        >
          About
        </Link>
        <Link
          href="/contact"
          className={
            currentPath == "/contact"
              ? "border-b border-1  border-gray-700 text-gray-700 text-xl "
              : "text-xl"
          }
        >
          Contact Us
        </Link>
        <Link
          href="/users"
          className={
            currentPath == "/users"
              ? "border-b border-1  border-gray-700 text-gray-700 text-xl "
              : "text-xl"
          }
        >
          Users
        </Link>
        <Link
          href="/login"
          className={
            currentPath == "/login"
              ? "border-b border-1  border-gray-700 text-gray-700 text-xl "
              : "text-xl"
          }
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
