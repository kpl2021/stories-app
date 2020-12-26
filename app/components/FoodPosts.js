import React from 'react';

import HorizontalList from './lists/HorizontalList';

const FoodPosts = ({ data }) => {
  return <HorizontalList title="Food" data={data} />
}

export default FoodPosts;