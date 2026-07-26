import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import NoteCard from "../components/NoteCard";
import NoteModal from "../components/NoteModal";
import { getNotes } from "../services/noteService";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const res = await getNotes();
      setNotes(res.data?.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleNoteCreated = (newNote) => {
    setNotes((prev) => [newNote, ...prev]);
  };

  const handleDeleteNote = (noteId) => {
    setNotes((prev) => prev.filter((note) => note._id !== noteId));
  };

  const handleEdit = (note) => {
    setSelectedNote(note);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedNote(null);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const sortedNotes = [...filteredNotes].sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
  );

  if (loading) {
    return <p>Loading notes...</p>;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white pb-3">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        <SearchBar
          openModal={() => {
            setSelectedNote(null);
            setIsOpen(true);
          }}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <NoteCard
          notes={sortedNotes}
          onEdit={handleEdit}
          onDelete={handleDeleteNote}
        />

        {isOpen && (
          <NoteModal
            closeModal={() => setIsOpen(false)}
            onNoteCreated={handleNoteCreated}
            selectedNote={selectedNote}
            fetchNotes={fetchNotes}
          />
        )}
      </main>
    </div>
  );
};

export default Home;
