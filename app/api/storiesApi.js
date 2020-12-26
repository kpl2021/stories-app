import apiClient from './client';

const getAll = async () => {
  try {
    const response = await apiClient.get('/posts');

    if (response.status !== 404) {
      return response.data;
    }
  } catch (error) {
    return [];
    console.log(error.message);
  }
};

const getPost = async (id) => {
  try {
    const response = await apiClient.get(`/posts/${id}`);

    if (response.status !== 404) {
      return response.data;
    }
  } catch (error) {
    return [];
    console.log(error.message);
  }
};

const getComments = async (id) => {
  try {
    const response = await apiClient.get(`/posts/${id}/comments`);

    if (response.status !== 404) {
      return response.data;
    }
  } catch (error) {
    return [];
    console.log(error.message);
  }
};

const getPostsByCategory = async (category) => {
  try {
    const response = await apiClient.get(`/posts/category/${category}`);

    if (response.status !== 404) {
      return response.data;
    }
  } catch (error) {
    return [];
    console.log(error.message);
  }
};

const getPostsBySearch = async (keyword) => {
  if (!keyword) return {};
  
  try {
    const response = await apiClient.get(`/posts/search/${keyword}`);

    if (response.status !== 404) {
      return response.data;
    }
  } catch (error) {
    return [];
    console.log(error.message);
  }
};

export default {
  getAll,
  getPost,
  getComments,
  getPostsByCategory,
  getPostsBySearch,
};