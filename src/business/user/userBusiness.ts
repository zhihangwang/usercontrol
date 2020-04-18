import { IAppStoreContainer, IUserModel } from "@common/interface";
export const UserBusiness = ({ store }: IAppStoreContainer): IUserBusiness => {
  const { userStore } = store;

  return {
    userList: userStore.userList,
    isShowCreateModel: userStore.isShowCreateModel,
    getUserList: () => userStore.getUserList(),
    deleteUser: (userId: string) => userStore.deleteUser(userId),
    toggleShowCreateModel: () => userStore.toggleShowCreateModel(),
    createUser: (user: IUserModel) => {
      userStore.createUser(user);
    },
  };
};

export interface IUserBusiness {
  userList: IUserModel[];
  isShowCreateModel: boolean;
  getUserList: () => void;
  deleteUser: (userId: string) => void;
  toggleShowCreateModel: () => void;
  createUser: (user: IUserModel) => void;
}
