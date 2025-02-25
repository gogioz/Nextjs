"use client";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" flex justify-center py-4">
      <ul className=" flex justify-between gap-x-4 text-gray-700">
        <FaFacebook size={30} />

        <FaTwitter size={30} />
        <FaLinkedin size={30} />
        <FaGithub size={30} />
      </ul>
    </footer>
  );
}
