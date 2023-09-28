import { FC, memo } from 'react';
import TaskItem, { TaskItemTypeEnum } from '../task-item';
import './index.less';

interface AllTaskListProps {
  data: any[];
}
const AllTaskList: FC<AllTaskListProps> = memo((props) => {
  const { data } = props;

  return (
    <div className="auto-ape-all-task-list">
      {data?.map((item, index) => {
        return <TaskItem key={index} num={index} data={item} type={TaskItemTypeEnum.ALL} />;
      })}
    </div>
  );
});
AllTaskList.defaultProps = {};
export default AllTaskList;
