/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { parseCookies } from "nookies";
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

export async function getUserDashboard() {
  try {
    // const { g_token } = parseCookies();

    // const { data }: Response = await httpClient.get(`/dashboard`, g_token ? {
    //   headers: {
    //     Authorization: `Bearer ${g_token}`,
    //   }
    // } : undefined);

    const { data }: Response = await httpClient.get(`/dashboard`);

    return data;
  } catch (error) {
    throw new Error();
  }
}

export async function getUserActivities(body: {email: string, humour: number}) {
  try {
    const { g_token } = parseCookies();

    const { data }: Response = await httpClient.post(`/dashboard/activities`, body, {
      headers: {
        Authorization: `Bearer ${g_token || ''}`,
      }
    });

    return data;
  } catch (error) {
    throw new Error();
  }
}