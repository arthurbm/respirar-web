/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { parseCookies } from "nookies";
import httpClient from "./http";
import { type UserDataDashboard, type User } from "~/types/user";
import { type AxiosResponse } from "axios";
import { type ChosenActivities, type UserActivitiesParam } from "~/types/activities";


export async function createUser(body: User) {
  try {
    const { data }: AxiosResponse<User> = await httpClient.post(`/users`, body);

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
    const { data }: AxiosResponse<UserDataDashboard> = await httpClient.get(`/dashboard`);
    return data
  } catch (error) {
    throw new Error();
  }
}

export async function getRecommendedActivities(body: UserActivitiesParam) {
  try {
    const { g_token } = parseCookies();
    const { data }: AxiosResponse<ChosenActivities> = await httpClient.post(`/dashboard/activities`, body, {
      headers: {
        Authorization: `Bearer ${g_token || ''}`,
      }
    });

    return data;
  } catch (error) {
    throw new Error();
  }
}
