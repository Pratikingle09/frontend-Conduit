import axios from "axios";
import errorHandler from "../helpers/errorHandler";

async function toggleFollow({ following, headers, username }) {
  try {
    const { data } = await axios({
      headers,
      method: following ? "DELETE" : "POST",
      url: `https://new-deployment-project.onrender.com/api/profiles/${username}/follow`,
    });

    return data.profile;
  } catch (error) {
    errorHandler(error);
  }
}

export default toggleFollow;
