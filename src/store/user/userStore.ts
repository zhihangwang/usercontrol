import { UserModel } from "@common/entity";
import { Read, Write } from "@common/localStrogeApi";
import { Sex } from "@common/enum";
import UserCreateStore from "./userCreateStore";
import { observable, action, runInAction } from "mobx";

export class UserStore {
  @observable
  userList: UserModel[] = [];

  userdbName = "user";
  userCreateStore: UserCreateStore;
  constructor() {
      Write(this.userdbName,[]);
    this.userCreateStore = new UserCreateStore();
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
    Write(this.userdbName, filterUserList);
    this.getUserList();
  }

  getAllUserList(): UserModel[] {
    let userList = Read(this.userdbName) ?? [];
    return userList;
  }
}

export default UserStore;
