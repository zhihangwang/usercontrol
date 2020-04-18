import { UserdbTableName } from "@common/db";
import { Read, Write } from "@common/localStrogeApi";
import { observable, action, runInAction } from "mobx";
import { IUserModel } from "@common/interface";

export class UserStore {
  @observable
  userList: IUserModel[] = [];

  constructor() {
    let userList = this.getAllUserList();
    Write(UserdbTableName, userList ?? []);
  }

  @action
  getUserList() {
    let userList = this.getAllUserList();
    runInAction(() => {
      this.userList = userList;
    });
  }

  @action
  deleteUser(userId: string) {
    let userList = this.getAllUserList();
    let filterUserList = userList.filter((x) => x.id !== userId);
    Write(UserdbTableName, filterUserList);
    this.getUserList();
  }

  @observable
  isShowCreateModel: boolean = false;
  @action
  toggleShowCreateModel() {
    runInAction(() => {
      this.isShowCreateModel = !this.isShowCreateModel;
    });
  }

  getAllUserList(): IUserModel[] {
    let userList = Read(UserdbTableName) ?? [];
    return userList;
  }

  guid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  @action
  createUser(user: IUserModel) {
    user.id = this.guid();
    let userList: IUserModel[] = this.getAllUserList();
    userList.unshift(user);
    Write(UserdbTableName, userList);
    this.getUserList();
  }
}

export default UserStore;
