import { IAppStoreContainer } from "@common/interface";
import { UserControl } from "./../../store/store";
import { UserModel } from "@common/entity";
export const UserBusiness = ({ store }: IAppStoreContainer): IUserBusiness => {
  console.log(store);
  const { userStore } = store;

  return {
    userList: userStore.userList,
    getUserList: () => userStore.getUserList(),
  };
};

export interface IUserBusiness {
  userList: UserModel[];
  getUserList: () => void;
}
