import React from "react";
import ShoppingCartTable from "../shopping-cart-table";
import { connect } from "react-redux";
import { clearCart } from "../../actions";
import { useNavigate } from "react-router-dom";


const CartPage = ({clearCart}) => {
    const navigate = useNavigate();
    const clearCartAnd = () => {
        clearCart();
        navigate('/');
    };
    return (
        <div>
            <ShoppingCartTable/>
            <button className="btn btn-primary" onClick={clearCartAnd}>Complete</button>
        </div>
    );
};

export default connect(null, { clearCart })(CartPage);