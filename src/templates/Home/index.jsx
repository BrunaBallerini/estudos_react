import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load-post'
import { Post } from '../../components/Post';

export class Home extends Component {
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