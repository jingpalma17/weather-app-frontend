import { defineStore } from "pinia";
import { reactive, watchEffect } from 'vue';

const state = reactive<Auth0ClientStateInterface>({
  loading: true,
  isAuthenticated: false,
  user: {},
  popupOpen: false,
  error: null,
  accessToken: undefined,
});

const defaultUserData = {
  name: "",
};

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: { ...defaultUserData },
    token: undefined
  }),
  getters: {
    getUser(): any {
      // TODO Fix any
      return this.user;
    },
    getToken(): any {
      // TODO Fix any
      return this.token;
    },
  },
  actions: {
    setUser(user: any) {
      // TODO Fix any
      this.user = user;
    },
    setToken(token: any) {
      // TODO Fix any
      this.token = token;
    }
  },
});