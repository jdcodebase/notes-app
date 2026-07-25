import { useEffect, useState } from "react";
import { createNote, updateNote } from "../services/noteService";

const NoteModal = ({ closeModal, onNoteCreated, selectedNote }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (selectedNote) {
      setFormData({
        title: selectedNote.title,
        content: selectedNote.content,
      });
    } else {
      setFormData({
        title: "",
        content: "",
      });
    }
  }, [selectedNote]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    if (!formData.title.trim() || !formData.content.trim()) return;

    try {
      if (selectedNote) {
        await updateNote(selectedNote._id, formData);
      } else {
        const res = await createNote(formData);

        onNoteCreated(res.data.data);
      }

      setFormData({
        title: "",
        content: "",
      });

      closeModal();
    } catch (error) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  const buttonText = selectedNote
    ? saving
      ? "Updating..."
      : "Update Note"
    : saving
      ? "Saving..."
      : "Save Note";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-xl border border-slate-700 bg-slate-800 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-700 px-6 py-4">
          <h2 className="text-2xl font-bold text-white">
            {selectedNote ? "Update Note" : "Create New Note"}
          </h2>

          <button
            onClick={closeModal}
            className="text-2xl text-slate-400 transition-colors hover:text-white"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-5 p-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter note title..."
                className="w-full rounded-lg border bg-slate-900 p-3 text-white outline-none transition focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Content
              </label>

              <textarea
                rows="6"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Write your note..."
                className="w-full resize-none rounded-lg border bg-slate-900 p-3 text-white outline-none transition focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 border-t border-slate-700 px-6 py-4">
            <button
              type="button"
              onClick={closeModal}
              className="rounded-lg border border-slate-600 px-5 py-2 text-white transition hover:bg-slate-700"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteModal;
