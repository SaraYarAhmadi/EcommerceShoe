import Home  from "./page/Home/Home";
import About from "./page/About/About";
import Category from "./page/Category/Category";
import ArticleInfo from "./page/ArticleInfo/ArticleInfo";
import CourseInfo from "./page/CourseInfo/productInfo";
import Register from "./page/Register/Register";
import Login from "./page/Login/Login";
import NotFoundPage from "./page/NotFoundPage/NotFoundPage";
import ProductCart from "./page/ProductCart/ProductCart";


const routes =[
    {path:'/' , element:<Home/>},
    {path:'/Product-info/:productInfo' , element:<CourseInfo/>},
    {path:'/Category-info/category' , element:<Category/>},
    {path:'/Product-cart/:productCart' , element:<ProductCart/>},
    {path:'/Article-info/article' , element:<ArticleInfo/>},
    {path:'/register' , element:<Register/>},
    {path:'/login' , element:<Login/>},
    {path:'*' , element:<NotFoundPage/>},
    
]



export default routes