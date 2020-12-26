import React from 'react';

import VerticalList from './lists/VerticalList';

const RecentPosts = ({ data }) => {
  return <VerticalList title="Recent Posts" data={data} />
}

export default RecentPosts;