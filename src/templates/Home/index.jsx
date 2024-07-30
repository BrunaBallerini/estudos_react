import './styles.css';
import { useState, useEffect, useCallback } from 'react';
import { loadPosts } from '../../utils/load-post'
import { Post } from '../../components/Post';
import { ButtonPage } from '../../components/ButtonPage';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(9);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue ?
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase()
      );
    })
    : posts;

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  }

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postAndImage = await loadPosts()
    setPosts(postAndImage.slice(page, postsPerPage));
    setAllPosts(postAndImage)
  }, [])

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const handleChange = (event) => {
    const { value } = (event.target);
    setSearchValue(value);
  }

  return (
    <section className='container'>
      <div className='search-container'>
        {!!searchValue && <h2>Search Value: {searchValue}</h2>}
        <input
          className='text-input'
          onChange={handleChange}
          value={searchValue}
          type='search'
          placeholder='Type your search'
        />
      </div>

      {filteredPosts.length === 0
        ? <h1>There no posts related to the search</h1>
        : <Post
          post={filteredPosts}
        />
      }

      <div className="button-container">
        {!searchValue && <ButtonPage
          text="Load for more posts"
          onClick={loadMorePosts}
          disabled={noMorePosts}
        />}
      </div>
    </section>
  )
}