import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';
import {
  LOGIN_FIELD_EMAIL,
  LOGIN_FIELD_CODE,
  LOGIN_SUCCESS_CODE,
  STORE_ACCESS_TOKEN,
  ROUTES_TASKS,
} from '@/constants';
import { useMemoizedFn } from 'ahooks';
import cls from 'classnames';
import { useTimer } from 'react-timer-hook';
import { getEmailCodeApi, loginApi } from '@/services';
import store from 'store2';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  email?: string;
  code?: string;
  remember?: string;
};

const emailRegExp = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
const LoginForm: React.FC = () => {
  const [loging, setLoging] = useState(false);
  const [isCutdowning, setIsCutdowning] = useState(false);
  const [emailFoucs, setEmailFoucs] = useState(false);
  const [codeFoucs, setCodeFoucs] = useState(false);

  const [form] = Form.useForm();
  const formRef = useRef<any>();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);
  const { seconds, restart } = useTimer({
    expiryTimestamp: time,
    onExpire: () => {
      setIsCutdowning(false);
      console.warn('onExpire called');
    },
  });

  const messageOpen = useMemoizedFn((params: any) => {
    messageApi.open(
      params || {
        type: 'warning',
        content: 'The email address is invalid.',
      },
    );
  });

  const EmailText = Form.useWatch(LOGIN_FIELD_EMAIL, form);
  const CodeText = Form.useWatch(LOGIN_FIELD_CODE, form);

  const btnDisabled = useMemo(() => {
    return !EmailText || !CodeText;
  }, [EmailText, CodeText]);

  const canSubmit = useMemo(() => emailRegExp.test(EmailText), [EmailText]);

  const login = useMemoizedFn(async () => {
    setLoging(true);
    if (canSubmit) {
      try {
        const res = await loginApi({
          email: EmailText,
          account_source: 0,
          pass_code: CodeText,
        });
        console.log('登录成功', res, res.code === LOGIN_SUCCESS_CODE);
        setLoging(false);

        if (res.code === LOGIN_SUCCESS_CODE) {
          store(STORE_ACCESS_TOKEN, res.data[STORE_ACCESS_TOKEN]);
          navigate(ROUTES_TASKS);
        } else {
          messageOpen({
            type: 'error',
            content: res?.err_msg,
          });
        }
      } catch (err) {
        setLoging(false);
      }
    } else {
      messageOpen({
        type: 'warning',
        // content: 'Please fill in your email address.',
        content: 'The email address is invalid.',
      });
    }
    setLoging(false);
  });
  const handleSignIn = useMemoizedFn(async () => {
    if (btnDisabled) {
      return;
    }
    await login();
  });

  const restartTimer = useMemoizedFn(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 60);
    restart(time);
  });

  const handleGetCheckCode = useMemoizedFn(async () => {
    restartTimer();
    if (canSubmit) {
      setIsCutdowning(true);
      await getEmailCodeApi({ email: EmailText });
    } else {
      messageApi.open({
        type: 'warning',
        content: 'Please fill in your email address.',
      });
    }
  });

  useEffect(() => {
    setLoging(false);
    setIsCutdowning(false);
  }, []);

  const renderAddonAfter = useMemoizedFn(() => {
    return (
      <div className="login-form-container-password-addon">
        {isCutdowning ? (
          <div className="login-form-container-password-addon-resend">
            Resend({seconds ? seconds : 60})
          </div>
        ) : (
          <div className="login-form-container-password-addon-code" onClick={handleGetCheckCode}>
            Get code
          </div>
        )}
      </div>
    );
  });

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
        ref={formRef}
      >
        <Form.Item<FieldType>
          label=""
          name={LOGIN_FIELD_EMAIL}
          className={cls('login-form-item', {
            'login-form-item-active': emailFoucs,
          })}
          help={null}
          // rules={[
          //   {
          //     type: 'email',
          //     message: 'The email address is invalid.',
          //   },
          //   {
          //     required: true,
          //     message: 'Please input your E-mail!',
          //   },
          // ]}
        >
          <Input
            bordered={false}
            placeholder="Email"
            onFocus={() => setEmailFoucs(true)}
            onBlur={() => setEmailFoucs(false)}
            style={{ height: '44px' }}
          />
        </Form.Item>

        <Form.Item<FieldType>
          className={cls('login-form-item', {
            'login-form-item-active': codeFoucs,
          })}
          label=""
          name={LOGIN_FIELD_CODE}
          help={null}
          // rules={[{ required: true, message: 'Please input your code!' }]}
        >
          <Input
            bordered={false}
            placeholder="Code"
            style={{ height: '44px' }}
            addonAfter={renderAddonAfter()}
            onFocus={() => setCodeFoucs(true)}
            onBlur={() => setCodeFoucs(false)}
          />
        </Form.Item>
      </Form>
      <div className="login-form-container-bottom">
        <div
          className={cls('login-form-container-bottom-btn', {
            'login-form-container-bottom-btn-disabled': btnDisabled,
          })}
          onClick={handleSignIn}
        >
          <Button loading={loging} disabled={btnDisabled}>
            Continue
          </Button>
        </div>
      </div>
      {contextHolder}
    </>
  );
};

export default LoginForm;
