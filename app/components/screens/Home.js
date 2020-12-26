import React, { useState } from 'react';

import usePosts from '../../hooks/usePosts';

import Screen from '../common/Screen';
import SearchBar from '../SearchBar';
import RecentPosts from '../RecentPosts';
import LifePosts from '../LifePosts';
import TravelPosts from '../TravelPosts';
import FoodPosts from '../FoodPosts';
import SciTechPosts from '../SciTechPosts';

const Home = () => {
  const [inputFocused, setInputFocused] = useState(false);

  const [
    recentPosts, 
    lifePosts, 
    travelPosts, 
    foodPosts, 
    sciTechPosts
  ] = usePosts();

  return (
    <Screen inputFocused={inputFocused}>
      <SearchBar setInputFocused={setInputFocused} />
      <RecentPosts data={recentPosts} />
      <TravelPosts data={travelPosts} />
      <LifePosts data={lifePosts} />
      <FoodPosts data={foodPosts} />
      <SciTechPosts data={sciTechPosts} />
    </Screen>
  )
}

export default Home;