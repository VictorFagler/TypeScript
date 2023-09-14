"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
var react_1 = __importDefault(require("react"));
var products_1 = require("../../products");
var product_1 = require("./product");
require("./shop.css");
var Shop = function () {
    console.log(products_1.PRODUCTS);
    return (react_1.default.createElement("div", { className: 'shop' },
        react_1.default.createElement("div", { className: "shop-title" },
            react_1.default.createElement("h1", null, "Victors Shop")),
        react_1.default.createElement("div", { className: "products" }, products_1.PRODUCTS.map(function (product) { return (react_1.default.createElement(product_1.Product, { key: product.id, data: product })); }))));
};
exports.Shop = Shop;
