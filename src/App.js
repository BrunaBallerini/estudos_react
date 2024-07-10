import './App.css';
import { Component } from 'react';


class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Título 1',
        body: 'Texto do post 1',
      },
      {
        id: 2,
        title: 'Título 2',
        body: 'Texto do post 2',
      },
      {
        id: 2,
        title: 'Título 2',
        body: 'Texto do post 2',
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default App;
