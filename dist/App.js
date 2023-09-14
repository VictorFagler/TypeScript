"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
var navbar_1 = require("./components/navbar");
var cart_1 = require("./pages/cart/cart");
var shop_1 = require("./pages/shop/shop");
var shopcontext_1 = require("./context/shopcontext");
var productdetails_1 = require("./pages/productdetails/productdetails");
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(shopcontext_1.ShopContextProvider, null,
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(navbar_1.Navbar, null),
                react_1.default.createElement(react_router_dom_1.Routes, null,
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(shop_1.Shop, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/cart", element: react_1.default.createElement(cart_1.Cart, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/productdetails/:id", element: react_1.default.createElement(productdetails_1.ProductDetails, null) }))))));
}
exports.default = App;
