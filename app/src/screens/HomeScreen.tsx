import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import NoteCard from '../components/NoteCard';
import NoteModal from '../components/NoteModal';

import { getNotes } from '../services/noteService';
import { Note } from '../types/note';
import NotesSkeleton from '../components/NotesSkeleton';

const HomeScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

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

  // CREATE
  const handleNoteCreated = (newNote: Note) => {
    setNotes(prev => [newNote, ...prev]);
  };

  // UPDATE
  const handleNoteUpdated = (updatedNote: Note) => {
    setNotes(prev =>
      prev.map(note => (note._id === updatedNote._id ? updatedNote : note)),
    );
  };

  // DELETE
  const handleDeleteNote = (noteId: string) => {
    setNotes(prev => prev.filter(note => note._id !== noteId));
  };

  // EDIT
  const handleEdit = (note: Note) => {
    setSelectedNote(note);
    setIsOpen(true);
  };

  // ADD
  const handleAddNote = () => {
    setSelectedNote(null);
    setIsOpen(true);
  };

  // CLOSE MODAL
  const closeModal = () => {
    setIsOpen(false);
    setSelectedNote(null);
  };

  // SEARCH
  const filteredNotes = notes.filter(
    note =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // SORT
  const sortedNotes = [...filteredNotes].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );

  return (
    <View style={{ flex: 1 }}>
      <Navbar />

      <SearchBar
        onAddNote={handleAddNote}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {loading ? (
        <NotesSkeleton />
      ) : (
        <FlatList
          data={sortedNotes}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <NoteCard
              note={item}
              onEdit={handleEdit}
              onDelete={handleDeleteNote}
            />
          )}
          contentContainerStyle={{
            paddingTop: 8,
            paddingBottom: 50,
          }}
        />
      )}

      <NoteModal
        visible={isOpen}
        onClose={closeModal}
        selectedNote={selectedNote}
        onNoteCreated={handleNoteCreated}
        onNoteUpdated={handleNoteUpdated}
      />
    </View>
  );
};

export default HomeScreen;
