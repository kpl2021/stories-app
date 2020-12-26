import React from 'react';
import { Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

import Title from '../common/Title';
import CardInfo from '../common/CardInfo';

const BlockCard = ({ style, imageStyle, item, onPress }) => {
  const { file_gambar, judul, nama, tgl_insert } = item;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Image source={{ uri: `http://ourstories.my.id/img/${file_gambar}` }} style={[styles.image, imageStyle]} />
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
    width: '100%',
    height: 300,
    overflow: 'hidden',
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 200
  },
  contentContainer: {
    padding: 5
  }
});

export default BlockCard;