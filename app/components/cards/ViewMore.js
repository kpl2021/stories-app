import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

const ViewMore = ({ style, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={styles.text}>View More</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#23262a',
    paddingVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16
  }
});

export default ViewMore;