import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FlatCard from './FlatCard';
import ViewMore from './ViewMore';
import Comment from './Comment';

import storiesApi from '../../api/storiesApi';

const VerticalCard = ({ item, onPress }) => {
  const navigation = useNavigation();

  const handleViewMore = async (category) => {
    const result = (category === 'recent') ? await storiesApi.getAll() : await storiesApi.getPostsByCategory(category);
    navigation.navigate('PostList', result);
  };

  if (item.type === 'viewMore') {
    return <ViewMore onPress={() => handleViewMore(item.category)} />;
  } else if (item.idkomentar) {
    return <Comment item={item} />
  }
 
  return <FlatCard item={item} onPress={onPress} />;
}

const styles = StyleSheet.create({
  container: {}
});

export default VerticalCard;