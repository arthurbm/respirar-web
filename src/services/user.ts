/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { type Response } from "./auth";
import httpClient from "./http";
import { type User } from "~/types/user";


export async function createUser(body: User) {
  try {
    const { data }: Response = await httpClient.post(`/users`, body);

    return data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      throw new Error(error.response?.data?.message);
    } else {
      throw new Error("Ocorreu um erro ao completar seu cadastro");
    }
  }
}