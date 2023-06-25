"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const createMenuOptions_1 = require("../helpers/createMenuOptions");
const Pet_1 = require("../models/Pet");
const home = (req, res) => {
    const getPet = Pet_1.Pet.getAll();
    res.render("./pages/page", {
        menu: (0, createMenuOptions_1.createMenuObject)("all"),
        banner: {
            title: "Todos os animais",
            background: "allanimals.jpg"
        },
        getPet
    });
};
exports.home = home;
const dogs = (req, res) => {
    const getPet = Pet_1.Pet.getFromType("dog");
    res.render("./pages/page", {
        menu: (0, createMenuOptions_1.createMenuObject)("dog"),
        banner: {
            title: "Cachorros",
            background: "banner_dog.jpg"
        },
        getPet
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    const getPet = Pet_1.Pet.getFromType("cat");
    res.render("./pages/page", {
        menu: (0, createMenuOptions_1.createMenuObject)("cat"),
        banner: {
            title: "Gatos",
            background: "banner_cat.jpg"
        },
        getPet
    });
};
exports.cats = cats;
const fishes = (req, res) => {
    const getPet = Pet_1.Pet.getFromType("fish");
    res.render("./pages/page", {
        menu: (0, createMenuOptions_1.createMenuObject)("fish"),
        banner: {
            title: "Peixes",
            background: "banner_fish.jpg"
        },
        getPet
    });
};
exports.fishes = fishes;
