import { deleteNote } from "../services/noteService";

const NoteCard = ({ notes, onDelete, onEdit }) => {
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this note?",
    );

    if (!confirmed) return;

    try {
      await deleteNote(id);
      onDelete(id);
    } catch (error) {
      console.error(error);
    }
  };

  if (notes.length === 0) {
    return <p className="text-center text-slate-400">No notes found.</p>;
  }

  return (
    <div className="grid gap-6 px-4 py-4 md:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <div
          key={note._id}
          className="flex flex-col justify-between rounded-lg border border-slate-700 bg-slate-800 p-5 shadow-md"
        >
          <div>
            <h2 className="text-xl font-semibold">{note.title}</h2>

            <p className="mt-3 text-slate-300 line-clamp-4 ">{note.content}</p>
          </div>

          <div className="mt-6">
            <hr className="border-slate-700" />

            <p className="mt-3 text-right text-sm text-slate-400">
              Last updated:{" "}
              {new Date(note.updatedAt).toLocaleString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>

            <div className="mt-4 flex justify-between">
              <button
                className="cursor-pointer rounded-md bg-yellow-400 px-4 py-2 font-medium text-black transition-colors duration-200 hover:bg-yellow-500"
                onClick={() => onEdit(note)}
              >
                Edit
              </button>

              <button
                className="cursor-pointer rounded-md bg-red-500 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-red-600"
                onClick={() => handleDelete(note._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteCard;
