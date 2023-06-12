import { verifyEmailEcard } from "@/services/verify";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useState } from "react"
import { useHistory } from "umi"

import styles from './verifyEcard.less';

const VerifyEcard = prop => {
  const [loading, setLoanding] = useState(false)
  const [success, setSuccess] = useState(false)

  const history = useHistory()

  const { token, email, devmode } = history.location.query

  const fetchCheckTokenVeify = async () => {
    // const res = await verifyEmailEcard(token, email)
    if (devmode === undefined || devmode === null || devmode === "false") {
      const res = await axios.get(`${process.env.API_VERIFY_ECARD_PROD}/auth/active-user?token=${token}&email=${email}`)
      setSuccess(res.data.success);
    } else if (devmode === "true") {
      const res = await axios.get(`${process.env.API_VERIFY_ECARD_DEV}/auth/active-user?token=${token}&email=${email}`)
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
