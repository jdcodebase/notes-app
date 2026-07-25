import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import NoteCard from "../components/NoteCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white pb-3">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        <SearchBar />
        <NoteCard />
      </main>
    </div>
  );
};

export default Home;
