import { verifyEmailEcard } from "@/services/verify";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useState } from "react"
import { useHistory } from "umi"
import { stringify } from 'querystring'

import styles from './verifyEco.less';
import { UrlFormat } from "@/utils/utils";

const VerifyEco = prop => {
  const [loading, setLoanding] = useState(false)
  const [success, setSuccess] = useState(false)

  const history = useHistory()

  const { token, devmode } = history.location.query

  const fetchCheckTokenVeify = async () => {
    // const res = await verifyEmailEcard(token, email)
    var data = { "token": token }
    if (devmode === undefined || devmode === null || devmode === "false") {
      let urlFormat = UrlFormat(process.env.API_VERIFY_AUTH_SERVICE_PROD  ?? '', "/auth/verify-token", { 'token': token });
      const res = await axios.get(urlFormat);
      setSuccess(res.data.success);
    } else if (devmode === "true") {
      let urlFormat = UrlFormat(process.env.API_VERIFY_AUTH_SERVICE_DEV ?? '', "/auth/verify-token", { 'token': token });
      const res = await axios.get(urlFormat);
      setSuccess(res.data.success);
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
              <div><img src={"/logo_digi.png"} alt="Lien he" /></div>

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

export default VerifyEco
