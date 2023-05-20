import React, { useState, useEffect } from 'react';
import { Redirect, connect, ConnectProps, useLocation, history } from 'umi';
import { stringify } from 'querystring';
import { PageLoading } from '@ant-design/pro-layout';
import { ConnectState } from '@/models/connect';

interface SecurityLayoutProps extends ConnectProps {
  loading?: boolean;
  accessToken?: string;
  children: any;
}

const SecurityLayout: React.FC<SecurityLayoutProps> = props => {
  const { children, loading, accessToken, dispatch } = props;
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // setIsReady(true);
    // if (dispatch) {
    //   dispatch({ type: 'user/getMe' });
    // }
  }, []);

  // const isLogin = currentUser && currentUser.id && accessToken;
  const location = useLocation();

  // const queryString = stringify({
  //   redirect: window.location.href,
  // });

  // if ((!isLogin && loading) || !isReady) {
  //   return <PageLoading />;
  // }

  // if (!isLogin && location.pathname !== '/login') {
  //   return <Redirect to={`/login`} />;
  // }

  return children;
};

export default connect(({ loading }: ConnectState) => ({
  loading: loading.models.user,
}))(SecurityLayout);
