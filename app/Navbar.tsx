"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 text-white py-3">
      <ul className="flex justify-center gap-x-5">
        <li>
          <Link
            href="/"
            className={`hover:text-sky-300 ${
              pathname === "/" ? "text-sky-300" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={`hover:text-sky-300 ${
              pathname === "/projects" ? "text-sky-300" : ""
            }`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/posts"
            className={`hover:text-sky-300 ${
              pathname === "/posts" ? "text-sky-300" : ""
            }`}
          >
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
