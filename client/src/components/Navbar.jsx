import React from "react";

const Navbar = () => {
  return (
    <header className="shadow-sm shadow-white">
      <div className="max-w-5xl mx-auto px-4 py-4 text-center">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Notes App
        </h1>

        <p className="mt-1 text-slate-400">
          Create, edit and manage your notes
        </p>
      </div>
    </header>
  );
};

export default Navbar;
