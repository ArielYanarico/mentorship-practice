import React, { forwardRef, useState, useImperativeHandle } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const PostModal = forwardRef((props, ref) => {
  const [isOpened, setOpened] = useState(false)

  const open = () => { setOpened(true); };
  const close = () => { setOpened(false); };

  useImperativeHandle(ref, () => ({ open, close, }));

  console.log('PROPS, ', props)

  return (
    <Modal isOpen={isOpened} ariaHideApp={false}>
      <div>Hello, {props.currentPost.text}</div>
    </Modal>
  )
})

PostModal.propTypes = {
  currentPost: PropTypes.object,
}

PostModal.displayName = 'AuxModal';

export default PostModal;
