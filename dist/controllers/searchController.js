"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const createMenuOptions_1 = require("../helpers/createMenuOptions");
const Pet_1 = require("../models/Pet");
const search = (req, res) => {
    const query = req.query.q;
    if (!query) {
        res.redirect("/");
        return;
    }
    const getPet = Pet_1.Pet.getFromName(query);
    res.render("pages/page", {
        menu: (0, createMenuOptions_1.createMenuObject)(""),
        getPet,
        query
    });
};
exports.search = search;
