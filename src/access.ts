import { ConnectState } from './models/connect';
import { UserRole } from './utils/constant';

export default function(initialState: Partial<ConnectState>) {
  const { user } = initialState;
  return {
    //Category
    canReadCategory: true,
    canUpdateCategory: true,
    canAddCategory: true,
    canDeleteCategory: true,

    // Customer
    canGetListCustomer: true,
    canReadCustomer: true,

    // IoC Document
    canApproveDocument: true,
    canRejectDocument: true,
    canDeleteDocument: true,

    // Manage Account
    canAddAnyUser: true,
    canReadAnyUser: true,
    canUpdateAnyUser: true,
    canReadAccessHistory: true,

    // Manage user group
    canAddAnyUserGroup: true,

    // report
    canReadReport: true,

    // setting
    canReadAnySetting: true,
    canUpdateAnySetting: true,
    //Admin Account
    canUpdateOperator:true,
  };
}
