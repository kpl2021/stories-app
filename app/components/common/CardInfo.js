import React from 'react';
import { Text } from 'react-native';

const CardInfo = ({ children, numberOfLines = 2, size = 15 }) => {
  return <Text numberOfLines={numberOfLines} style={{ fontSize: size, color: '#555' }}>{children}</Text>
}

export default CardInfo;