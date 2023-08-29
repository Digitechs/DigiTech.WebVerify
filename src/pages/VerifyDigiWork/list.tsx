import { verifyEmailEcard } from "@/services/verify";
import { ExclamationCircleOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react"
import { formatMessage, useHistory } from "umi"
import { stringify } from 'querystring'

import styles from './verifyDigiWork.less';
import { UrlFormat } from "@/utils/utils";
import { Button, Checkbox, Form, Input, notification } from "antd";

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

const VerifyDigiWork = prop => {
  const [loading, setLoanding] = useState(false)
  const [success, setSuccess] = useState(false)

  const history = useHistory()

  const { token, devmode } = history.location.query
  const path = history.location.pathname

  const fetchCheckTokenVeify = async () => {
    // const res = await verifyEmailEcard(token, email)
    // var data = { "token": token }
    if (devmode === undefined || devmode === null || devmode === "false") {
      let urlFormat = UrlFormat(process.env.API_VERIFY_DIGI_WORK_PROD ?? '', "/auth/verify-token", { 'token': token });
      const res = await axios.get(urlFormat);
      setSuccess(res.data.success);
    } else if (devmode === "true") {
      let urlFormat = UrlFormat(process.env.API_VERIFY_DIGI_WORK_DEV ?? '', "/auth/verify-token", { 'token': token });
      const res = await axios.get(urlFormat);
      setSuccess(res.data.success);
    }
  }

  const onFinish = async (values: any) => {
    try {
      let dataReq = { 'newPass': values.password, 'reNewPass': values.confirm, 'token': token };
      let isProdMode = devmode === undefined || devmode === null || devmode === "false"; 
      let baseUrl = isProdMode ? process.env.API_VERIFY_AUTH_SERVICE_PROD : process.env.API_VERIFY_AUTH_SERVICE_DEV;
      let urlFormat = UrlFormat(baseUrl ?? '', "/auth/change-pass-token");
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
    if (path === '/VerifyDigiWork/verify') {
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
                { path !== '/VerifyDigiWork/reset-password' 
                  ? <img style={{ marginTop: 20 }} src={"/logo_digi.png"} alt="logo" />
                  : <img width={120} height={60} style={{ marginTop: 20 }} src={"/logo_digi.png"} alt="logo" />
                }
              </div>
              { path !== '/VerifyDigiWork/reset-password'
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

export default VerifyDigiWork
