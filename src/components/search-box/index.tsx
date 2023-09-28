import { useDefault } from '@/hooks';
import { useMemoizedFn } from 'ahooks';
import { FC, memo } from 'react';
import './index.less';
import { Dropdown } from 'antd';
import { TaskSortEnum } from '@/enums';

interface SearchBoxProps {
  value?: string;
  onChange: (val: string) => void;
  defaultValue?: string;
  placeholder?: string;
  onFilter?: (val: any) => void;
}
const items = [
  {
    key: TaskSortEnum.NEWEST,
    label: 'Newest',
  },
  {
    key: TaskSortEnum.TRENDING,
    label: 'Trending',
  },
];
const SearchBox: FC<SearchBoxProps> = memo((props) => {
  const { value, defaultValue, onChange, placeholder, onFilter } = props;
  const [val, setVal] = useDefault(value as string, defaultValue as string, onChange);
  const inputChangeHandle = useMemoizedFn((e) => {
    setVal(e.target?.value);
  });
  const clickHandle = useMemoizedFn(({ key }) => {
    onFilter?.(key);
  });
  return (
    <div className="auto-ape-seach-box">
      <div className="auto-ape-seach-box-input">
        <svg
          className="auto-ape-seach-box-input--icon"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5625 18.375C16.7036 18.375 19.25 15.8286 19.25 12.6875C19.25 9.54638 16.7036 7 13.5625 7C10.4214 7 7.875 9.54638 7.875 12.6875C7.875 15.8286 10.4214 18.375 13.5625 18.375ZM13.5625 21C18.1534 21 21.875 17.2784 21.875 12.6875C21.875 8.09663 18.1534 4.375 13.5625 4.375C8.97163 4.375 5.25 8.09663 5.25 12.6875C5.25 17.2784 8.97163 21 13.5625 21Z"
            fill="#B0B0B0"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.4469 17.4469C17.9595 16.9344 18.7905 16.9344 19.3031 17.4469L22.3656 20.5094C22.8781 21.022 22.8781 21.853 22.3656 22.3656C21.853 22.8781 21.022 22.8781 20.5094 22.3656L17.4469 19.3031C16.9344 18.7905 16.9344 17.9595 17.4469 17.4469Z"
            fill="#B0B0B0"
          />
        </svg>
        <input placeholder={placeholder} value={val} onChange={inputChangeHandle} type="text" />
      </div>
      <Dropdown menu={{ items, onClick: clickHandle }} trigger={['click']}>
        <div className="auto-ape-seach-box-filter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M6 6L18.75 6" stroke="black" stroke-width="2.25" stroke-linecap="round" />
            <path d="M6 11.625H12.75" stroke="black" stroke-width="2.25" stroke-linecap="round" />
            <path d="M6 16.875H12.75" stroke="black" stroke-width="2.25" stroke-linecap="round" />
            <path
              d="M17.25 9.375V17.0466C17.25 17.2518 17.5022 17.3499 17.6409 17.1986L19.5 15.1705"
              stroke="black"
              strokeWidth="2.25"
              strokeLinecap="round"
            />
          </svg>
          <span>Trending</span>
        </div>
      </Dropdown>
    </div>
  );
});
SearchBox.defaultProps = {
  placeholder: 'Search...',
};
export default SearchBox;
