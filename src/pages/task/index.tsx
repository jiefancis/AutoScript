import { memo, useState } from 'react';
import './index.less';
import { NavLink, Outlet } from 'react-router-dom';
import { ROUTES_TASKS_ALL, ROUTES_TASKS_ME, OFFICAL_WEBSITE, INTERVAL_DURATION } from '@/constants';
import { useAsyncEffect, useInterval, useMemoizedFn } from 'ahooks';
// import { Tooltip } from 'antd';
import { CustomerService } from '@/components';
import { getMyTask } from '@/services';
import store from 'store2';
import { TaskStoreEnum } from '@/enums';
import { Tooltip } from 'antd';
import { BrowserExtension } from '@/utils';

// interface TootltipTitleProps {
//   onClick: () => void;
// }
// const TootltipTitle: FC<TootltipTitleProps> = memo((props) => {
//   const { onClick } = props;
//   return (
//     <div style={{ cursor: 'pointer' }} onClick={onClick}>
//       Log out
//     </div>
//   );
// });
const Task = memo(() => {
  // const navigate = useNavigate();
  const browserExtension = BrowserExtension.getInstance();
  const [taskNum, setTaskNum] = useState(store(TaskStoreEnum.MY_TASK_LENGTH) || 0);

  // const handleLogout = useMemoizedFn(() => {
  //   browserExtension.logout().then(async () => {
  //     navigate(ROUTES_LOGIN);
  //   });
  // });

  // const goToDashboardHandle = useMemoizedFn(() => {
  //   browserExtension.openTab({
  //     url: DASHBOARD_URL,
  //   });
  // });

  const openDashboardHandle = useMemoizedFn(() => {
    browserExtension.openPopup(DASHBOARD_URL);
  });

  const refresh = useMemoizedFn(async () => {
    const res = await getMyTask();
    const len = (res?.data?.running_tasks?.length || 0) + (res?.data?.successed_tasks?.length || 0);
    setTaskNum(len);
    store(TaskStoreEnum.MY_TASK_LENGTH, len);
  });

  useAsyncEffect(refresh, []);

  useInterval(refresh, INTERVAL_DURATION);

  return (
    <div className="auto-ape-task">
      <div className="auto-ape-task-top">
        <Tooltip
          placement="bottomLeft"
          title={<span className="auto-ape-task-top-underline">autoape.ai</span>}
        >
          {/* <Tooltip placement="bottom" title={<TootltipTitle onClick={handleLogout} />}> */}
          <a href={OFFICAL_WEBSITE} target="_blank">
            <div className="auto-ape-task-top-name">
              <img src="/logo.png" alt="" />
              <span>AutoApe.AI</span>
            </div>
          </a>
        </Tooltip>
        <Tooltip
          placement="bottomRight"
          title={<span className="auto-ape-task-top-tip">Dashboard</span>}
        >
          {/* <a href={DASHBOARD_URL} target="_blank"> */}
          <div className="auto-ape-task-top-icon" onClick={openDashboardHandle}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="36" rx="8" fill="white" fillOpacity="0.24" />
              <path
                d="M17.9283 10.5714V14.2857C17.9283 14.532 17.8305 14.7681 17.6564 14.9423C17.4822 15.1164 17.246 15.2143 16.9998 15.2143H11.4283C11.1821 15.2143 10.9459 15.1164 10.7717 14.9423C10.5976 14.7681 10.4998 14.532 10.4998 14.2857V10.5714C10.4998 10.3251 10.5976 10.0889 10.7717 9.91479C10.9459 9.74065 11.1821 9.64282 11.4283 9.64282H16.9998C17.246 9.64282 17.4822 9.74065 17.6564 9.91479C17.8305 10.0889 17.9283 10.3251 17.9283 10.5714ZM16.9998 17.0714H11.4283C11.1821 17.0714 10.9459 17.1692 10.7717 17.3434C10.5976 17.5175 10.4998 17.7537 10.4998 18V25.4285C10.4998 25.6748 10.5976 25.911 10.7717 26.0851C10.9459 26.2593 11.1821 26.3571 11.4283 26.3571H16.9998C17.246 26.3571 17.4822 26.2593 17.6564 26.0851C17.8305 25.911 17.9283 25.6748 17.9283 25.4285V18C17.9283 17.7537 17.8305 17.5175 17.6564 17.3434C17.4822 17.1692 17.246 17.0714 16.9998 17.0714ZM26.2855 20.7857H20.714C20.4678 20.7857 20.2316 20.8835 20.0574 21.0577C19.8833 21.2318 19.7855 21.468 19.7855 21.7143V25.4285C19.7855 25.6748 19.8833 25.911 20.0574 26.0851C20.2316 26.2593 20.4678 26.3571 20.714 26.3571H26.2855C26.5317 26.3571 26.7679 26.2593 26.9421 26.0851C27.1162 25.911 27.214 25.6748 27.214 25.4285V21.7143C27.214 21.468 27.1162 21.2318 26.9421 21.0577C26.7679 20.8835 26.5317 20.7857 26.2855 20.7857ZM26.2855 9.64282H20.714C20.4678 9.64282 20.2316 9.74065 20.0574 9.91479C19.8833 10.0889 19.7855 10.3251 19.7855 10.5714V18C19.7855 18.2462 19.8833 18.4824 20.0574 18.6566C20.2316 18.8307 20.4678 18.9285 20.714 18.9285H26.2855C26.5317 18.9285 26.7679 18.8307 26.9421 18.6566C27.1162 18.4824 27.214 18.2462 27.214 18V10.5714C27.214 10.3251 27.1162 10.0889 26.9421 9.91479C26.7679 9.74065 26.5317 9.64282 26.2855 9.64282Z"
                fill="white"
              />
            </svg>
          </div>
          {/* </a> */}
        </Tooltip>
      </div>
      <div className="auto-ape-task-main">
        <div className="auto-ape-task-main-tab">
          <NavLink className="auto-ape-task-main-tab-item" to={ROUTES_TASKS_ALL}>
            All Tasks
          </NavLink>
          <NavLink className="auto-ape-task-main-tab-item" to={ROUTES_TASKS_ME}>
            My Tasks
            <div className="auto-ape-task-main-tab-item-dot">{taskNum}</div>
          </NavLink>
        </div>
        <div className="auto-ape-task-main-content">
          <Outlet />
        </div>
        <CustomerService />
      </div>
    </div>
  );
});
export default Task;
