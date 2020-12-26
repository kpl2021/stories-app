import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import FlatCard from '../cards/FlatCard';

// const { height } = Dimensions.get('window');

const SearchModel = ({ visible, data, notFound }) => {
  const navigation = useNavigation();

  if (!visible) return null;
  if (visible && data.length === 0 && !notFound) return null;
  if (notFound) return <Text style={[styles.container, { textAlign: 'center', paddingVertical: 30 }]}>{notFound}</Text>

  return (
    <View style={styles.container}>
      {data.map(item => (
        <FlatCard 
          item={item} 
          onPress={() => navigation.navigate('PostDetail', { item })} 
          key={item.idpost} 
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {}
});

export default SearchModel;