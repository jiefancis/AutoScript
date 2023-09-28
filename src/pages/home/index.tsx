// import { BrowserExtension } from '@/utils';
import { TaskList } from '@/components';
import React from 'react';
// import { useNavigate } from 'react-router-dom';

const Home = React.memo(() => {
  // const browserExtension = BrowserExtension.getInstance();
  // const navigate = useNavigate();

  // const handleGoToExampleClick = useCallback(() => {
  //   navigate('/example');
  // }, [navigate]);

  // const handleClick = useCallback(() => {
  //   browserExtension.openExtensionInBrowser();
  // }, [browserExtension]);

  // const handleRefreshClick = useCallback(() => {
  //   // browserExtension.reload();
  //   browserExtension.getExtensionURL();
  // }, [browserExtension]);

  return (
    <div className="home">
      <TaskList />
      {/* <button onClick={handleGoToExampleClick}>跳转example页面</button> */}
      {/* <button onClick={handleClick}>点击展开视图1</button> */}
      {/* <button onClick={handleRefreshClick}>刷新</button> */}
    </div>
  );
});
export default Home;
