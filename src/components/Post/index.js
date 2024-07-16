import { PostCard } from '../PostCard/index';

export const Post = (props) => {
  const posts = props.post
  return (
    <div className="posts">
      {posts.map(post => (
        <PostCard
          post={post}
        />
      ))}
    </div>
  )
}