import { UserDetailStore } from "./user/userDetailStore";
import UserStore from "./user/userStore";

export class UserControl {
  userStore: UserStore;
  userDetailStore: UserDetailStore;
  constructor() {
    this.userStore = new UserStore();
    this.userDetailStore = new UserDetailStore();
  }
}

export default new UserControl();
