import React from 'react';
import propTypes from 'prop-types';

import './style.scss';

const Post = ({
  title,
  body,
  publishedAt,
  author: { name },
}) => (
  <div className="post">
    <div className="post__header">
      <div className="post__user">
        {`@${name}`}
      </div>
    </div>
    <div className="post__content">
      <div className="post__title">
        {title}
      </div>
      <div className="post__body">
        {body}
      </div>
    </div>
    <div className="post__footer">
      {publishedAt.split('T')[0]}
    </div>
  </div>
);

Post.propTypes = {
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  publishedAt: propTypes.string.isRequired,
  author: propTypes.shape({
    name: propTypes.string.isRequired,
  }).isRequired,
};

export default Post;
