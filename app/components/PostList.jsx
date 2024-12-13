import Post from '../components/Post'
 
const PostList = ({ posts }) => {
  return (
    <div className=' '>
      {
        posts?.map(post => (
          <Post key={post.id} post={post} />
        )) 
      }
    </div>
  )
}

export default PostList