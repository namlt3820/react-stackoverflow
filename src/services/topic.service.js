import Base from "./base.service.js";

export default class Topics extends Base {
  constructor() {
    super("topics");
  }
  getTopics(params) {
    return this.get(params);
  }
  postTopic(body) {
    this.path = `topics?sort=-createdAt,name,desc`;
    return this.post(body);
  }
  postQuestion(topicId, topicInput, data) {
    this.path = `/topics/${topicId}/questions`;
    this.post(data).then(() => {
      window.location.href = `/my-topics/${topicInput}.${topicId}.html`;
    });
  }
  patchTopic(id, param) {
    return this.patch(id, param);
  }
  deleTopic(id) {
    return this.delete(id);
  }
}
