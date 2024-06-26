import { createContext } from "react";

export interface UserInfosViewModel {
  _id: string,
  userName: string,
  phone: string,
  email: string,
  password: string,
  token:string,
}

export interface UserContextViewModel {
  isLoggedIn: boolean,
  userInfos: UserInfosViewModel,
  login: (userInfos: UserInfosViewModel) => void,
  logout: () => void,
}

const UserContext = createContext<UserContextViewModel>({
  isLoggedIn: false,
  userInfos: {
    _id: "",
    userName: "",
    phone: "",
    email: "",
    password: "",
    token:"",
  },
  login: (userInfos: UserInfosViewModel) => { },
  logout: () => { },
});

export default UserContext