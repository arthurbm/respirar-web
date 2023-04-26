export type UserLogin = {
  email: string;
  password: string;
};

export type User = {
  email: string;
  password: string;
  name: string;
};

export type UserDataDashboard = {
  access_token: string;
  user: User;
  email: string;
  statusCode: number;
  hasInterest: boolean;
}