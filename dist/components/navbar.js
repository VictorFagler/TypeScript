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
exports.Navbar = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var phosphor_react_1 = require("phosphor-react");
require("./navbar.css");
var shopcontext_1 = require("../context/shopcontext");
var Navbar = function () {
    var cartItems = (0, react_1.useContext)(shopcontext_1.ShopContext).cartItems;
    // Provide a type annotation for cartItems if it's not already typed
    var totalCartItemCount = Object.values(cartItems).reduce(function (total, itemCount) { return total + itemCount; }, 0);
    return (react_1.default.createElement("div", { className: "navbar" },
        react_1.default.createElement("div", { className: "links" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Shop"),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/cart", style: { position: 'relative', marginRight: '30px' } },
                react_1.default.createElement(react_1.default.Fragment, null,
                    "Cart ",
                    react_1.default.createElement(phosphor_react_1.ShoppingCart, { size: 24, className: "cartIcon", style: { position: 'absolute', marginTop: '7px', right: '-30px' } }),
                    react_1.default.createElement("span", { style: { fontSize: '14px', position: 'absolute', top: '-2px', right: '-45px' } },
                        "(",
                        totalCartItemCount,
                        ")"))))));
};
exports.Navbar = Navbar;
