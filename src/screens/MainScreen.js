import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../store/postsSlice'
import PostsList from '../components/PostsList'

export default function MainScreen({ navigation }) {
  const dispatch = useDispatch()

  const openPostHandler = (post) => {
    navigation.navigate('Post', {
      postId: post.id,
      date: new Date(post.date).toLocaleDateString(),
    })
  }

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const allPosts = useSelector((state) => state.posts.allPosts)

  return <PostsList data={allPosts} onOpen={openPostHandler} />
}
