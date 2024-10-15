
import React, { useEffect, useState, useCallback } from 'react';
import Header from './component/Header/Header';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import './App.css';
import Footer from './component/Footer/Footer';
import UserContext, { UserInfosViewModel } from './context/userContext';
import { ProductContext, ProductContextViewModel } from './context/productContex';
import Loading from './component/Loading/Loading';
import ScrollToTop from './HOC/ScrollToTop';

interface UserDataViewModel {
  isLoggedIn: boolean,
  userInfos: UserInfosViewModel,
}

const userInfoInitialValues: UserInfosViewModel = {
  _id: "",
  userName: "",
  phone: "",
  email: "",
  password: "",
  token: "",
};

const userDataResetValue: UserDataViewModel = {
  isLoggedIn: false,
  userInfos: userInfoInitialValues,
};

function App() {
  const router = useRoutes(routes);
  const [userData, setUserData] = useState<UserDataViewModel>(userDataResetValue);
  const [allProducts, setAllProducts] = useState<ProductContextViewModel[]>([]);
  const [refreshTokenData, setRefreshTokenData] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const getAllProducts = async () => {
    const res = await fetch(`https://sarayarahmadi-fullstack-ecommerceshoe.liara.run/api/products`);
    const data = await res.json();

    setLoading(false);
    setAllProducts(data);
  };

  useEffect(() => {
    setLoading(true);
    getAllProducts();
  }, [])

  const login = useCallback((userInfos: UserInfosViewModel): void => {
    const newUserData = {
      userInfos,
      isLoggedIn: true,
    };

    setUserData(newUserData);
    const userId = userInfos._id;
    setRefreshTokenData(userInfos?.token);
    localStorage.setItem('user', JSON.stringify({ userId }));
  }, []);

  const logout = useCallback(() => {
    setUserData(userDataResetValue);
    localStorage.removeItem('user');
  }, []);



  function refreshToken() {
    const user = localStorage.getItem("user");
    const userId = user ? JSON.parse(user)?.userId : '';
    if (userId) {
      fetch(`https://sarayarahmadi-fullstack-ecommerceshoe.liara.run/api/user/${userId}`)
        .then(res => res.json())
        .then((data) => {
          const { user } = data;

          setUserData({
            isLoggedIn: true,
            userInfos: {
              ...user,
              userName: user?.userName ? user?.userName : 'ورود / عضویت',
            },
          });
        });
    } else {
      setUserData(userDataResetValue);
    }
  }

  useEffect(() => {
    refreshToken()

  }, [login])


  return (
    <UserContext.Provider
      value={{ ...userData, login, logout, }}    >
      <ProductContext.Provider value={allProducts}      >
        <ScrollToTop />
        {loading ? <Loading /> :
          <>
            <Header />
            {router}
            <Footer />
          </>}
      </ProductContext.Provider>
    </UserContext.Provider>
  );
}

export default App;