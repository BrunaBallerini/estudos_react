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
    postsPerPage: 9,
    searchValue: '',
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
    this.setState({
      posts: postAndImage.slice(page, postsPerPage),
      allPosts: postAndImage
    });
  }

  handleChange = (event) => {
    const { value } = (event.target);
    this.setState({ searchValue: value });
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    return (
      <section className='container'>
        {!!searchValue && <h2>Search Value: {searchValue}</h2>}
        {console.log(searchValue)}
        <input
          onChange={this.handleChange}
          value={searchValue}
          type='search' /><br /><br
        />
        <Post
          post={posts}
        />
        <div class="button-container">
          {!searchValue && <ButtonPage
            text="Load for more posts"
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />}
        </div>
      </section>
    )
  }
}