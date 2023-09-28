import { FC, memo } from 'react';
import TaskItem, { TaskItemStatusEnum, TaskItemTypeEnum } from '../task-item';
import './index.less';

interface MyTaskListProps {
  data: any[];
  listType: TaskItemStatusEnum;
}
const MyTaskList: FC<MyTaskListProps> = memo((props) => {
  const { data, listType } = props;

  return (
    <div className="auto-ape-my-task-list">
      {data?.map((item, index) => {
        return <TaskItem key={index} data={item} type={TaskItemTypeEnum.ME} listType={listType} />;
      })}
    </div>
  );
});
MyTaskList.defaultProps = {};
export default MyTaskList;
