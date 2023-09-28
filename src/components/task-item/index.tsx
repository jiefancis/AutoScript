import { FC, memo, useMemo, useState } from 'react';
import './index.less';
import { useMemoizedFn } from 'ahooks';
import cls from 'classnames';
import TaskItemStatusIcon from '../task-item-status-icon';
import OpenTaskDetailModal from '../open-task-detail-modal';
import TaskDetailModal from '../task-detail-modal';
import { STORE_ACCESS_TOKEN } from '@/constants';
import { TaskStatusEnum } from '@/enums';
import store from 'store2';
import { BrowserExtension } from '@/utils';

export enum TaskItemTypeEnum {
  ALL = 'all',
  ME = 'me',
}

export enum TaskItemStatusEnum {
  RUNNING = 'running',
  SUCCESSED = 'Successed',
}
interface TaskItemProps {
  type: TaskItemTypeEnum;
  listType?: TaskItemStatusEnum;
  data: any;
  num?: number;
}
const TaskItem: FC<TaskItemProps> = memo((props) => {
  const { type, data, listType } = props;

  const {
    apeCoin,
    points,
    name,
    platform,
    platformIcon,
    tags,
    userNumText,
    startTimeText,
    endTimeText,
    status,
    taskId,
    avatarList,
    gmt,
    link,
    isWeb3,
  } = data || {};

  const [openDetail, setOpenDetail] = useState(false);
  const browser = BrowserExtension.getInstance();

  const showTaskDetailModal = useMemoizedFn(() => {
    setOpenDetail(true);
  });
  const closeTaskDetailModal = useMemoizedFn(() => {
    setOpenDetail(false);
  });

  const isAll = useMemo(() => {
    return type === TaskItemTypeEnum.ALL;
  }, [type]);

  const viewDetailClickHandle = useMemoizedFn(() => {
    setOpenDetail(true);
  });
  const goToDashboardHandle = useMemoizedFn(() => {
    // browser.openTab({
    //   url: DASHBOARD_URL,
    // });
    browser.openPopup(DASHBOARD_URL);
  });
  const earnClickHandle = useMemoizedFn(() => {
    const token = store(STORE_ACCESS_TOKEN);
    chrome.runtime.sendMessage({
      event: 'taskId',
      taskId,
      token,
      // targetUrl: num === 1 ? WEB3_TARGET_URL : TARGET_URL,
      // isWeb3Task: num === 1,
      targetUrl: link,
      isWeb3Task: isWeb3,
    });
    setTimeout(() => {
      browser.openTab({
        url: link,
        // url: num === 1 ? WEB3_TARGET_URL : TARGET_URL,
      });
    }, 300);
  });

  const handleRestartTask = useMemoizedFn(() => {
    if (status === TaskStatusEnum.PAUSE) {
      const token = store(STORE_ACCESS_TOKEN);
      chrome.runtime.sendMessage({
        event: 'restart_task',
        taskId,
        token,
        // targetUrl: WEB3_TARGET_URL,
        targetUrl: link,
        isWeb3Task: true,
      });
      setTimeout(() => {
        browser.openTab({
          url: link,
          // url: WEB3_TARGET_URL,
        });
      }, 300);
    }
  });
  const rightContentJsx = useMemo(() => {
    if (isAll) {
      return (
        <div className="auto-ape-task-item-main-btn" onClick={earnClickHandle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="13"
            viewBox="0 0 9 13"
            fill="none"
          >
            <path
              d="M8.43876 6.028C8.7151 6.22758 8.7151 6.6391 8.43876 6.83868L0.792746 12.3608C0.462082 12.5996 4.10341e-07 12.3634 4.28171e-07 11.9555L9.1093e-07 0.911226C9.28759e-07 0.503342 0.462082 0.267074 0.792746 0.505886L8.43876 6.028Z"
              fill="#FF881B"
            />
          </svg>
          <span>Run to Earn</span>
        </div>
      );
    } else {
      if (listType === TaskItemStatusEnum.RUNNING) {
        return (
          <div className="auto-ape-task-item-main-detail">
            {status === TaskStatusEnum.FAIL ? (
              <OpenTaskDetailModal showTaskDetailModal={showTaskDetailModal}>
                <span className="auto-ape-task-item-main-detail-text">Check issue</span>
              </OpenTaskDetailModal>
            ) : (
              <span className="auto-ape-task-item-main-detail-text" onClick={viewDetailClickHandle}>
                View detail
              </span>
            )}
            <div onClick={handleRestartTask} style={{ cursor: 'pointer' }}>
              <TaskItemStatusIcon status={status} />
            </div>
          </div>
        );
      } else {
        return (
          <div className="auto-ape-task-item-main-detail">
            <span className="auto-ape-task-item-main-detail-text" onClick={goToDashboardHandle}>
              View in dashboard
            </span>
          </div>
        );
      }
    }
  }, [
    earnClickHandle,
    goToDashboardHandle,
    isAll,
    listType,
    showTaskDetailModal,
    status,
    viewDetailClickHandle,
    handleRestartTask,
  ]);

  return (
    <div
      className={cls('auto-ape-task-item', {
        ['auto-ape-task-item--my']: !isAll,
      })}
    >
      {isAll && (
        <div className="auto-ape-task-item-label">
          <div className="auto-ape-task-item-label-item auto-ape-task-item-label-item--light">
            +{apeCoin} ApeCoin
          </div>
          <div className="auto-ape-task-item-label-item">{points} Points</div>
          {tags?.map((item: string) => {
            return (
              <div key={item} className="auto-ape-task-item-label-item">
                {item}
              </div>
            );
          })}
        </div>
      )}
      <div className="auto-ape-task-item-main">
        <div className="auto-ape-task-item-main-left">
          {!isAll && <div className="auto-ape-task-item-main-num">+{apeCoin} ApeCoin</div>}
          <div className="auto-ape-task-item-main-title">{name}</div>
          {isAll && (
            <div className="auto-ape-task-item-main-network">
              <img src={platformIcon} alt="" />
              <span className="auto-ape-task-item-main-network-name">{platform}</span>
              <div className="auto-ape-task-item-main-group">
                {avatarList?.map((item: string, index: number) => {
                  return <img key={index} src={item} alt="" />;
                })}
                <img src="/icon/ellipse.svg" alt="" />
              </div>
              <span>{userNumText}</span>
            </div>
          )}
        </div>
        <div className="auto-ape-task-item-main-right">{rightContentJsx}</div>
      </div>
      {isAll && (
        <div className="auto-ape-task-item-time">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="18" height="18" rx="9" fill="#E8E8E8" fillOpacity="0.52" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.78906 12.7969C11.0025 12.7969 12.7969 11.0025 12.7969 8.78906C12.7969 6.57561 11.0025 4.78125 8.78906 4.78125C6.57561 4.78125 4.78125 6.57561 4.78125 8.78906C4.78125 11.0025 6.57561 12.7969 8.78906 12.7969ZM8.78906 13.6406C11.4685 13.6406 13.6406 11.4685 13.6406 8.78906C13.6406 6.10962 11.4685 3.9375 8.78906 3.9375C6.10962 3.9375 3.9375 6.10962 3.9375 8.78906C3.9375 11.4685 6.10962 13.6406 8.78906 13.6406Z"
              fill="#C5C5C5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.57812 6.04688C8.81112 6.04688 9 6.23575 9 6.46875V9.03619L10.1421 10.1783C10.3068 10.343 10.3068 10.6101 10.1421 10.7749C9.97731 10.9396 9.71019 10.9396 9.54544 10.7749L8.15625 9.38568V6.46875C8.15625 6.23575 8.34513 6.04688 8.57812 6.04688Z"
              fill="#C5C5C5"
            />
          </svg>

          <span>
            {startTimeText} - {endTimeText} GMT {gmt}:00
          </span>
        </div>
      )}
      <TaskDetailModal
        open={openDetail}
        taskId={taskId}
        closeTaskDetailModal={closeTaskDetailModal}
      />
    </div>
  );
});
TaskItem.defaultProps = {
  type: TaskItemTypeEnum.ALL,
};
export default TaskItem;
