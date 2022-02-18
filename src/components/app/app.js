import React from "react";
import './app.css';
import { withBookstoreService } from '../hoc'
import { Routes, Route } from 'react-router-dom';
import ShopHeader from "../shop-header";
import { HomePage, CartPage } from '../pages';


const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/cart" element={<CartPage />}/>
                <Route path="*" element={<h2>404</h2>}/>
            </Routes>
        </main>
    );
};

export default withBookstoreService()(App);