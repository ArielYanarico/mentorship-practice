import React, { forwardRef, useState, useImperativeHandle } from 'react';
import Modal from 'react-modal';

const PostModal = forwardRef((_props, ref) => {
  const [isOpened, setOpened] = useState(false)

  const open = () => { setOpened(true); };
  const close = () => { setOpened(false); };

  useImperativeHandle(ref, () => ({open, close, }));

  return (
    <Modal isOpen={isOpened}>
      <div>Hello I am a modal</div>
    </Modal>
  )
})

PostModal.displayName = 'AuxModal';

export default PostModal;
