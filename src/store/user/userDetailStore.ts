import { UserdbTableName } from "./../../common/db";
import { Read } from "@common/localStrogeApi";
import { Sex } from "@common/enum";
import { IUserModel } from "@common/interface";
import { observable, action, runInAction } from "mobx";
import _ from "lodash";

export class UserDetailStore {
  @observable
  user: IUserModel = {
    id: "",
    sex: Sex.Man,
    age: 0,
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    password: "",
  };

  @action
  getUser(userId: string) {
    let allUserList: IUserModel[] = Read(UserdbTableName);
    let user = _.first(allUserList.filter((x) => x.id === userId));
    if (user) {
      runInAction(() => {
        this.user = user as IUserModel;
      });
    }
  }
}

export default UserDetailStore;
