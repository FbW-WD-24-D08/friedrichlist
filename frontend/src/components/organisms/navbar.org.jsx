import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <SignedIn>
                  <Link className="btn btn-ghost" to="/dashboard">
                    Dashboard
                  </Link>
                </SignedIn>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <Icon icon={"fluent-color:notebook-16"} className="text-3xl" />
            <Link to={"/"} className="btn btn-ghost text-xl">
              friedrichList
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <SignedIn>
                <Link className="btn btn-ghost" to="/dashboard">
                  Dashboard
                </Link>
              </SignedIn>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link to="/signin" className="btn  btn-ghost">
              Sign In
            </Link>
          </SignedOut>
        </div>
      </div>
    </>
  );
}
