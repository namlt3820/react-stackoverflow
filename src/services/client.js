import db from "../data/db.json";

const loadPagesFromServer = ({ limit, offset, mode }) => ({
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

export default {
  loadPagesFromServer,
  searchTag
};
