import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import PostCard from './PostCard';

function Posts() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch('https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062')
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
          && posts.map((post, key) => (
          // eslint-disable-next-line react/no-array-index-key
            <div key={key}><PostCard {...post} /></div>
          ))}
      </div>
    </div>
  );
}

// PostCard.propTypes = {
//   posts: PropTypes.any.isRequired,
// };

export default Posts;
