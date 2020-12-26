import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Image, View, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import storiesApi from '../../api/storiesApi';
import CardInfo from '../common/CardInfo';
import VerticalList from '../lists/VerticalList';
import Close from '../common/Close';

const { width, height } = Dimensions.get('window');

const PostDetail = ({ route }) => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  
  const navigation = useNavigation();
  const { idpost: postId } = route.params.item;  

  const fetchData = async (id) => {
    const resultPost = await storiesApi.getPost(id);
    const resultComments = await storiesApi.getComments(id);

    setPost(resultPost);
    setComments(resultComments);
  };

  useEffect(() => {
    fetchData(postId);
  }, []);

  const { file_gambar, judul, isi_post, nama, tgl_insert } = post;
  console.log(post);
  return (
    <>
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{ uri: `http://ourstories.my.id/img/${file_gambar}` }} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{judul}</Text>
          <View style={styles.info}>
            <CardInfo>{nama}</CardInfo>
            <CardInfo>{tgl_insert}</CardInfo>
          </View>
          <Text style={styles.content}>{isi_post}</Text>

          <View style={{ paddingTop: 30 }}>
            <VerticalList title="Comments" data={comments} />
          </View>
        </View>
      </ScrollView>
      <Close onPress={() => navigation.popToTop()} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 35
  },
  image: {
    width: width,
    height: height / 3,
  },
  contentContainer: {
    paddingVertical: 15,
    paddingHorizontal: 18
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    color: '#383a44'
  },
  info: {
    marginVertical: 15
  }
});

export default PostDetail;