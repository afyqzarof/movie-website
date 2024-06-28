import { MovieDetails } from "@/types/MovieDetails";
import axios, { AxiosResponse } from "axios";

const getMovieDetails = async (movieId: string) => {
  const baseUrl = process.env.BASE_URL;
  const apiKey = process.env.API_KEY;
  try {
    const res: AxiosResponse<MovieDetails> = await axios.get(
      `${baseUrl}/movie/${movieId}?api_key=${apiKey}`,
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default getMovieDetails;
