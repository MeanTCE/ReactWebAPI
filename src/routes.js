import { Route, Routes } from "react-router-dom";
import Login from './pages/login/Login'

const routes = (
    <Routes>
        {/* {Frontend} */}
        <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<register />} /> */}

        {/* Backend */}
        {/* <Route path="/backend/dashboard" element={<dashboard />} /> */}
    </Routes>
)

export default routes