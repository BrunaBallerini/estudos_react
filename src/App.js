import './App.css';
import { Component } from 'react';


class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const [posts] = await Promise.all([postsResponse]);
    const postsJson = await posts.json();
    this.setState({ posts: postsJson });
  }


  render() {
    const { posts } = this.state;
    return (
      <section className='container'>
        <div className="posts">
          {posts.map(post => (
            <div key={post.id} className='post'>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default App;
