/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { destroyCookie, setCookie } from "nookies";
import { type NextRouter } from "next/router";

import httpClient from "./http";
import { type UserDataDashboard, type UserLogin } from "~/types/user";
import { type AxiosResponse, type AxiosError } from "axios";

export async function login({ email, password }: UserLogin) {
  try {
    const { data }: AxiosResponse<UserDataDashboard> = await httpClient.post("/auth/login", {
      email,
      password,
    });

    setCookie(undefined, "access_token", data.access_token, {
      secure: false,
      maxAge: 60 * 60 * 12,
    });
    return data.user;
  } catch (error: unknown) {
    const err: AxiosError<UserDataDashboard> = error as AxiosError<UserDataDashboard>;
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
    destroyCookie(undefined, "g_token");
  } catch (error) {
    console.log(error);
  }
}

export async function googleLogin(router: NextRouter, token: string, g_token?: string) {
  try {
    setCookie(undefined, "access_token", token, {
      secure: false,
      maxAge: 60 * 60 * 12,
    });

    if (g_token){
      setCookie(undefined, "g_token", g_token, {
        secure: false,
        maxAge: 60 * 60 * 12,
      });
    }

    await router.push('/dashboard')
  } catch (error) {
    await router.push('/login')
  }
}