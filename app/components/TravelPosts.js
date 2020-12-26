import React from 'react';

import HorizontalList from './lists/HorizontalList';

const TravelPosts = ({ data }) => {
  return <HorizontalList title="Travel" data={data} />
}

export default TravelPosts;