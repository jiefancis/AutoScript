import { FC, memo, useEffect, useState } from 'react';
import { Modal } from 'antd';
import './index.less';
import cls from 'classnames';
import { getTaskDetail } from '@/services';
import { useInterval, useMemoizedFn } from 'ahooks';
import { INTERVAL_DURATION } from '@/constants';
import { TaskStatusEnum } from '@/enums';

interface TaskDetailModalProps {
  taskId: string;
  open: boolean;
  closeTaskDetailModal: () => void;
}
interface TaskDetailData {
  subTask: Array<{
    category: string;
    details: Array<{
      content: string;
      status: TaskStatusEnum;
    }>;
    status: TaskStatusEnum;
  }>;
}
const OpenTaskDetailModal: FC<TaskDetailModalProps> = memo((props) => {
  const { taskId, open, closeTaskDetailModal } = props;
  const [data, setData] = useState<TaskDetailData>();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  const handleOk = () => {
    // setIsModalOpen(false);
  };

  const handleCancel = () => {
    closeTaskDetailModal();
  };

  const queryTaskDetail = useMemoizedFn(async () => {
    const res = await getTaskDetail({ task_id: taskId });

    const map = new Map();

    res.data?.task?.sub_tasks?.forEach((item: any) => {
      if (map.has(item.sub_task_category)) {
        const task = map.get(item.sub_task_category);
        const details = [
          ...task.details,
          {
            content: item.sub_task_detail,
            status: item.sub_task_status,
          },
        ];
        map.set(item.sub_task_category, {
          ...task,
          details: details,
        });
      } else {
        map.set(item.sub_task_category, {
          category: item.sub_task_category,
          status: item.sub_task_status,
          details: [
            {
              content: item.sub_task_detail,
              status: item.sub_task_status,
            },
          ],
        });
      }
    });

    setData({
      subTask: [...map.values()],
      // res.data?.task?.sub_tasks?.map((item: any) => {
      //   return {
      //     category: item.sub_task_category,
      //     detail: item.sub_task_detail,
      //     status: item.sub_task_status,
      //   };
      // }),
    });
  });

  useInterval(queryTaskDetail, INTERVAL_DURATION);

  useEffect(() => {
    queryTaskDetail();
  }, [taskId, queryTaskDetail]);

  return (
    <>
      <Modal
        title=""
        width={376}
        footer={null}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false}
        centered
      >
        <div className="task-detail">
          <div className="task-detail-title">Task detail</div>
          <div className="task-detail-list-wrap">
            {data?.subTask?.map((item) => (
              <div className="task-detail-list">
                <div className="task-detail-list-title">
                  <img className="task-detail-list-title-triangle" src="/icon/triangle.svg" />
                  <span className="task-detail-list-title-text">{item.category}</span>
                </div>
                {item.details.map((detail) => (
                  <div className="task-detail-list-item">
                    {detail.status === TaskStatusEnum.INIT && (
                      <img
                        className="task-detail-list-item-icon task-detail-list-item-icon-point"
                        src={'/icon/success.svg'}
                      />
                    )}
                    {detail.status === TaskStatusEnum.PROCEEING && (
                      <img
                        className="task-detail-list-item-icon task-detail-list-item-icon-animation"
                        src={'/images/task-running.png'}
                      />
                    )}
                    {(detail.status === TaskStatusEnum.PAUSE ||
                      detail.status === TaskStatusEnum.FAIL) && (
                      <img className="task-detail-list-item-icon" src={'/icon/pause.svg'} />
                    )}
                    {detail.status === TaskStatusEnum.SUCCESS && (
                      <img
                        className={cls('task-detail-list-item-icon')}
                        src={'/icon/success.svg'}
                      />
                    )}

                    <div className="task-detail-list-item-desc">
                      {detail.content}
                      {/* 错误提示 */}
                      {/* {item === 1 && idx === 2 && (
                      <div className="task-detail-list-item-desc-link">
                        Please register your account in Metamask.
                      </div>
                    )} */}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
});

export default OpenTaskDetailModal;
