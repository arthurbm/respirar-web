/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { parseCookies } from "nookies";
import create from "zustand";

import { login, logout } from "../services/auth";
import { type User, type UserLogin } from "~/types/user";
import { type NextRouter } from "next/router";

type userState = {
  user: UserLogin | null;
  login: ({ email, password }: UserLogin, router: NextRouter) => Promise<void>;
  logout: (router: NextRouter) => Promise<void>;
  isLoggedIn: () => void;
  isLogged: boolean;
  protectPage: (needsAuth: boolean, router: NextRouter) => Promise<void>;
};

const useUserStore = create<userState>((set) => ({
  user: null,
  isLogged: false,
  login: async ({ email, password }: UserLogin, router) => {
    try {
      const userData: User = await login({ email, password });
      await router.push("/meus-interesses");

      set({ user: userData, isLogged: true });
    } catch (error) {
      throw error
    }
  },
  logout: async (router) => {
    try {
      logout();
      set({ user: null, isLogged: false });
      await router.push("/login");
    } catch (error) {
      console.log(error);
    }
  },
  isLoggedIn: () => {
    const { access_token } = parseCookies(undefined);
    if (access_token) set({ isLogged: true });
    else set({ isLogged: false });
  },
  protectPage: async (needsAuth: boolean, router: NextRouter) => {
    const { access_token } = parseCookies(undefined);

    if (!access_token && needsAuth) {
      await router.push("/login");
    } else if (access_token && !needsAuth) {
      await router.push("/meus-interesses");
    }
  },
}));

export default useUserStore;
