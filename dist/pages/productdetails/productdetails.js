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
exports.ProductDetails = void 0;
var react_1 = __importStar(require("react"));
var products_1 = require("../../products");
var react_router_dom_1 = require("react-router-dom");
var shopcontext_1 = require("../../context/shopcontext");
require("./productdetails.css");
var ProductDetails = function () {
    var id = (0, react_router_dom_1.useParams)().id;
    var _a = (0, react_1.useContext)(shopcontext_1.ShopContext), addToCart = _a.addToCart, cartItems = _a.cartItems;
    var cartItemAmount = cartItems[id];
    var navigate = (0, react_router_dom_1.useNavigate)();
    console.log('productId from URL:', id);
    var thisProduct = products_1.PRODUCTS.find(function (product) { return product.id === Number(id); });
    console.log('PRODUCTS array:', products_1.PRODUCTS);
    console.log('thisProduct:', thisProduct);
    if (!thisProduct) {
        console.error("Product not found for productId: ".concat(id));
        return react_1.default.createElement("div", null, "Product not found");
    }
    return (react_1.default.createElement("div", { className: 'productdetails' },
        react_1.default.createElement("h1", null, thisProduct.productName),
        react_1.default.createElement("img", { src: thisProduct.productImg, alt: thisProduct.productName }),
        react_1.default.createElement("p", { className: 'description' }, thisProduct.description),
        react_1.default.createElement("p", { className: 'price' },
            "Price: $",
            thisProduct.price),
        react_1.default.createElement("button", { className: 'addToCartBtn', onClick: function () { return addToCart(parseInt(id)); } },
            "Add to Cart ",
            cartItemAmount && "(".concat(cartItemAmount, ")")),
        react_1.default.createElement("br", null),
        react_1.default.createElement("button", { className: 'backToShop', onClick: function () { return navigate('/'); } }, "Back to shop")));
};
exports.ProductDetails = ProductDetails;
