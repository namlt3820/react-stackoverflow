import Base from "./base.service.js";

export default class Questions extends Base {
    constructor() {
        super("questions");
    }

  getQuestionList(offset, limit) {
      if (!!offset || !!limit) {
          this.path = `questions?limit=${limit}&offset=${offset}`;
      } else {
          this.path = `questions?limit=10&offset=0`;
      }
      return this.get();
  }
  getQuestionList(params) {
    return this.get(params);
    }
  getQuestions(params) {
    this.path = `questions/my-questions?sort=-createdAt,name,desc`
    return this.get(params);
  }
  postQuestion(body) {
    this.path = `questions?sort=-createdAt,name,desc`
    return this.post(body);
  }
  patchQuestions(id, param) {
    return this.patch(id, param);
  }
  deleQuestions(id) {
      return this.delete(id);
  }
}
