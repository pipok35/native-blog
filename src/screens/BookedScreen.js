import React from 'react'
import { useSelector } from 'react-redux'
import PostsList from '../components/PostsList'

export default function BookedScreen({ navigation }) {
  const openPostHandler = (post) => {
    navigation.navigate('Post', {
      postId: post.id,
      date: new Date(post.date).toLocaleDateString(),
    })
  }

  const bookedPosts = useSelector((state) => state.posts.bookedPosts)

  return <PostsList data={bookedPosts} onOpen={openPostHandler} />
}
