import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Title from '../common/Title';
import SmallCard from '../cards/SmallCard';

const HorizontalList = ({ title, data }) => {
  const navigation = useNavigation();

  return (
    <>
      <Title size={18}>{title}</Title>
      <View style={styles.listStyle}>
        <FlatList 
          data={data} 
          keyExtractor={item => item.idpost} 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          renderItem={({ item }) => <SmallCard onPress={() => navigation.push('PostDetail', { item })} item={item} />} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  listStyle: {
    marginVertical: 15
  }
});

export default HorizontalList;