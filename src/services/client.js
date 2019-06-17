import db from "../data/db.json";

const loadQuestions = ({limit, offset}) => ({
  data: db.questions.slice(offset, offset+ limit),
  meta: {
    pageCount: Math.ceil(db.questions.length / limit)
  }
})

const searchQuestion = ({limit, title}) => {
  var result = {meta: {}};
  result.data = db.questions.filter(question => question.title.includes(title));
  result.meta.pageCount = Math.ceil(result.data.length / limit)
  return result;
}

const loadTags = ({ limit, offset, mode }) => ({
  data: db.tags.slice(offset, offset + limit),
  meta: {
    pageCount: Math.ceil(db.tags.length / limit)
  }
});

const searchTag = ({ limit, title }) => {
  var result = {meta: {}};
  result.data = db.tags.filter(tag => tag.title === title);
  result.meta.pageCount = Math.ceil(result.data.length / limit)
  return result;
};


const load = ({ limit, offset, mode }) => ({
  data: db.tags.slice(offset, offset + limit),
  meta: {
    pageCount: Math.ceil(db.tags.length / limit)
  }
});

const search = ({ limit, title }) => {
  var result = {meta: {}};
  result.data = db.tags.filter(tag => tag.title === title);
  result.meta.pageCount = Math.ceil(result.data.length / limit)
  return result;
};

export default {
  loadQuestions,
  searchQuestion,
  loadTags,
  searchTag,
  load,
  search
};
