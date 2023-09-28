import React, { FC, memo, useState } from 'react';
import { Modal } from 'antd';
import './index.less';

interface OpenTaskDetailModalProps extends React.ComponentProps<any> {
  showTaskDetailModal: () => void;
}
const OpenTaskDetailModal: FC<OpenTaskDetailModalProps> = memo((props) => {
  const { children, showTaskDetailModal } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    showTaskDetailModal();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div onClick={showModal}>{children}</div>
      <Modal
        title=""
        width={376}
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false}
        centered
      >
        <div className="open-task-detail">
          <div className="open-task-detail-title">Oops, something happens😮</div>
          <div className="open-task-detail-desc">
            Your task needs your help, please go check the detail.
          </div>
          <div className="open-task-detail-action">
            {/* <div
              className="open-task-detail-action-btn open-task-detail-action-btn-cancel"
              onClick={handleCancel}
            >
              Cancel
            </div> */}
            <div
              className="open-task-detail-action-btn open-task-detail-action-btn-open"
              onClick={handleOk}
            >
              Open detail
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
});

export default OpenTaskDetailModal;
