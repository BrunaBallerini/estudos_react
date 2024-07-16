import './App.css';
import { Component } from 'react';
import { PostCard } from './components/PostCard';

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const imageResponse = fetch('https://jsonplaceholder.typicode.com/photos');
    const [posts, image] = await Promise.all([postsResponse, imageResponse]);
    const postsJson = await posts.json();
    const imageJson = await image.json();
    const postAndImage = postsJson.map((post, index) => {
      return { ...post, cover: imageJson[index].url }
    });
    this.setState({ posts: postAndImage });
  }


  render() {
    const { posts } = this.state;
    return (
      <section className='container'>
        <div className="posts">
          {posts.map(post => (
            <PostCard
              post={post}
            />
          ))}
        </div>
      </section>
    )
  }
}

export default App;
