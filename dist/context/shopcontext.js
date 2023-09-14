"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.ShopContextProvider = exports.ShopContext = void 0;
var react_1 = __importStar(require("react"));
var products_1 = require("../products");
exports.ShopContext = (0, react_1.createContext)(undefined);
var getCartItems = function () {
    return {};
};
var ShopContextProvider = function (props) {
    var _a = (0, react_1.useState)(getCartItems()), cartItems = _a[0], setCartItems = _a[1];
    (0, react_1.useEffect)(function () {
        var savedCart = localStorage.getItem('cart');
        if (savedCart) {
            var parsedCart = JSON.parse(savedCart);
            setCartItems(parsedCart);
        }
    }, []);
    var addToCart = function (itemId) {
        setCartItems(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[itemId] = (prev[itemId] || 0) + 1, _a)));
        });
    };
    var removeFromCart = function (itemId) {
        setCartItems(function (prev) {
            var _a;
            var updatedCart = __assign(__assign({}, prev), (_a = {}, _a[itemId] = prev[itemId] - 1, _a));
            if (updatedCart[itemId] < 1) {
                delete updatedCart[itemId];
            }
            return updatedCart;
        });
    };
    var updateCartItemCount = function (newAmount, itemId) {
        setCartItems(function (prev) {
            var _a;
            var updatedCart = __assign(__assign({}, prev), (_a = {}, _a[itemId] = newAmount, _a));
            if (updatedCart[itemId] < 1) {
                delete updatedCart[itemId];
            }
            return updatedCart;
        });
    };
    var getTotalCartAmount = function () {
        var totalAmount = 0;
        var _loop_1 = function (item) {
            if (cartItems[item] > 0) {
                var itemInfo = products_1.PRODUCTS.find(function (product) { return product.id === Number(item); });
                totalAmount += cartItems[item] * itemInfo.price;
            }
        };
        for (var item in cartItems) {
            _loop_1(item);
        }
        return totalAmount;
    };
    (0, react_1.useEffect)(function () {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);
    var contextValue = {
        cartItems: cartItems,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        updateCartItemCount: updateCartItemCount,
        getTotalCartAmount: getTotalCartAmount,
    };
    return (react_1.default.createElement(exports.ShopContext.Provider, { value: contextValue }, props.children));
};
exports.ShopContextProvider = ShopContextProvider;
