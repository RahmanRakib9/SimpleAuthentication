import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <section className="flex justify-items-center">
    <div class="navbar justify-items-center lg:px-28">
      <div class="flex-1">
        <Link to="/feedback" className="font-medium">
          What's My User say
        </Link>
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
          </div>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-1 p-1 shadow bg-base-100 rounded-box w-24"
        >
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </div>
    // </section>
  );
};

export default Navbar;
