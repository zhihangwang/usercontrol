import { UserControl } from "./../store/store";
export interface IUserModel {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  sex: number;
  age: number;
  birthday: string;
}

export interface IAppStoreContainer {
  store: UserControl;
}