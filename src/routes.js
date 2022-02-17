import { Route, Routes } from "react-router-dom";
import Login from './pages/login/Login'
import Register from "./pages/register/Register";
import Forgotpassword from './pages/forgotpassword/Forgotpassword'
import PageNotFound from './pages/pagenotfound/PageNotFound'
import Dashboard from "./pages/backend/dashboard/Dashboard"
import Product from './pages/backend/product/Product'

const Routess = () => {
    return(
    <Routes>
        {/* {Frontend} */}
        <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />

        {/* Backend */}
        <Route path="/backend/dashboard" element={<Dashboard />} />
        <Route path="/backend/product" element={<Product />} />

        <Route path="*" element={<PageNotFound />} />
    </Routes>
        )
    }

export default Routess