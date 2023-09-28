import { AllTaskList, SearchBox } from '@/components';
import React, { useState } from 'react';
import './index.less';
import { getAllTask } from '@/services';
import { useAsyncEffect, useMemoizedFn } from 'ahooks';
import { handleTask } from '@/utils';
import { TaskSortEnum, TaskStoreEnum } from '@/enums';
import store from 'store2';

const AllTasks = React.memo(() => {
  const [dataList, setDataList] = useState(store(TaskStoreEnum.ALL_TASK) || []);
  const [searchValue, setSearchValue] = useState('');
  const [sortKey, setSortKey] = useState('');
  const searchChangeHandle = useMemoizedFn((val) => {
    setSearchValue(val);
  });
  const filterhandle = useMemoizedFn((key) => {
    setSortKey(key);
  });
  useAsyncEffect(async () => {
    const res = await getAllTask();
    let list = res.data?.tasks?.map(handleTask);
    store(TaskStoreEnum.ALL_TASK, list);

    if (searchValue) {
      list = list.filter((item: any) =>
        item.name?.toLowerCase()?.includes(searchValue.toLowerCase()),
      );
    }

    if (sortKey) {
      list = list.sort((a: any, b: any) => {
        if (sortKey === TaskSortEnum.NEWEST) {
          return b['startTime'] - a['startTime'];
        } else if (sortKey === TaskSortEnum.TRENDING) {
          return b['userNum'] - a['userNum'];
        }
      });
    }

    setDataList(list);
    store(TaskStoreEnum.ALL_TASK_SEARCH, list);
  }, [searchValue, sortKey]);

  return (
    <div className="auto-ape-all-tasks">
      <SearchBox value={searchValue} onChange={searchChangeHandle} onFilter={filterhandle} />
      <AllTaskList data={dataList} />
    </div>
  );
});
export default AllTasks;
