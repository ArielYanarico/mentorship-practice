import React, { forwardRef, useState, useImperativeHandle } from 'react';
import Modal from 'react-modal';
import Button from '../components/Button';
import { useCurrentPost } from '../contexts/PostContext'

const PostModal = forwardRef((_props, ref) => {
  const [isOpened, setOpened] = useState(false);

  const {currentPost} = useCurrentPost();

  const open = () => { setOpened(true); };
  const close = () => { setOpened(false); };

  useImperativeHandle(ref, () => ({ open, close, }));

  return (
    <Modal isOpen={isOpened} ariaHideApp={false}>
      <div>Hello, {currentPost.text}</div>
      <Button label='Cancel' onClick={close}></Button>
    </Modal>
  )
})

PostModal.displayName = 'AuxModal';

export default PostModal;
