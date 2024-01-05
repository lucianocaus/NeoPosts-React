import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Hearts } from 'react-loader-spinner';

import { getPosts } from 'api/post.service';

import Post from 'components/Post';
import Box from 'components/Box';

import './style.scss';

const Posts = () => {
  const [isFetchingPosts, setIsFetchingPosts] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((response) => {
        setPosts(response.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)));
      })
      .catch(() => {
        toast.error('There was an error. Please try again later.');
      })
      .finally(() => {
        setIsFetchingPosts(false);
      });
  }, []);

  return (
    <div className="posts">
      <Box>
        {posts.map((post) => (
          <Post {...post} />
        ))}
        { isFetchingPosts && (
          <div className="posts__loader">
            <Hearts color="#a88bff" />
          </div>
        ) }
      </Box>
    </div>
  );
};

export default Posts;
