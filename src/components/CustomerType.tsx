import React from 'react';
import { CustomerType } from '@/utils/constant';
import { Tag } from 'antd';
import { useIntl } from 'umi';

interface CustomerTypeProps {
  type?: CustomerType;
}

const CustomerTypeComponent: React.FC<CustomerTypeProps> = props => {
  const { type } = props;
  const intl = useIntl();

  if (!type) return null;

  return type === CustomerType.ACTIVE ? (
    <Tag color="#39bb8c" style={{ textTransform: 'uppercase' }}>
      {intl.formatMessage({ id: 'equipment.modalACTIVE' })}
    </Tag>
  ) : (
    <Tag color="#f2902b" style={{ textTransform: 'uppercase' }}>
      {intl.formatMessage({ id: 'equipment.modalINACTIVE' })}
    </Tag>
  );
};

export default CustomerTypeComponent;
