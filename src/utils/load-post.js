
export const loadPosts = async () => {
  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
  const imageResponse = fetch('https://jsonplaceholder.typicode.com/photos');
  const [posts, image] = await Promise.all([postsResponse, imageResponse]);
  const postsJson = await posts.json();
  const imageJson = await image.json();
  const postAndImage = postsJson.map((post, index) => {
    return { ...post, cover: imageJson[index].url }
  });
  return postAndImage
}