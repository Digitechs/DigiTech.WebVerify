import React from 'react';
import { ActiveStatus } from '@/utils/constant';
import { Tag } from 'antd';
import { useIntl } from 'umi';

interface ActiveStatusProps {
  status?: number;
}

const ActiveStatusComponent: React.FC<ActiveStatusProps> = props => {
  const { status } = props;
  const { formatMessage } = useIntl();




  switch (status) {
    case ActiveStatus.NEW:
      return (
        <Tag style={{ marginRight: 0 }} color="#A0AEC0">
          {formatMessage({ id: `user.status.${status}` })}
        </Tag>
      );
      break;
    case ActiveStatus.ACTIVE:

      return (
        <Tag style={{ marginRight: 0 }} color="#58bad7">
          {formatMessage({ id: `user.status.${status}` })}
        </Tag>
      );
      break;
    case ActiveStatus.LOCK:
      return (
        <Tag style={{ marginRight: 0 }} color="#87d068">
          {formatMessage({ id: `user.status.${status}` })}
        </Tag>
      );
      break;
    default:
      return (
        <Tag style={{ marginRight: 0 }} color="#108ee9">
        {formatMessage({ id: `user.status.${status}` })}
      </Tag>
      );
  }
};

export default ActiveStatusComponent;
