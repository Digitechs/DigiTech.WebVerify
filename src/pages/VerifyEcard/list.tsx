import { ExclamationCircleOutlined } from "@ant-design/icons";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "umi";

import { UrlFormat } from "@/utils/utils";
import styles from './verifyEcard.less';

const VerifyEcard = prop => {
  const [loading, setLoanding] = useState(false)
  const [success, setSuccess] = useState(false)

  const history = useHistory()

  const { token, email, devmode, mode } = history.location.query

  const getBaseUrlByMode = (mode: string) => {
    if (mode === undefined || mode === null || mode === "prod" || mode === "production") {
      // production
      return process.env.API_VERIFY_ECARD_PROD;
    } else if (mode === "alpha") {
      // alpha
      return process.env.API_VERIFY_ECARD_ALPHA;
    } else if (mode === "stag" || mode === "staging") {
      // staging
      return process.env.API_VERIFY_ECARD_STAGING;
    } else if (mode === "dev" || mode === "develop") {
      // develop
      return process.env.API_VERIFY_ECARD_DEV;
    } else {
      // default
      return process.env.API_VERIFY_ECARD_PROD;
    }
  }

  const fetchCheckTokenVeify = async () => {
    try {
      let urlFormat = ''; 
      if (devmode === undefined || devmode === null) {
        urlFormat = UrlFormat(getBaseUrlByMode(mode) ?? '', "/auth/active-user", { 'token': token, 'email': email });
      } else {
        let isProdMode = devmode === "false";
        let baseUrl = isProdMode ? process.env.API_VERIFY_ECARD_PROD : process.env.API_VERIFY_ECARD_STAGING;
        urlFormat = UrlFormat(baseUrl ?? '', "/auth/active-user", { 'token': token, 'email': email });
      }
      const res = await axios.get(urlFormat);
      setSuccess(res.data.success);
    }
    catch (error) {
      const err = error as AxiosError
      console.log(err.response);
    }
  }

  useEffect(() => {
    setLoanding(true)
    fetchCheckTokenVeify()
    setLoanding(false)
  }, [])

  return (
    <>
      {loading ? <div>Waiting...</div> :
        <>
          <div className={styles.wrapper}>
            <div className={styles.inner}>
              <div><img  className={styles.imageLogo}  src={"/logo_digitouch.png"} alt="Lien he" /></div>

              <p className={styles.content}>
                {success
                  ? "Tài khoản của bạn đã được xác thực"
                  : "Lỗi không thể xác thực tài khoản của bạn"
                }
                {success
                  ? <img style={{ marginLeft: 10 }} width={'25'} height="25" src={"/accept.png"} alt="Lien he" />
                  : <ExclamationCircleOutlined style={{ paddingLeft: 10, fontSize: 20, color: 'red' }} />
                }
              </p>
              <div
                style={{
                  width: 280,
                  margin: '0px auto',

                }}
              >
                {/* <a href='#sign-in-dialog' className='apply-now-button popup-with-zoom-anim'>
                              {success ? i18n.t('homepage.login_now') : i18n.t('homepage.regis_now')} <i className='icon-material-outline-arrow-right-alt' />
                          </a> */}
              </div>
            </div>
            <div className={styles.powerd}> Powered by Digitech Solutions</div>

          </div>
        </>
      }


    </>
  )
}

export default VerifyEcard
