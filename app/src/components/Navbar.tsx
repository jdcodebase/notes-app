import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.logo}>Notes App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#1e293b',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  logo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff',
  },
});

export default Navbar;
