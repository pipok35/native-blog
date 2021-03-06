import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import React from 'react'

export default function Post({ post, onOpen }) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
      <View style={styles.post}>
        <ImageBackground style={styles.image} source={{ uri: post.img }}>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>
              {new Date(post.date).toLocaleDateString()}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  textWrapper: {
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    color: '#fff',
    fontFamily: 'rb-regular',
  },
})
