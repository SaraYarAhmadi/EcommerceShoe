import Home  from "./page/Home/Home";
import About from "./page/About/About";
import Category from "./page/Category/Category";
import ArticleInfo from "./page/ArticleInfo/ArticleInfo";
import CourseInfo from "./page/CourseInfo/CourseInfo";
import Register from "./page/Register/Register";
import Login from "./page/Login/Login";


const routes =[
    {path:'/' , element:<Home/>},
    {path:'/Course-info/:courseInfo' , element:<CourseInfo/>},
    {path:'/Category-info/:categoryName' , element:<Category/>},
    {path:'/Article-info/:articleName' , element:<ArticleInfo/>},
    {path:'/login' , element:<Login/>},
    {path:'/register' , element:<Register/>},
    
]
export default routes