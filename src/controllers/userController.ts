import { Request, Response } from "express";

export = {
    user: {},
    admin: {
        getAllUsers(req: Request, res: Response) {
            console.log("router");
            res.send("User router");
        },
        getOneUser(req: Request, res: Response) {
            console.log("router");
            res.send(`User router, ${req.params.id}`);
        },
    },
};
