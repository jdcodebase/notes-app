import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type SearchBarProps = {
  onAddNote: () => void;
  searchTerm: string;
  onSearchChange: (text: string) => void;
};

const SearchBar = ({
  onAddNote,
  searchTerm,
  onSearchChange,
}: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search notes..."
        placeholderTextColor="#94a3b8"
        value={searchTerm}
        onChangeText={onSearchChange}
      />

      <TouchableOpacity style={styles.addButton} onPress={onAddNote}>
        <Text style={styles.addButtonText}>+ Add Note</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  input: {
    flex: 1,
    height: 48,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: '#1e293b',
    color: '#fff',
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#334155',
  },

  addButton: {
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2563eb',
  },

  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default SearchBar;
