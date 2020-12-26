import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Close = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <AntDesign style={styles.icon} name="close" size={17} color="white" onPress={onPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    marginVertical: 20
  },
  icon: {
    borderRadius: 50, 
    backgroundColor: 'rgba(20, 25, 35, 0.7)',
    padding: 10,
  }
});

export default Close;