import { HashRouter, useRoutes } from 'react-router-dom'; // useLocation, useNavigate
import './App.less';
import './antd.less';
import 'normalize.css';
import { routes } from './config';
import store from 'store2';
import { MessageEventEnum } from '@/enums';
import { useNavigate } from 'react-router-dom';
import {
  ROUTES_LOGIN,
  STORE_ACCESS_TOKEN,
  TOKEN_FROM_GOOGLE,
  LOGIN_SUCCESS_CODE,
} from '@/constants';
import { BrowserExtension } from '@/utils';
import { loginApi } from '@/services';

let navigate: any = null;
function Main() {
  navigate = useNavigate();
  const elementRoute = useRoutes(routes);
  return elementRoute;
}
function handleLogout() {
  store(STORE_ACCESS_TOKEN, '');
  navigate?.(ROUTES_LOGIN);
}
function onMessage() {
  chrome.runtime.onMessage.addListener(function (request) {
    // console.log('接收消息', request, sender, sendResponse);
    if (request?.event === MessageEventEnum.SYNC_LOGOUT) {
      handleLogout();
    }
  });
}
onMessage();

const handleGoogleSignIn = async () => {
  const browserExtension = BrowserExtension.getInstance();
  const is_google_token = store(TOKEN_FROM_GOOGLE);
  if (!is_google_token) {
    return;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { token, userInfo } = await browserExtension.getAuthToken();
  store(STORE_ACCESS_TOKEN, token);

  if (token) {
    try {
      const res = await loginApi({
        account_source: 1,
        token,
        email: userInfo?.email || '1540302851@qq.com',
        account_id: userInfo?.id || '123456',
      });
      // console.log('resssss', res);
      if (res.code === LOGIN_SUCCESS_CODE) {
        store(STORE_ACCESS_TOKEN, res.data[STORE_ACCESS_TOKEN]);
        store(TOKEN_FROM_GOOGLE, false);
        navigate?.('/task');
      }
    } catch (err) {
      console.log('err', err);
    }
  }
};
handleGoogleSignIn();

function App() {
  return (
    <HashRouter>
      <Main />
    </HashRouter>
  );
}

export default App;
