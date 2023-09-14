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
exports.CartItem = void 0;
var react_1 = __importStar(require("react"));
var shopcontext_1 = require("../../context/shopcontext");
var CartItem = function (props) {
    var _a = props.data, id = _a.id, productName = _a.productName, price = _a.price, productImg = _a.productImg;
    var _b = (0, react_1.useContext)(shopcontext_1.ShopContext), cartItems = _b.cartItems, addToCart = _b.addToCart, removeFromCart = _b.removeFromCart, updateCartItemCount = _b.updateCartItemCount;
    return (react_1.default.createElement("div", { className: "cartItem" },
        react_1.default.createElement("img", { src: productImg, alt: productName }),
        react_1.default.createElement("div", { className: "description" },
            react_1.default.createElement("p", null, productName),
            react_1.default.createElement("p", null,
                "$",
                price),
            react_1.default.createElement("div", { className: "countHandler" },
                react_1.default.createElement("button", { onClick: function () { return removeFromCart(id); } }, " - "),
                react_1.default.createElement("input", { type: "number", value: cartItems[id], onChange: function (e) { return updateCartItemCount(Number(e.target.value), id); } }),
                react_1.default.createElement("button", { onClick: function () { return addToCart(id); } }, " + ")))));
};
exports.CartItem = CartItem;
