import React from 'react';
import { Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

import Title from '../common/Title';
import CardInfo from '../common/CardInfo';

const FlatCard = ({ item, onPress }) => {
  const { file_gambar, judul, nama, tgl_insert } = item;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: `http://ourstories.my.id/img/${file_gambar}` }} style={styles.image} />
        <View style={styles.contentContainer}>
          <Title>{judul}</Title>
          <CardInfo>{nama}</CardInfo>
          <CardInfo>{tgl_insert}</CardInfo>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 15,
    height: 100
  },
  image: {
    flex: 0.3,
    height: '100%'
  },
  contentContainer: {
    flex: 0.7,
    paddingHorizontal: 10,
    marginBottom: 10
  }
});

export default FlatCard;