import { destroyCookie, setCookie } from "nookies";

import httpClient from "./http";
import { type User, type UserLogin } from "~/types/user";

export type Response = {
  data: {
    access_token: string;
    user: User
  }
}

export async function login({ email, password }: UserLogin) {
  try {
    const response: Response = await httpClient.post("/auth/login", {
      email,
      password,
    });

    setCookie(undefined, "access_token", response.data.access_token, {
      secure: false,
      maxAge: 60 * 60 * 4,
    });
    return response.data.user;
  } catch (error) {
    throw error;
  }
}

export function logout() {
  try {
    destroyCookie(undefined, "access_token");
  } catch (error) {
    console.log(error);
  }
}


