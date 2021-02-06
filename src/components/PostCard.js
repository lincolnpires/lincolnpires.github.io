/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

function PostCard({
  published_at, excerpt, feature_image, title, url,
}) {
  return (
    <article className="post-card">
      {feature_image && (
        <a className="post-card-image-link" href={url}>
          <img
            className="post-card-image"
            sizes="(max-width: 768px) 100px, 150px"
            loading="lazy"
            src={feature_image}
            alt={title}
          />
        </a>
      )}
      <div className="post-card-content">
        <a className="post-card-content-link" href={url}>
          <header className="post-card-header">
            <h2 className="post-card-title">{title}</h2>
          </header>
          <section className="post-card-excerpt">
            <p>{excerpt}</p>
          </section>
        </a>
        <footer className="post-card-meta">
          <time dateTime={published_at}>{published_at}</time>
        </footer>
      </div>
    </article>
  );
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  published_at: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  feature_image: PropTypes.string,
};

PostCard.defaultProps = {
  feature_image: null,
};

export default PostCard;
