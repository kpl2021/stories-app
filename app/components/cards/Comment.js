import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

import Title from '../common/Title';
import CardInfo from '../common/CardInfo';

const Comment = ({ item }) => {
  const { nama, tgl_update, isi } = item;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: 'https://ourstories.my.id/img/icons/user.svg' }} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Title>{nama}</Title>
        <CardInfo>{tgl_update}</CardInfo>
        <Text style={{ paddingTop: 10 }}>{isi}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 6,
    // height: 150,
    paddingVertical: 4
  },
  imageContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center'
  },  
  image: {
    height: 10,
  },
  contentContainer: {
    flex: 0.8,
    paddingHorizontal: 15,
    marginBottom: 10
  }
});

export default Comment;