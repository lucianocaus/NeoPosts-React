import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { createPost } from 'api/post.service';

import Input from 'components/Input';
import Button from 'components/Button';
import Box from 'components/Box';
import TextArea from 'components/TextArea';

const NewPost = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmitHandler = ({
    title,
    body,
  }) => {
    createPost(title, body)
      .then(() => {
        navigate(0);
      }).catch((error) => {
        if (error?.status === 500) {
          toast.error('Please try again later jeje');
        } else {
          error.data.errors.full_messages.forEach((message) => {
            toast.error(message);
          });
        }
      });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Input
          placeholder="Title"
          id="title"
          type="text"
          {...register('title', { required: true })}
        />
        <TextArea
          placeholder="This is the body of your post."
          id="body"
          type="text"
          {...register('body', { required: true })}
        />
        <div className="submit-btn">
          <Button
            text="Post"
            type="submit"
          />
        </div>
      </form>
    </Box>
  );
};

export default NewPost;
