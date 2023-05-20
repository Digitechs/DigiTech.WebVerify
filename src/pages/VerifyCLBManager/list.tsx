import { verifyEmailEcard } from "@/services/verify";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useState } from "react"
import { useHistory } from "umi"
import { Helmet } from 'react-helmet'
import styles from './verifyCLBManager.less';

const VerifyCLBManager = prop => {
  const [loading, setLoanding] = useState(false)
  const [success, setSuccess] = useState()

  const history = useHistory()

  const { token, email, devmode } = history.location.query

  const fetchCheckTokenVeify = async () => {
    if (devmode == undefined || devmode == null || devmode == "false") {
      const res = await axios.get(`${process.env.API_VERIFY_CLB_MANAGER_PROD}/auth/active-user?token=${token}&email=${email}`)
      setSuccess(res.data.success);
    } else if (devmode == "true") {
      const res = await axios.get(`${process.env.API_VERIFY_CLB_MANAGER_DEV}/auth/active-user?token=${token}&email=${email}`)
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
      <Helmet>
        <title>CLB MANAGER</title>
        <link id="favicon" rel="icon" href="/favicon.ico" type="image/x-icon"/>
      </Helmet>

      {loading ? <div>Waiting...</div> :
        <>
          <div className={styles.wrapper}>
            <div className={styles.inner}>
              <div><img  className={styles.imageLogo} src={"/logo_clb_manager.png"} alt="Lien he" /></div>

              <p className={styles.content}>
                {success
                  ? "Bạn đã xác thực tài khoản thành công, Vui lòng đợi quản trị viên xét duyệt tài khoản để có thể vào ứng dụng"
                  : "Lỗi không thể xác thực tài khoản của bạn"}
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

export default VerifyCLBManager
