import React from 'react';
import { StyleSheet, StatusBar, ScrollView } from 'react-native';

const Screen = ({ children, inputFocused }) => {
  const keyboardShouldPersistTaps = inputFocused ? 'always' : 'never';
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={keyboardShouldPersistTaps}>
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
    backgroundColor: '#f6f8fc',
    flex: 1
  },
});

export default Screen;