import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Title from '../common/Title';
import VerticalCard from '../cards/VerticalCard';

const VerticalList = ({ title, data }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Title size={18}>{title}</Title>
      <View style={styles.container}>
        {data.map(item => <VerticalCard item={item} key={item.idpost} onPress={() => navigation.push('PostDetail', { item })} />)}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15
  },
});

export default VerticalList;