
import Base from "./base.service.js";

export default class TopicsDetails extends Base {
    constructor() {
        super("topics");
    }
    getTopicsDetail(idTopic) {
        this.path = `questions?topic=`+idTopic+`&sort=-createdAt,name,desc`
        return this.get();
    }
    getMemberInTopic(topicID) {
        this.path = `topics/`+topicID+`/members`
        return this.get()
    }
    postQuestionInTopic(idTopicAdd, body) {
        this.path = `topics/`+idTopicAdd+`/questions`
        return this.post(body);
    }
    postMemberInTopic(topicId, body) {
        this.path = `topics/`+topicId+`/members`
        return this.post(body)
    }
    deleteMember(topicId, body) {
        this.path = `topics/`+topicId+`/members`
        return this.removeMember(body)
    }
}