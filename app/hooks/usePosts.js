import { useState, useEffect } from 'react';
import storiesApi from '../api/storiesApi';

const usePosts = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [lifePosts, setLifePosts] = useState([]);
  const [travelPosts, setTravelPosts] = useState([]);
  const [foodPosts, setFoodPosts] = useState([]);
  const [sciTechPosts, setSciTechPosts] = useState([]);

  const filterRecent = (data) => {
    const result = data.splice(0, 3);

    if (result.length) {
      result.push({ type: 'viewMore', category: 'recent', idpost: 'recent' });
    }

    return result;
  };

  const filterByCategory = (data, category) => {
    const result = data.filter(item => item.nama_kategori === category).splice(0, 3);

    if (result.length) {
      result.push({ type: 'viewMore', category: category, idpost: category });
    }

    return result;
  };

  const filterMultiplePosts = async () => {
    const allPosts =  await storiesApi.getAll();

    setRecentPosts(filterRecent(allPosts));
    setLifePosts(filterByCategory(allPosts, 'life'));
    setTravelPosts(filterByCategory(allPosts, 'travel'));
    setFoodPosts(filterByCategory(allPosts, 'food'));
    setSciTechPosts(filterByCategory(allPosts, 'sci & tech'));
  };

  useEffect(() => {
    filterMultiplePosts()
  }, []);

  return [
    recentPosts, 
    lifePosts, 
    travelPosts, 
    foodPosts, 
    sciTechPosts
  ];
};

export default usePosts;