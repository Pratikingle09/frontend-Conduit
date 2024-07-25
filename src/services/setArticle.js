import axios from "axios";
import errorHandler from "../helpers/errorHandler";

async function setArticle({ body, description, headers, slug, tagList, title }) {
  try {
    const { data } = await axios({
      data: { article: { title, description, body, tagList } },
      headers,
      method: slug ? "PUT" : "POST",
      url: slug ? `https://new-deployment-project.onrender.com/api/articles/${slug}` : "https://new-deployment-project.onrender.com/api/articles",
    });

    return data.article.slug;
  } catch (error) {
    errorHandler(error);
  }
}

export default setArticle;
