import { MovieData } from "@/types/NowPlaying";
import axios, { AxiosResponse } from "axios";

export default async function getNowPlaying(page: number = 1) {
  const baseUrl = process.env.BASE_URL;
  const apiKey = process.env.API_KEY;
  try {
    const res: AxiosResponse<MovieData> = await axios.get(
      `${baseUrl}/movie/now_playing?api_key=${apiKey}&page=${page}`,
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
}
