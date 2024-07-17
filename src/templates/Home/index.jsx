import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load-post'
import { Post } from '../../components/Post';
import { ButtonPage } from '../../components/ButtonPage';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 3,
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postAndImage = await loadPosts()
    const newPage = this.loadMorePosts()
    console.log(`${newPage} componenteDidMounted ${this.loadMorePosts()}`);
    this.setState({
      posts: postAndImage.slice(page, postsPerPage),
      allPosts: postAndImage
    });
  }

  render() {
    const { posts, page, postsPerPage, allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    return (
      <section className='container'>
        <Post
          post={posts}
        />
        <div class="button-container">
          <ButtonPage
            text="Load for more posts"
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />
        </div>
      </section>
    )
  }
}