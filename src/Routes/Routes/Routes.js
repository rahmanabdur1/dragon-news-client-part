import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Category from '../../Pages/Category/Category/Category'
import News from '../../Pages/News/News'
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register'/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsAndCondition from "../../Pages/Others/TermsAndCondition/TermsAndCondition";
import Articles from "../../Pages/Articles/Articles";
import Profile from "../../Pages/Others/Profile/Profile";

export const routes =createBrowserRouter([
      {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home/>,
                // loader: ()=> fetch ('https://dragon-news-server-seven.vercel.app/news')
            },
            {
                path: '/category/:id',
                element:<Category></Category>,
               loader: ({params})=>fetch(`https://dragon-news-server-side.vercel.app/category/${params.id}`),
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`https://dragon-news-server-seven.vercel.app/news/${params.id}`)
            },
            {
                path:'`/news/:newsId/related`',
                element:<Articles></Articles>,
            //    loader: ({params}) =>  fetch(`https://dragon-news-server-side.vercel.app/news/${params.id}/related`)
                
            },
          
           {
            path: '/login',
            element: <Login></Login>,
           },
           {
            path:'/register',
            element:<Register></Register>
           },
           {
            path:'/terms',
            element:<TermsAndCondition></TermsAndCondition>
           },
           {
            path: '/profile',
            element:<PrivateRoute><Profile></Profile></PrivateRoute>,
           }
        ]
      }
])