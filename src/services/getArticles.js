import axios from "axios";
import errorHandler from "../helpers/errorHandler";

// prettier-ignore
async function getArticles({ headers, limit = 3, location, page = 0, tagName, username }) {
  try {
    const url = {
      favorites: `https://new-deployment-project.onrender.com/api/articles?favorited=${username}&&limit=${limit}&&offset=${page}`,
      feed: `https://new-deployment-project.onrender.com/api/articles/feed?limit=${limit}&&offset=${page}`,
      global: `https://new-deployment-project.onrender.com/api/articles?limit=${limit}&&offset=${page}`,
      profile: `https://new-deployment-project.onrender.com/api/articles?author=${username}&&limit=${limit}&&offset=${page}`,
      tag: `https://new-deployment-project.onrender.com/api/articles?tag=${tagName}&&limit=${limit}&&offset=${page}`,
    };

    const { data } = await axios({ url: url[location], headers });

    return data;
  } catch (error) {
    errorHandler(error);
  }
}

export default getArticles;
