import React from 'react';
import { StyleSheet, View, StatusBar, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import VerticalList from '../lists/VerticalList';
import Close from '../common/Close';

const PostList = ({ route }) => {
  const navigation = useNavigation();

  const data = route.params;
  const headerName = (data[0].nama_kategori === data[1].nama_kategori) ? data[0].nama_kategori.toUpperCase() : 'Recent Posts';

  console.log(data);
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.categoryTitle}>{headerName}</Text>
      </View>
      <ScrollView contentContainerStyle={{ padding: 15, paddingTop: 0 }}>
        <VerticalList data={data} />
      </ScrollView>
      <Close onPress={() => navigation.popToTop()} />
    </>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#23262a'
  },
  categoryTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#fff'
  },
});

export default PostList;