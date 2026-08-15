import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Note } from '../types/note';

type NoteCardProps = {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (noteId: string) => void;
};

const NoteCard = ({ note, onEdit, onDelete }: NoteCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{note.title}</Text>

      <Text style={styles.content}>{note.content}</Text>

      <View style={styles.footer}>
        <Text style={styles.date}>
          Updated: {new Date(note.updatedAt).toLocaleDateString()}
        </Text>

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => onEdit(note)}
          >
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => onDelete(note._id)}
          >
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#1e293b',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },

  content: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
    color: '#cbd5e1',
  },

  footer: {
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#334155',
  },

  date: {
    fontSize: 12,
    color: '#94a3b8',
    textAlign: 'right',
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  editButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#facc15',
  },

  editText: {
    fontWeight: '600',
    color: '#000',
  },

  deleteButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#ef4444',
  },

  deleteText: {
    fontWeight: '600',
    color: '#fff',
  },
});

export default NoteCard;
