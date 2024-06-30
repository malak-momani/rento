import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Rent from "./Components/Home/Presentation/Rent/Rent";
import { path } from "./constants/pages";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path={path.home} element={/**to do <Layout /> */<></>}>
                <Route index element={<Home/>} />
            </Route>
        </Routes>
           
        </BrowserRouter>
    );
}

export default Router;