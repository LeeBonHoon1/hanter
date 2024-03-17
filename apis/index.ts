import axios from "axios";

const getArtists = async () => {
  const res = await axios.get("http://localhost:8080/artists");
  return res.data;
};

const getChart = async (page: number, isDetail: boolean) => {
  const res = await axios.get(
    `http://localhost:8080/chart?_page=${page}&_per_page=${isDetail ? 25 : 10}`
  );
  return res.data;
};

const getNews = async (page: number) => {
  const res = await axios.get(
    `http://localhost:8080/news?_page=${page}&_per_page=3`
  );
  return res.data;
};

const getRealtimeChart = async () => {
  const res = await axios.get("http://localhost:8080/realtime_chart");
  return res.data;
};

const getRecommendedChart = async () => {
  const res = await axios.get("http://localhost:8080/recommended_chart");
  return res.data;
};

const APIs = {
  getArtists,
  getChart,
  getRealtimeChart,
  getRecommendedChart,
  getNews,
};

export default APIs;
