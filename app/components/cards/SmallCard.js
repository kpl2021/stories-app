import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BlockCard from './BlockCard';
import ViewMore from './ViewMore';

import storiesApi from '../../api/storiesApi';

const {width} = Dimensions.get('window');

const SmallCard = ({ item, onPress }) => {
  const navigation = useNavigation();

  const handleViewMore = async (category) => {
    const result = await storiesApi.getPostsByCategory(category);
    navigation.navigate('PostList', result);
  };

  if (item.type === 'viewMore') {
    return <ViewMore style={styles.viewMore} onPress={() => handleViewMore(item.category)} />;
  }

  return <BlockCard onPress={onPress} item={item} style={styles.container} imageStyle={styles.image} />;
}

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    marginRight: 15,
    height: 225
  },
  image: {
    height: 100
  },
  viewMore: {
    width: width / 2,
    height: 225
  },
});

export default SmallCard;