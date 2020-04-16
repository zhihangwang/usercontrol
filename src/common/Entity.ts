import { IUserModel } from "./interface";

export class UserModel implements IUserModel {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  sex: number;
  age: number;
  birthday: string;
  constructor(rawData: IUserModel) {
    this.id = rawData.id;
    this.userName = rawData.userName;
    this.firstName = rawData.firstName;
    this.lastName = rawData.lastName;
    this.sex = rawData.sex;
    this.age = rawData.age;
    this.birthday = rawData.birthday;
  }
}
