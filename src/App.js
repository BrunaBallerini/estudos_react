import './App.css';
import { Component } from 'react';
import { loadPosts } from './utils/load-post'
import { Post } from './components/Post';

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const postAndImage = await loadPosts()
    this.setState({ posts: postAndImage });
  }

  render() {
    const { posts } = this.state;
    return (
      <section className='container'>
        <Post
          post={posts}
        />
      </section>
    )
  }
}

export default App;
