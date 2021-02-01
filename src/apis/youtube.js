import axios from "axios";

const KEY = "AIzaSyCsAIDHvTnLjQCsgNJ3YBQGOYISBWeBnlI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    types: "video",
    maxResults: "5",
    key: KEY,
  },
});
