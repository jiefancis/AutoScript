import { MyTaskList, TaskEmpty } from '@/components';
import React, { useState } from 'react';
import './index.less';
import { useAsyncEffect, useInterval, useMemoizedFn } from 'ahooks';
import { getMyTask } from '@/services';
import { handleTask } from '@/utils';
import { TaskItemStatusEnum } from '@/components/task-item';
import { TaskStoreEnum } from '@/enums';
import store from 'store2';
import { INTERVAL_DURATION } from '@/constants';

const MyTasks = React.memo(() => {
  const [runningTaskList, setRunningTaskList] = useState(
    store(TaskStoreEnum.MY_TASK_RUNNING) || [],
  );
  const [successeTaskList, setSuccesseTaskList] = useState(
    store(TaskStoreEnum.MY_TASK_SUCCESS) || [],
  );

  const refresh = useMemoizedFn(async () => {
    const res = await getMyTask();
    const runningTasklist = res?.data?.running_tasks?.map(handleTask) || [];
    setRunningTaskList(runningTasklist);
    store(TaskStoreEnum.MY_TASK_RUNNING, runningTasklist);

    const successeTaskList = res?.data?.successed_tasks?.map(handleTask) || [];
    setSuccesseTaskList(successeTaskList);
    store(TaskStoreEnum.MY_TASK_SUCCESS, successeTaskList);
  });

  useAsyncEffect(refresh, []);

  useInterval(refresh, INTERVAL_DURATION);

  return (
    <div className="auto-ape-my-tasks">
      {!runningTaskList.length && !successeTaskList.length && <TaskEmpty />}
      {!!runningTaskList.length && (
        <>
          <div className="auto-ape-my-tasks-box">
            <div className="auto-ape-my-tasks-box-title">Running({runningTaskList.length})</div>
            <div className="auto-ape-my-tasks-box-content">
              <MyTaskList listType={TaskItemStatusEnum.RUNNING} data={runningTaskList} />
            </div>
          </div>
        </>
      )}
      {!!successeTaskList.length && (
        <div className="auto-ape-my-tasks-box">
          <div className="auto-ape-my-tasks-box-title">Successed({successeTaskList.length})</div>
          <div className="auto-ape-my-tasks-box-content">
            <MyTaskList listType={TaskItemStatusEnum.SUCCESSED} data={successeTaskList} />
          </div>
        </div>
      )}
    </div>
  );
});
export default MyTasks;
