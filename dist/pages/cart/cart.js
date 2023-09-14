"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var react_1 = __importStar(require("react"));
var products_1 = require("../../products");
var shopcontext_1 = require("../../context/shopcontext");
var cartItem_1 = require("./cartItem");
require("./cart.css");
var react_router_dom_1 = require("react-router-dom");
var Cart = function () {
    var _a = (0, react_1.useContext)(shopcontext_1.ShopContext), cartItems = _a.cartItems, getTotalCartAmount = _a.getTotalCartAmount;
    var totalAmount = getTotalCartAmount();
    var navigate = (0, react_router_dom_1.useNavigate)();
    // useState to manage the cartItems state
    var _b = (0, react_1.useState)(cartItems), cartItemsState = _b[0], setCartItems = _b[1]; // Initialize with cartItems
    // Load cart data from localStorage on mount
    (0, react_1.useEffect)(function () {
        var savedCart = localStorage.getItem('cart');
        if (savedCart) {
            var parsedCart = JSON.parse(savedCart);
            setCartItems(parsedCart);
        }
    }, []);
    // Save cart data to localStorage whenever cartItemsState changes
    (0, react_1.useEffect)(function () {
        localStorage.setItem('cart', JSON.stringify(cartItemsState));
    }, [cartItemsState]);
    return (react_1.default.createElement("div", { className: "cart" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("h1", null, "Your Cart"),
            react_1.default.createElement("div", { className: "cartItems" }, products_1.PRODUCTS.map(function (product) {
                var itemQuantity = cartItems[product.id];
                if (itemQuantity > 0) {
                    return react_1.default.createElement(cartItem_1.CartItem, { data: product, key: product.id });
                }
                return null;
            })),
            totalAmount > 0 ? (react_1.default.createElement("div", { className: "checkout" },
                react_1.default.createElement("p", null,
                    "Subtotal: $",
                    totalAmount),
                react_1.default.createElement("button", { onClick: function () { return navigate('/'); } }, "Continue shopping"),
                react_1.default.createElement("button", null, "Checkout"))) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("h3", null, "Your Cart is Empty"),
                react_1.default.createElement("button", { className: "backToShop", onClick: function () { return navigate('/'); } }, "Back to shop"))))));
};
exports.Cart = Cart;
