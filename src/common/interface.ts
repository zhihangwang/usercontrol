import { UserControl } from "./../store/store";
export interface IUserModel {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  sex: number;
  age: number;
  password:string;
  birthday: string;
}

export interface IAppStoreContainer {
  store: UserControl;
}
