import './App.css';
import { Component } from 'react';


class App extends Component {
  state = {
    counter: 0,
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
  timeoutUpdate = null;

  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'O título 1 mudou';

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 1000);
  }

  render() {
    const { posts, counter } = this.state;
    return (
      <div className="App">
        {counter}
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
