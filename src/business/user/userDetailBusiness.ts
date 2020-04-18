import { IAppStoreContainer, IUserModel } from "@common/interface";
export const UserDetailBusiness = ({
  store,
}: IAppStoreContainer): IUserDetailBusiness => {
  const { userDetailStore } = store;

  return {
    user: userDetailStore.user,
    getUser: (userId: string) => {
      userDetailStore.getUser(userId);
    },
  };
};

export interface IUserDetailBusiness {
  user: IUserModel;
  getUser: (userId: string) => void;
}
