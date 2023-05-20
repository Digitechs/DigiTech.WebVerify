import { MenuDataItem } from '@ant-design/pro-layout';
import { GlobalModelState } from './global';
import { Settings } from '@ant-design/pro-layout';
// import { ProfileModelState } from 'umi';

export { GlobalModelState };

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    menu?: boolean;
    user?: boolean;
  };
}

export interface ConnectState {
  global: GlobalModelState;
  loading: Loading;
  settings: Settings;
}

export interface Route extends MenuDataItem {
  routes?: Route[];
}
