import { defineStore } from "pinia";

const defaultUserData = {
  name: "",
};

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: { ...defaultUserData },
    token: undefined,
  }),
  getters: {
    // TODO Fix any
    getUser(): any {
      return this.user;
    },
    // TODO Fix any
    getToken(): any {
      return this.token;
    },
  },
  actions: {
    // TODO Fix any
    setUser(user: any) {
      this.user = user;
    },
    // TODO Fix any
    setToken(token: any) {
      this.token = token;
    },
  },
});
