export type AppNavigationParamList = {
  Login: { login: (username: string, password: string) => Promise<void> };
  Dashboard: undefined;
};
