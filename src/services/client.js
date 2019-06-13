import db from "../data/db.json";

const loadPagesFromServer = ({limit, offset, mode}) => {
  return {
    data: db.tags.slice(offset, offset + limit),
    meta: {
      pageCount: Math.ceil(db.tags.length / limit)
    }
  }
}
export default {
  loadPagesFromServer
};
