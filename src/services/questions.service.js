import Base from "./base.service.js";

export default class Questions extends Base {
  constructor() {
    super("questions");
  }
  getHomeQuestions() {
    return this.get();
  }
}
