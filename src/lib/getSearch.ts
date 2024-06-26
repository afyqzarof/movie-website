import { MovieData } from "@/types/NowPlaying";
import axios, { AxiosResponse } from "axios";

export default async function getSearch(query: string) {
  const baseUrl = process.env.BASE_URL;
  const apiKey = process.env.API_KEY;
  try {
    const res: AxiosResponse<MovieData> = await axios.get(
      `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`,
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
}
