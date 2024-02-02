import React, { useState } from 'react';
import Modal from 'react-modal';

import Button from 'components/Button';
import Box from 'components/Box';
import NewPost from 'components/NewPost';

import style from './style.scss';

const Sidebar = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const userImage = 'https://www.laprensa.com.ar/multimedios/imgs/123027_620.jpg';
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Box containerClassName="sidebar">
      <div className="sidebar__header">
        <img src={userImage} alt="User Profile" />
        <div className="sidebar__username">
          <div className="nickname">{currentUser.userName}</div>
          <div className="email">{currentUser.userEmail}</div>
        </div>
      </div>
      <div className="sidebar__actions">
        <Button
          text="New Post"
          buttonClassName="newpost-btn"
          type="submit"
          onClick={openModal}
        />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={style}
          className="modal"
        >
          <NewPost />
        </Modal>
      </div>
    </Box>
  );
};

export default Sidebar;
