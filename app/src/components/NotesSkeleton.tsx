import React from 'react';
import { StyleSheet, View } from 'react-native';

const NotesSkeleton = () => {
  return (
    <View style={styles.container}>
      {[1, 2, 3].map(item => (
        <View key={item} style={styles.card}>
          {/* Title */}
          <View style={styles.title} />

          {/* Content */}
          <View style={styles.content} />
          <View style={styles.content} />
          <View style={styles.contentShort} />

          {/* Date */}
          <View style={styles.date} />

          {/* Buttons */}
          <View style={styles.buttons}>
            <View style={styles.button} />
            <View style={styles.button} />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },

  card: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#e2e8f0',
  },

  title: {
    width: '65%',
    height: 22,
    borderRadius: 6,
    backgroundColor: '#cbd5e1',
    marginBottom: 16,
  },

  content: {
    width: '100%',
    height: 12,
    borderRadius: 5,
    backgroundColor: '#cbd5e1',
    marginBottom: 8,
  },

  contentShort: {
    width: '75%',
    height: 12,
    borderRadius: 5,
    backgroundColor: '#cbd5e1',
    marginBottom: 18,
  },

  date: {
    width: '35%',
    height: 10,
    borderRadius: 5,
    backgroundColor: '#cbd5e1',
    marginBottom: 16,
  },

  buttons: {
    flexDirection: 'row',
    gap: 10,
  },

  button: {
    width: 70,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#cbd5e1',
  },
});

export default NotesSkeleton;
