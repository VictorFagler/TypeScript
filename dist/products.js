"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCTS = void 0;
var iphone13_webp_1 = __importDefault(require("./assets/iphone13.webp"));
var iphone14_webp_1 = __importDefault(require("./assets/iphone14.webp"));
var samsunga54_webp_1 = __importDefault(require("./assets/samsunga54.webp"));
var motorola_webp_1 = __importDefault(require("./assets/motorola.webp"));
exports.PRODUCTS = [
    {
        id: 1,
        productName: "Iphone 13",
        price: 999,
        productImg: iphone13_webp_1.default,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, accusantium natus. Aspernatur facilis perspiciatis saepe.'
    },
    {
        id: 2,
        productName: "iPhone 14",
        price: 333,
        productImg: iphone14_webp_1.default,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, accusantium natus. Aspernatur facilis perspiciatis saepe.'
    },
    {
        id: 3,
        productName: "Samsung A54",
        price: 555,
        productImg: samsunga54_webp_1.default,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, accusantium natus. Aspernatur facilis perspiciatis saepe.'
    },
    {
        id: 4,
        productName: "Burk",
        price: 99,
        productImg: motorola_webp_1.default,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, accusantium natus. Aspernatur facilis perspiciatis saepe.'
    }
];
