import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductListPage from "./pages/ProductListPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import VerifyPage from "./pages/VerifyPage.jsx";
import CartListPage from "./pages/CartListPage.jsx";
import ValidationHelper from "./utility/ValidationHelper.js";

const App = () => {
    if(ValidationHelper.isLogin()){
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<ProductListPage />} />
                        <Route path="/cart-list" element={<CartListPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }else{
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<ProductListPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/verify" element={<VerifyPage />} />
                        <Route path="/cart-list" element={<CartListPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );

    }


};

export default App;