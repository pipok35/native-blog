import { View, FlatList, StyleSheet, Text } from 'react-native'
import React from 'react'
import Post from '../components/Post'

export default function PostsList({ data, onOpen }) {

  const renderItem = ({ item }) => <Post post={item} onOpen={onOpen} />

  if(!data.length) {
    return(
      <View style={styles.wrapper}>
        <Text style={styles.noItemsText}>Постов пока нет</Text>
      </View>
    )
  }

  return (
    <View>
      <FlatList data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  noItemsText: {
    fontFamily: 'rb-bold',
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center'
  }
})