import { Read, Write } from "@common/localStrogeApi";
import { Sex } from "@common/enum";
import { observable, action, runInAction } from "mobx";
export class UserCreateStore {
  guid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}

export default UserCreateStore;
