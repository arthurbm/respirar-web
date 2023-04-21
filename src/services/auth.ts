/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { destroyCookie, setCookie } from "nookies";
import { type NextRouter } from "next/router";

import httpClient from "./http";
import { type User, type UserLogin } from "~/types/user";
import { type AxiosError } from "axios";

export type ResponseData = {
  access_token: string;
  user: User;
  statusCode: number;
}

export type Response = {
  data: ResponseData
}

export async function login({ email, password }: UserLogin) {
  try {
    const { data }: Response = await httpClient.post("/auth/login", {
      email,
      password,
    });

    setCookie(undefined, "access_token", data.access_token, {
      secure: false,
      maxAge: 60 * 60 * 12,
    });
    return data.user;
  } catch (error: unknown) {
    const err: AxiosError<ResponseData> = error as AxiosError<ResponseData>;
    if (err?.response?.data.statusCode === 401) {
      throw new Error("Dados de acesso incorretos");
    } else {
      throw new Error("Ocorreu um erro ao realizar o login");
    }
  }
}

export function logout() {
  try {
    destroyCookie(undefined, "access_token");
  } catch (error) {
    console.log(error);
  }
}

export async function googleLogin(token: string, router: NextRouter) {
  try {
    setCookie(undefined, "access_token", token, {
      secure: false,
      maxAge: 60 * 60 * 12,
    });

    await router.push('/interesses/meus-interesses')
  } catch (error) {
    await router.push('/login')
  }
}