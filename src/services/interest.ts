import { type Response } from "./auth";
import httpClient from "./http";
import { type createInterest } from "~/types/interest";

const createInterestFormatter = ({activities, confort_shows, genres}: createInterest) => {
  const data: Record<string, string | string[] | boolean> = {
    genres,
    confort_shows: [confort_shows],
  };

  for (const activity of activities) {
    data[activity] = true;
  }

  return data;
}


export async function createInterest(body: createInterest) {
  try {
    const formattedData = createInterestFormatter(body);

    const { data }: Response = await httpClient.post(`/interests`, formattedData);
    console.log(formattedData, data)
    return data;
  } catch (error) {
      throw new Error();
  }
}