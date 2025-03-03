import { ExclamationCircleOutlined } from "@ant-design/icons";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "umi";

import { UrlFormat } from "@/utils/utils";
import { Button, Form, Input, notification } from "antd";
import styles from './verifyWinwinEcom.less';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 10 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 6,
      offset: 10,
    },
  },
};

const VerifyWinwinEcom = prop => {
  const [loading, setLoanding] = useState(false)
  const [success, setSuccess] = useState(false)

  const history = useHistory()

  const { token, devmode, mode, email } = history.location.query
  const path = history.location.pathname

  const getBaseUrlByMode = (mode: string) => {
    if (mode === undefined || mode === null || mode === "prod" || mode === "production") {
      // production
      return process.env.API_VERIFY_AUTH_WINWIN_PROD;
    } else if (mode === "alpha") {
      // alpha
      return process.env.API_VERIFY_AUTH_WINWIN_ALPHA;
    } else if (mode === "stag" || mode === "staging") {
      // staging
      return process.env.API_VERIFY_AUTH_WINWIN_STAGING;
    } else if (mode === "dev" || mode === "develop") {
      // develop
      return process.env.API_VERIFY_AUTH_WINWIN_DEV;
    } else {
      // default
      return process.env.API_VERIFY_AUTH_WINWIN_PROD;
    }
  }

  const fetchCheckTokenVeify = async () => {
    try {
      let urlFormat = ''; 
      if (devmode === undefined || devmode === null) {
        urlFormat = UrlFormat(getBaseUrlByMode(mode) ?? '', "/auth/verify-token", { 'token': token });
      } else {
        let isProdMode = devmode === "false";
        let baseUrl = isProdMode ? process.env.API_VERIFY_AUTH_WINWIN_STAGING : process.env.API_VERIFY_AUTH_WINWIN_DEV;
        urlFormat = UrlFormat(baseUrl ?? '', "/auth/verify-token", { 'token': token });
      }
      const res = await axios.get(urlFormat);
      setSuccess(res.data.success);
    }
    catch (error) {
      const err = error as AxiosError
      console.log(err.response);
    }
  }

  const onFinish = async (values: any) => {
    try {
      let urlFormat = '';
      let dataReq = { 'newPass': values.password, 'reNewPass': values.confirm, 'token': token, 'email': email };
      if (devmode === undefined || devmode === null) {
        urlFormat = UrlFormat(getBaseUrlByMode(mode) ?? '', "/auth/change-pass-token");
      } else {
        let isProdMode = devmode === "false";
        let baseUrl = isProdMode ? process.env.API_VERIFY_AUTH_WINWIN_STAGING : process.env.API_VERIFY_AUTH_WINWIN_DEV;
        urlFormat = UrlFormat(baseUrl ?? '', "/auth/change-pass-token");
      }
      const res = await axios.post(urlFormat ?? '', dataReq);
        if (res?.data?.success == true) {
          notification.success({
            message: `Thông báo`,
            description: "Đổi mật khẩu thành công"
          });
        }
    }
    catch (error) {
      const err = error as AxiosError
      console.log(err.response);
      notification.error({
        message: `Thông báo`,
        description: "Lỗi hệ thống. Đổi mật khẩu không thành công"
      });
    }
  };

  useEffect(() => {
    if (path === '/VerifyWinwinEcom/verify') {
      setLoanding(true)
      fetchCheckTokenVeify()
      setLoanding(false)
    }
  }, [])

  return (
    <>
      {loading ? <div>Waiting...</div> :
        <>
          <div className={styles.wrapper}>
            <div className={styles.inner}>
              <div>
                { path !== '/VerifyWinwinEcom/reset-password' 
                  ? <img style={{ marginTop: 20 }} src={"/logo_digi.png"} alt="logo" />
                  : <img width={120} height={60} style={{ marginTop: 20 }} src={"/logo_digi.png"} alt="logo" />
                }
              </div>
              { path !== '/VerifyWinwinEcom/reset-password'
                ? <p className={styles.content}>
                    {success
                      ? "Tài khoản của bạn đã được xác thực"
                      : "Lỗi không thể xác thực tài khoản của bạn"
                    }
                    {success
                      ? <img style={{ marginLeft: 10 }} width={'25'} height="25" src={"/accept.png"} alt="accept" />
                      : <ExclamationCircleOutlined style={{ paddingLeft: 10, fontSize: 20, color: 'red' }} />
                    }
                  </p>
                : <Form
                    {...formItemLayout}
                    name="normal_reset_password"
                    className={styles.resetPasswordForm}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    requiredMark={false}
                    scrollToFirstError
                  >
                    <Form.Item
                      name="password"
                      label="Mật khẩu *"
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng nhập mật khẩu',
                        },
                      ]}
                      hasFeedback
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item
                      name="confirm"
                      label="Xác nhận mật khẩu *"
                      dependencies={['password']}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng nhập xác nhận mật khẩu',
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(new Error('Mật khẩu không khớp'));
                          },
                        }),
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                      <Button style={{ background: "#f2672c", borderColor: "#f2672c" }} type="primary" htmlType="submit" className={styles.resetPasswordFormButton}>
                        Xác nhận
                      </Button>
                    </Form.Item>
                  </Form>
              }
              <div
                style={{
                  width: 280,
                  margin: '0px auto',

                }}
              >
              </div>
            </div>
            <div className={styles.powerd}>Powered by Digitech Solutions</div>
          </div>
        </>
      }


    </>
  )
}

export default VerifyWinwinEcom
