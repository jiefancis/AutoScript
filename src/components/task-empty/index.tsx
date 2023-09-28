import { memo } from 'react';
import './index.less';
const TaskEmpty = memo(() => {
  return (
    <div className="auto-ape-task-empty">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="126"
        height="97"
        viewBox="0 0 126 97"
        fill="none"
      >
        <path
          d="M116.831 16.6567H26.3958C23.6302 16.6567 21.2274 18.5582 20.5919 21.2499C19.5989 25.4556 15.8446 28.4267 11.5232 28.4267H8.44938C3.78291 28.4267 0 32.2096 0 36.8761V37.3943C0 42.347 4.01493 46.3619 8.96761 46.3619L16.9123 46.3619C19.5435 46.3619 21.6764 48.4949 21.6764 51.126V54.5656C21.6764 55.297 21.0834 55.89 20.3519 55.89C16.7859 55.89 13.8951 58.7808 13.8951 62.3468V73.8912C13.8951 79.117 18.1315 83.3533 23.3573 83.3533H93.4967C98.034 83.3533 101.712 79.6751 101.712 75.1377C101.712 71.1403 104.589 67.7231 108.528 67.0422L114.602 65.9923C118.395 65.3366 121.165 62.0459 121.165 58.1966V55.8433C121.165 52.7737 118.677 50.2853 115.607 50.2853H113.692C111.68 50.2853 110.049 48.6542 110.049 46.6422C110.049 44.6302 111.68 42.9991 113.692 42.9991H117.831C122.128 42.9991 125.612 39.5153 125.612 35.2178V25.4375C125.612 20.588 121.681 16.6567 116.831 16.6567Z"
          fill="#FFE7D1"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.8521 14.4078C21.0599 15.4833 18.0469 20.24 19.1224 25.0322L33.3044 88.2261C34.3798 93.0184 39.1365 96.0314 43.9287 94.9559L99.4515 82.4955C104.244 81.42 107.257 76.6633 106.181 71.8711L91.9992 8.67712C90.9237 3.88491 86.167 0.871904 81.3748 1.94737L25.8521 14.4078ZM33.7461 33.1429C31.949 33.5462 30.8191 35.3299 31.2224 37.127C31.6257 38.9241 33.4095 40.054 35.2066 39.6507L80.7611 29.4273C82.5582 29.024 83.6881 27.2402 83.2848 25.4432C82.8815 23.6461 81.0977 22.5162 79.3006 22.9195L33.7461 33.1429ZM34.6303 52.3118C34.227 50.5148 35.3568 48.731 37.1539 48.3277L82.7084 38.1043C84.5055 37.701 86.2893 38.8309 86.6926 40.628C87.0959 42.4251 85.966 44.2088 84.1689 44.6121L38.6144 54.8355C36.8173 55.2388 35.0336 54.1089 34.6303 52.3118ZM40.5617 63.5125C38.7647 63.9158 37.6348 65.6996 38.0381 67.4967C38.4414 69.2937 40.2251 70.4236 42.0222 70.0203L64.7995 64.9086C66.5966 64.5053 67.7264 62.7216 67.3231 60.9245C66.9198 59.1274 65.1361 57.9975 63.339 58.4008L40.5617 63.5125Z"
          fill="#FFA34F"
        />
        <circle cx="90.8621" cy="13.8512" r="11.6348" fill="#FFE7D1" />
        <path
          d="M86.3877 9.37671L95.3376 18.3266"
          stroke="#FFA34F"
          strokeWidth="2.58551"
          strokeLinecap="round"
        />
        <path
          d="M95.3369 9.37671L86.387 18.3266"
          stroke="#FFA34F"
          strokeWidth="2.58551"
          strokeLinecap="round"
        />
      </svg>
      <span>You haven't added a task yet.</span>
    </div>
  );
});
export default TaskEmpty;