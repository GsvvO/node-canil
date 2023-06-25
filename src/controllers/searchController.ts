import { Request ,Response } from "express";

import { createMenuObject } from "../helpers/createMenuOptions";
import { Pet } from "../models/Pet"

export const search = (req:Request, res:Response) => {

    const query: string = req.query.q as string
    
    if(!query){
        res.redirect("/");
        return
    }
    
    const getPet = Pet.getFromName(query);
    
    res.render("pages/page", {
        menu: createMenuObject(""),
        getPet,
        query
    })
};