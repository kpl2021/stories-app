import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import SearchModel from './common/SearchModel';
import storiesApi from '../api/storiesApi';

let timeoutId;

const debounce = (func, delay) => {
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const SearchBar = ({ setInputFocused }) => {
  const [keyword, setKeyword] = useState('');
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [notFound, setNotFound] = useState('');

  const handleSearch = async val => {
    const response = await storiesApi.getPostsBySearch(val);

    if (Object.prototype.toString.call(response) === '[object Object]') {
      setData([]);
      setNotFound('');
    } else if (response.length === 0) {
      setData([]);
      setNotFound('Sorry, but nothing matched your search.');
    } else {
      setNotFound('');
      setData(response);
    }

    console.log(response);
    console.log(data);
    console.log(keyword);
  };

  const debounceSearch = debounce(handleSearch, 500);

  const handleInputChange = ({ nativeEvent }) => {
    const { text } = nativeEvent;
    setKeyword(text);
    setVisible(true);
    debounceSearch(keyword);
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search.." 
          value={keyword}
          onChange={handleInputChange}
          onFocus={() => {
            setInputFocused(true);
          }}
          onBlur={() => {
            setInputFocused(false);
            setKeyword('');
            setVisible(false);
            setData([]);
            setNotFound('');
          }}
        />
      </View>
      <SearchModel visible={visible} data={data} notFound={notFound} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#c3c6cb',
    marginTop: 18,
    marginBottom: 15
  },
  searchInput: {
    width: '100%',
    height: '100%',
    paddingLeft: 20,
    fontSize: 16,
  }
});

export default SearchBar;