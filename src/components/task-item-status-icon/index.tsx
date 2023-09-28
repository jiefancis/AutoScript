import { FC, memo } from 'react';
import { Progress } from 'antd';
import './index.less';
import { TaskStatusEnum } from '@/enums';

interface TaskItemStatusIconProps {
  status: any;
}
const strokeWidth = 10;
const size = 40;
// const strokeColor = { '0%': '#7B61FF', '100%': '#FF61D3' };
const strokeColor = '#FFD4AC';
const TaskItemStatusIcon: FC<TaskItemStatusIconProps> = memo((props) => {
  const { status } = props;
  switch (status) {
    case TaskStatusEnum.FAIL:
      return (
        <div className="task-item-status-icon-progress">
          <div className="task-item-status-icon-circle task-item-status-icon-circle--fail">
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.42628 7.44328C8.94254 7.97317 8.94254 8.81793 8.42628 9.34782L2.48498 15.446C1.63061 16.3229 0.142969 15.718 0.142969 14.4937L0.14297 2.2974C0.14297 1.07308 1.63061 0.468199 2.48499 1.34513L8.42628 7.44328Z"
                fill="#FF1C1C"
              />
            </svg>
          </div>
          <Progress
            trailColor="transparent"
            strokeWidth={strokeWidth}
            strokeColor="#FFACAC"
            size={size}
            showInfo={false}
            type="circle"
            percent={75}
          />
        </div>
      );
    case TaskStatusEnum.PAUSE:
      return (
        <div className="task-item-status-icon-progress">
          <div className="task-item-status-icon-circle">
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.42628 6.9434C8.94254 7.47329 8.94254 8.31805 8.42628 8.84794L2.48498 14.9461C1.63061 15.823 0.142969 15.2181 0.142969 13.9938L0.14297 1.79752C0.14297 0.5732 1.63061 -0.0316786 2.48499 0.845254L8.42628 6.9434Z"
                fill="#FF881B"
              />
            </svg>
          </div>
          <Progress
            trailColor="transparent"
            showInfo={false}
            size={size}
            strokeColor={strokeColor}
            strokeWidth={strokeWidth}
            type="circle"
            percent={75}
          />
        </div>
      );
    case TaskStatusEnum.INIT:
    case TaskStatusEnum.PROCEEING:
      return (
        <div className="task-item-status-icon-progress">
          <div className="task-item-status-icon-circle">
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.34268 0.904785C3.24036 0.904785 3.96808 1.6325 3.96808 2.53018V12.181C3.96808 13.0787 3.24036 13.8064 2.34268 13.8064C1.445 13.8064 0.717285 13.0787 0.717285 12.181V2.53018C0.717285 1.6325 1.445 0.904785 2.34268 0.904785Z"
                fill="#FF881B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.42618 0.904785C10.3239 0.904785 11.0516 1.6325 11.0516 2.53018V12.181C11.0516 13.0787 10.3239 13.8064 9.42618 13.8064C8.5285 13.8064 7.80078 13.0787 7.80078 12.181V2.53018C7.80078 1.6325 8.5285 0.904785 9.42618 0.904785Z"
                fill="#FF881B"
              />
            </svg>
          </div>
          <Progress
            trailColor="transparent"
            showInfo={false}
            strokeColor={strokeColor}
            strokeWidth={strokeWidth}
            size={size}
            type="circle"
            percent={75}
          />
        </div>
      );
    default:
      return null;
  }
});
TaskItemStatusIcon.defaultProps = {};
export default TaskItemStatusIcon;
