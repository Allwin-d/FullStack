export type userDetailType = {
  userName: string;
  email: string;
  password: string;
  role: "" | "Admin" | "Role";
};

export type responseDataType = {
  success: boolean;
  message: string;
  userName: string;
  email: string;
  role: string;
};
