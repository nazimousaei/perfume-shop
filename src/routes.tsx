import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
import Register from "./Pages/Register";
import SingIn from "./Pages/SingIn";


type route = {
    path:string;
    element:React.ReactNode
}

const routes:route[] = [
    {path:'/' , element:<Home/>},
    {path:'/product' , element:<ProductDetail/>},
    {path:'/register' , element:<Register/>},
    {path:'/signin' , element:<SingIn/>},

]

export default routes;