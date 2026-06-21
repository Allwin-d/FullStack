import { jwtDecode } from "jwt-decode";

const useAuth = () => {
  const token = localStorage.getItem("Token");

  if (!token) {
    return null;
  }

  return jwtDecode(token);
};

export default useAuth;
