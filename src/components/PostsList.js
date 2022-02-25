import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Post from '../components/Post'

export default function PostsList({ data, onOpen }) {
  const renderItem = ({ item }) => <Post post={item} onOpen={onOpen} />
  const status = useSelector((state) => state.posts.status)

  if (!data.length) {
    if (status === 'loading') {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size='large' color='#303f9f' />
        </View>
      )
    }

    return (
      <View style={styles.wrapper}>
        <Text style={styles.noItemsText}>Постов пока нет</Text>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  noItemsText: {
    fontFamily: 'rb-bold',
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
})
