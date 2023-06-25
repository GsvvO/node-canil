import { Request ,Response } from "express";

import { createMenuObject } from "../helpers/createMenuOptions";
import { Pet } from "../models/Pet"

export const home = (req:Request, res:Response) => {

    const getPet = Pet.getAll();

    res.render("./pages/page", {
        menu: createMenuObject("all"),
        banner: {
            title: "Todos os animais",
            background: "allanimals.jpg"
        },
        getPet
    });
};

export const dogs = (req:Request, res:Response) => {

    const getPet = Pet.getFromType("dog");
    
    res.render("./pages/page", {
        menu: createMenuObject("dog"),
        banner: {
            title: "Cachorros",
            background: "banner_dog.jpg"
        },
        getPet
    });
};

export const cats = (req:Request, res:Response) => {

    const getPet = Pet.getFromType("cat");

    res.render("./pages/page", {
        menu: createMenuObject("cat"),
        banner: {
            title: "Gatos",
            background: "banner_cat.jpg"
        },
        getPet
    });
};

export const fishes = (req:Request, res:Response) => {

    const getPet = Pet.getFromType("fish");

    res.render("./pages/page", {
        menu: createMenuObject("fish"),
        banner: {
            title: "Peixes",
            background: "banner_fish.jpg"
        },
        getPet
    });
};