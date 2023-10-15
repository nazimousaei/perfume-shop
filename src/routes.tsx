import Home from "./Pages/Home";
import Products from './Pages/Products'
import ProductDetail from "./Pages/ProductDetail";
import Register from "./Pages/Register";
import SingIn from "./Pages/SingIn";


type route = {
    path:string;
    element:React.ReactNode
}

const routes:route[] = [
    {path:'/' , element:<Home/>},
    {path:'/products/:page', element:<Products/>},
    {path:'/productInfo/:id' , element:<ProductDetail/>},
    {path:'/register' , element:<Register/>},
    {path:'/signin' , element:<SingIn/>},

]

export default routes;