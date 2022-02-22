import { StyleSheet, Text, View, Image, Button, ScrollView, Alert, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleBooked, removePost } from '../store/postsSlice'

export default function PostScreen({ navigation, route }) {
  const dispatch = useDispatch()
  const { postId } = route.params

  const post = useSelector(state => state.posts.allPosts.find(p => p.id === postId))
  const booked = useSelector(state => state.posts.bookedPosts.some(p => p.id === postId))

  const toggleHandler = () => {
    dispatch(toggleBooked({ postId }))
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Пост от ' + route.params.date,
      headerRight: () => (
        <TouchableOpacity onPress={toggleHandler}>
          <MaterialIcons
            name={booked ? 'star' : 'star-outline'}
            size={24}
            color={Platform.OS === 'android' ? '#fff' : '#303f9f'}
          />
        </TouchableOpacity>
      ),
    });
  }, [toggleHandler]);

  const removeHandler = () => {
    Alert.alert(
      "Удаление",
      "Вы уверены, что хотите удалить пост?",
      [
        { text: "Отмена" },
        {
          text: "Да", onPress: () => {
            dispatch(removePost({ postId }))
            navigation.navigate('AllPosts')
          }
        }
      ],
      { cancelable: false }
    );
  }

  if (!post) {
    return null
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: post.img }} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          {post.text}
        </Text>
      </View>
      <Button color={'#eb4034'} title='Удалить' onPress={removeHandler} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  textWrapper: {
    padding: 10
  },
  text: {
    fontFamily: 'rb-regular'
  }
})