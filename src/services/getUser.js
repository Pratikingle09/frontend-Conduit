import axios from "axios";
import errorHandler from "../helpers/errorHandler";

async function getUser({ headers }) {
  try {
    const { data } = await axios({ headers, url: "https://new-deployment-project.onrender.com/api/user" });

    return data.user;
  } catch (error) {
    errorHandler(error);
  }
}

export default getUser;
