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
            <div className='post'>
              <img src={post.cover} alt={post.title} />
              <div key={post.id} className='post-content'>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default App;
