import db from "../data/db.json";

const fetchTags = () => {
  return db.tags
};

export default {
  fetchTags
};
