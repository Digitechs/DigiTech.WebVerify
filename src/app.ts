import store from 'store';
import { getStateFromStore } from './utils/utils';
import { ConnectState } from './models/connect';

export async function getInitialState() {
  const state: Partial<ConnectState> = {
    user: {
      accessToken: getStateFromStore('accessToken'),
      currentUser: getStateFromStore('currentUser'),
      users: [],
    },
  };

  return state;
}
