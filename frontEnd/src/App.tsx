
import Header from './component/Header/Header';
import {  useRoutes } from 'react-router-dom';
import routes from './routes';
import './App.css';
import Footer from './component/Footer/Footer';
import UserContext, { UserInfosViewModel } from './context/userContext';
import { useEffect, useState, useCallback } from 'react';
import { ProductContext, ProductContextViewModel } from './context/productContex';
import { BasketContext, BasketContextViweModel, initialProductBasket } from './context/basketContext';

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
  refreshToken: "",
};

const userDataResetValue: UserDataViewModel = {
  isLoggedIn: false,
  userInfos: userInfoInitialValues,
};

function App() {
  const router = useRoutes(routes);
  const [userData, setUserData] = useState<UserDataViewModel>(userDataResetValue);
  const [allProducts, setAllProducts] = useState<ProductContextViewModel[]>([]);
  const [basketProducts, setbasketProducts] = useState<BasketContextViweModel>(initialProductBasket);
  const AUTO_LOGOUT_TIME = 24 * 60 * 60 * 1000;

  const getAllProducts = async () => {
    const res = await fetch('http://localhost:7500/api/products');
    const data = await res.json();

    setAllProducts(data);
  }



  const getAllBasketProducts = async (refreshToken: string) => {
    try {
      const res = await fetch('http://localhost:7500/api/user/cart', {
        headers: {
          'Authorization': `Bearer ${refreshToken}` // استفاده از userData.userInfos
        }
      });
      const data = await res.json();
      setbasketProducts(data)
      console.log("basketdata", data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, [])

  const login = useCallback((userInfos: UserInfosViewModel): void => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      isLoggedIn: true,
      userInfos: userInfos,
    }));
    const userId = userInfos._id;
    localStorage.setItem('user', JSON.stringify({ userId }));
  }, []);

  const logout = useCallback(() => {
    setUserData(userDataResetValue);
    localStorage.removeItem('user');
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const userId = user ? JSON.parse(user)?.userId : '';
    if (userId) {
      fetch(`http://localhost:7500/api/user/${userId}`)
        .then(res => res.json())
        .then((data) => {
          const { user } = data;

          setUserData({
            isLoggedIn: true,
            userInfos: user,
          });
          getAllBasketProducts(user?.refreshToken);
        });
    } else {
    }

  }, [login])


  return (

    <UserContext.Provider
      value={{ ...userData, login, logout, }}    >
      <ProductContext.Provider value={allProducts}      >
        <BasketContext.Provider value={basketProducts}      >
          <Header />
          {router}
          <Footer />
        </BasketContext.Provider>
      </ProductContext.Provider>
    </UserContext.Provider>
  );
}

export default App;