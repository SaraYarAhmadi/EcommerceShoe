import { createContext } from "react";

export interface UserInfosViewModel {
    _id: string,
    userName: string,
    phone: string,
    email: string
}

export interface UserContextViewModel {
    isLoggedIn: boolean,
    userInfos: UserInfosViewModel,
    login: (userInfos: UserInfosViewModel) => void,
    logout: () => void,
    isLoading: boolean,
}

const UserContext = createContext<UserContextViewModel>({
    isLoggedIn: false,
    userInfos: {
        _id: "",
        userName: "",
        phone: "",
        email: "",
    },
    login: (userInfos: UserInfosViewModel) => { },
    logout: () => { },
    isLoading: true,
});

export default UserContext