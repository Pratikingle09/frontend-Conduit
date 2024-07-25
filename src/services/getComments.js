import axios from "axios";
import errorHandler from "../helpers/errorHandler";

async function getComments({ slug }) {
  try {
    const { data } = await axios({ url: `https://new-deployment-project.onrender.com/api/articles/${slug}/comments` });

    return data.comments;
  } catch (error) {
    errorHandler(error);
  }
}

export default getComments;
