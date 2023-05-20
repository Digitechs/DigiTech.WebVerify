import React from 'react';
import { UserRole } from '@/utils/constant';
import { Tag } from 'antd';
import { useIntl } from 'umi';

interface UserRoleProps {
  role?: string;
}

const UserRoleComponent: React.FC<UserRoleProps> = props => {
  const { role } = props;
  const { formatMessage } = useIntl();

  if (!role) return null;

  switch (role) {
    case UserRole.ADMIN:
      return (
        <Tag style={{ marginRight: 0 }} color="#108ee9">
          {formatMessage({ id: `user.role.${role}` })}
        </Tag>
      );
    case UserRole.AGENCY:
      return (
        <Tag style={{ marginRight: 0 }} color="#2db7f5">
          {formatMessage({ id: `user.role.${role}` })}
        </Tag>
      );
    case UserRole.BUSINESS_STAFF:
      return (
        <Tag style={{ marginRight: 0 }} color="#87d068">
          {formatMessage({ id: `user.role.${role}` })}
        </Tag>
      );
    case UserRole.DIRECTOR:
      return (
        <Tag style={{ marginRight: 0 }} color="#f50">
          {formatMessage({ id: `user.role.${role}` })}
        </Tag>
      );
    case UserRole.OFFICER:
      return (
        <Tag style={{ marginRight: 0 }} color="#00e6e6">
          {formatMessage({ id: `user.role.${role}` })}
        </Tag>
      );
    case UserRole.DEPARTMENT:
      return (
        <Tag color="#008000">{formatMessage({ id: `user.role.${role}` })}</Tag>
      );
    case UserRole.CUSTOMER:
      return (
        <Tag color="#008000">{formatMessage({ id: `user.role.${role}` })}</Tag>
      );
    case UserRole.OPERATOR:
      return (
        <Tag color="#e4a786">{formatMessage({ id: `user.role.${role}` })}</Tag>
      );
    case UserRole.GUIDE:
      return (
        <Tag color="#87d068">{formatMessage({ id: `user.role.${role}` })}</Tag>
      );
    case UserRole.POLICY:
      return (
        <Tag color="#87d068">{formatMessage({ id: `user.role.${role}` })}</Tag>
      );
    case UserRole.INTRODUCE:
      return (
        <Tag color="#87d068">{formatMessage({ id: `user.role.${role}` })}</Tag>
      );
    default:
      return (
        <Tag style={{ marginRight: 0 }}>
          {formatMessage({ id: 'user.role.roleEmpty' })}
        </Tag>
      );
  }
};

export default UserRoleComponent;
