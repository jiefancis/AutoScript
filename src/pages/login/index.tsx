import { memo, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.less';
import LoginForm from './loginForm';
import { useMemoizedFn } from 'ahooks';
import { BrowserExtension } from '@/utils';
import {
  STORE_ACCESS_TOKEN,
  TOKEN_FROM_GOOGLE,
  ROUTES_TASKS,
  ROUTES_LOGIN,
  LOGIN_SUCCESS_CODE,
  PRIVACY_URL,
  TERMS_URL,
} from '@/constants';
import { Spin } from 'antd';
import store from 'store2';
import { loginApi } from '@/services';

const Login = memo(() => {
  // const [token, setToken] = useState('');
  const [loging, setLoging] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const browserExtension = BrowserExtension.getInstance();

  // browserExtension.storageGet(STORE_ACCESS_TOKEN).then((res) => {
  //   setToken(res[STORE_ACCESS_TOKEN]);
  // });

  useEffect(() => {
    const token = store(STORE_ACCESS_TOKEN);
    if (['/', ROUTES_LOGIN].includes(location.pathname) && token) {
      navigate(ROUTES_TASKS);
    }
  }, [location, navigate]);

  const handleGoogleSignIn = useMemoizedFn(async () => {
    setLoging(true);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { token, userInfo } = await browserExtension.getAuthToken();
    store(STORE_ACCESS_TOKEN, token);
    store(TOKEN_FROM_GOOGLE, true);

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
          navigate('/task');
        }
      } catch (err) {
        setLoging(false);
      }
    }
    setLoging(false);
  });
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-container-bg">
          {/* <img className="login-container-bg" src="/icon/login-bg.svg" /> */}
          <img className="login-container-bg" src="/images/login-bg.png" />
          <img className="login-container-robot" src="/icon/monkey-icon.svg" />
        </div>
        <div className="login-container-header">
          <img className="login-container-header-logo" src="/icon/logo-monkey.svg" />
          <div className="login-container-header-title">AutoApe.AI</div>
        </div>
        <div className="login-container-header-subtitle">Web3's Ultimate Earning Engine</div>
        <div className="login-form">
          <div className="login-form-container">
            {loging ? (
              <Spin size="large" />
            ) : (
              <div className="login-form-container-google" onClick={handleGoogleSignIn}>
                <img className="login-form-container-google-icon" src="/icon/logo-google.svg" />
                <div className="login-form-container-google-text">Continue with Google</div>
              </div>
            )}

            <div className="login-form-container-below">
              <div className="login-form-container-below-line" />
              <div className="login-form-container-below-text">or with your email below</div>
            </div>
            <LoginForm />
          </div>
        </div>

        <div className="login-footer">
          <div className="login-footer-contaier">
            <a target="_blank" href={PRIVACY_URL} className="login-footer-contaier-item">
              Terms of service
            </a>
            <a target="_blank" href={TERMS_URL} className="login-footer-contaier-item">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Login;
