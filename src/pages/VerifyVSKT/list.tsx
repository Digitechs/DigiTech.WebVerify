import { verifyEmailEcard } from "@/services/verify";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useState } from "react"
import { useHistory } from "umi"

import styles from './verifyVSKT.less';
import { UrlFormat } from "@/utils/utils";

const VerifyEcard = prop => {
  const [loading, setLoanding] = useState(false)
  const [success, setSuccess] = useState(false)

  const history = useHistory()

  const { token, email, mode } = history.location.query

  const fetchCheckTokenVeify = async () => {
    // const res = await verifyEmailEcard(token, email)
    if (mode === undefined || mode === null || mode === "prod" || mode === "production") {
      // production
      const res = await axios.get(`${process.env.API_VERIFY_VSKT_PROD}/auth/active-user?token=${token}&email=${email}`)
      setSuccess(res.data.success);
    } else if (mode === "α" || mode === "alpha") {
      // alpha
      const res = await axios.get(`${process.env.API_VERIFY_VSKT_ALPHA}/auth/active-user?token=${token}&email=${email}`)
      setSuccess(res.data.success);
    } else if (mode === "stag" || mode === "staging") {
      // staging
      const res = await axios.get(`${process.env.API_VERIFY_VSKT_STAGING}/auth/active-user?token=${token}&email=${email}`)
      setSuccess(res.data.success);
    } else if (mode === "dev" || mode === "develop") {
      // develop
      const res = await axios.get(`${process.env.API_VERIFY_VSKT_DEV}/auth/active-user?token=${token}&email=${email}`)
      setSuccess(res.data.success);
    } else {
      // default
      const res = await axios.get(`${process.env.API_VERIFY_VSKT_PROD}/auth/active-user?token=${token}&email=${email}`)
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
              <div><img  className={styles.imageLogo}  src={"/logo_vskt.png"} alt="Lien he" /></div>

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
