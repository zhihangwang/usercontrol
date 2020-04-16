// import { UserModel } from "../common/Entity";
// import { Read, Write } from "../common/BaseApi";
// import _ from "lodash";

// export const GetUserList = (): UserModel[] => {
//   return Read("userList") ?? [];
// };

// export const CreateUser = (user: UserModel): UserModel[] => {
//   let userList = GetUserList();
//   userList.push(user);
//   Write("userList", userList);
//   return userList;
// };

// export const RemoveUser = (userId: string): UserModel[] => {
//   let userList = GetUserList();
//   userList = userList.filter((x) => x.id !== userId);
//   Write("userList", userList);
//   return userList;
// };

// export const GetUser = (userId: string): UserModel => {
//   let userList = GetUserList();
//   userList = userList.filter((x) => x.id === userId);
//   return _.first(userList) as UserModel;
// };

export class  s{
  
}
