import UserStore from "./user/userStore";

export class UserControl {
  userStore: UserStore;
  constructor() {
    this.userStore = new UserStore();
    
  }
}

export default new UserControl();
