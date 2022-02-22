import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadPosts } from '../store/postsSlice'
import PostsList from '../components/PostsList'

export default function MainScreen({ navigation }) {
  const openPostHandler = (post) => {
    navigation.navigate('Post',
      {
        postId: post.id,
        date: new Date(post.date).toLocaleDateString(),
      }
    )
  }

  const dispatch = useDispatch()
  const allPosts = useSelector(state => state.posts.allPosts)

  useEffect(() => {
    dispatch(loadPosts())
  }, [])

  return <PostsList data={allPosts} onOpen={openPostHandler}/>

}