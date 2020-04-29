import axios from "axios";

export const getData = async (onProgress) => {
  try {
    const options = {
      onDownloadProgress: function(progressEvent) {
        let percentCompleted =
          Math.round((progressEvent.loaded * 10000) / progressEvent.total) /
          100;
        if (onProgress) onProgress(percentCompleted);
        //return percentCompleted;
      },
    };
    const contents = await axios.get("http://localhost:1337/contents", options);
    return contents;
  } catch (e) {
    throw new Error("Error with database");
  }
};
