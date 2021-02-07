import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import PostCard from './PostCard';

const api = process.env.GHOST_API_URL;
const key = process.env.GHOST_API_KEY;
const path = 'ghost/api/v3/content/posts/';
// const ghostDemoKey = "22444f78447824223cefc48062";
// const ghostDemoApi = "https://demo.ghost.io";

function Posts() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState();
  const endpoint = `${api}/${path}?key=${key}`;
  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        setPosts(response.posts);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="inner posts">
      <div className="post-feed">
        {!isLoading
          && posts.map((post) => (
            <div key={post.id}><PostCard {...post} /></div>
          ))}
      </div>
    </div>
  );
}

// PostCard.propTypes = {
//   posts: PropTypes.any.isRequired,
// };

export default Posts;
