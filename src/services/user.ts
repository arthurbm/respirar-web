import { type Response } from "./auth";
import httpClient from "./http";
import { type User } from "~/types/user";


export async function createUser(body: User) {
  try {
    const { data }: Response = await httpClient.post(`/users`, body);

    return data;
  } catch (error) {
    // if (error?.response?.data?.message) {

    // }
    console.log(error);
  }
}
