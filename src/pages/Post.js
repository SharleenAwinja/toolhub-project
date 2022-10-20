import React from 'react'

const Post = ({post}) => {
  return (
    <div>
        <h2>{post.toolname} </h2>
        <h2>{post.description} </h2>
        <h2>{post.author} </h2>
    </div>
  )
}

export default Post;