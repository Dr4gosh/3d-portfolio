import Link from "next/link";
import React from "react";

import MobileToggle from "./MobileToggle";

const NavBar = () => {
  return (
    <header className="fixed right-0 top-0 z-50 w-full bg-black/90 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto flex items-center justify-between px-5 py-5 sm:px-10">
          <Link
            href={"/"}
            className="text-xl font-bold text-neutral-400 transition-colors hover:text-white"
          >
            {/* Dragos */}
          </Link>
          <MobileToggle />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
