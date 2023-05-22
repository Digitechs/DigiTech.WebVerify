import { verifyEmailEcard } from "@/services/verify";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useState } from "react"
import { useHistory } from "umi"
import { stringify } from 'querystring'

import styles from './verifyMiniGame.less';

const VerifyMiniGame = prop => {
  const [loading, setLoanding] = useState(false)
  const [success, setSuccess] = useState(false)

  const history = useHistory()

  const { token, email, devmode } = history.location.query

  const fetchCheckTokenVeify = async () => {
    // const res = await verifyEmailEcard(token, email)
    var data = { "token": token, "email": email }
    var customHeader = {
      headers: {
      'Content-Type': 'application/json'
      }
    };
    if (devmode === undefined || devmode === null || devmode === "false") {
      const res = await axios.post(`${process.env.API_VERIFY_MINI_GAME_PROD}/auth/confirm`, JSON.stringify(data), customHeader);
      setSuccess(res.data.success);
    } else if (devmode === "true") {
      const res = await axios.post(`${process.env.API_VERIFY_MINI_GAME_DEV}/auth/confirm`, JSON.stringify(data), customHeader);
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

export default VerifyMiniGame
