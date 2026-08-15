import React, { useEffect, useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { createNote, updateNote } from '../services/noteService';
import { Note } from '../types/note';

type NoteModalProps = {
  visible: boolean;
  onClose: () => void;
  selectedNote: Note | null;
  onNoteCreated: (note: Note) => void;
  onNoteUpdated: (note: Note) => void;
};

const NoteModal = ({
  visible,
  onClose,
  selectedNote,
  onNoteCreated,
  onNoteUpdated,
}: NoteModalProps) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
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
        title: '',
        content: '',
      });
    }
  }, [selectedNote, visible]);

  const handleSubmit = async () => {
    if (!formData.title.trim() || !formData.content.trim()) {
      return;
    }

    try {
      setSaving(true);

      if (selectedNote) {
        const res = await updateNote(selectedNote._id, formData);

        onNoteUpdated(res.data.data);
      } else {
        const res = await createNote(formData);

        onNoteCreated(res.data.data);
      }

      setFormData({
        title: '',
        content: '',
      });

      onClose();
    } catch (error) {
      console.error('Error saving note:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.heading}>
            {selectedNote ? 'Edit Note' : 'Add Note'}
          </Text>

          <Text style={styles.label}>Title</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter note title..."
            placeholderTextColor="#94a3b8"
            value={formData.title}
            onChangeText={text =>
              setFormData(prev => ({
                ...prev,
                title: text,
              }))
            }
          />

          <Text style={styles.label}>Content</Text>

          <TextInput
            style={[styles.input, styles.contentInput]}
            placeholder="Write your note..."
            placeholderTextColor="#94a3b8"
            value={formData.content}
            onChangeText={text =>
              setFormData(prev => ({
                ...prev,
                content: text,
              }))
            }
            multiline
            textAlignVertical="top"
          />

          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={onClose}
              disabled={saving}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSubmit}
              disabled={saving}
            >
              <Text style={styles.saveText}>
                {saving
                  ? selectedNote
                    ? 'Updating...'
                    : 'Saving...'
                  : selectedNote
                  ? 'Update Note'
                  : 'Save Note'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
  },

  modal: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#0f172a',
  },

  heading: {
    marginBottom: 20,
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  },

  label: {
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#cbd5e1',
  },

  input: {
    height: 48,
    marginBottom: 16,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 8,
    backgroundColor: '#1e293b',
    color: '#fff',
    fontSize: 15,
  },

  contentInput: {
    height: 130,
    paddingTop: 14,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    marginTop: 4,
  },

  cancelButton: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#334155',
  },

  cancelText: {
    fontWeight: '600',
    color: '#fff',
  },

  saveButton: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#2563eb',
  },

  saveText: {
    fontWeight: '600',
    color: '#fff',
  },
});

export default NoteModal;
