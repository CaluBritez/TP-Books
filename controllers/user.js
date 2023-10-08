import { User } from "../models/user.js";
const ctrlUser = {};

//registrar un usuario
ctrlUser.createUser = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()

        return res.json(user)
    } catch (error) {
        res.status(500).json('Internal server error User')
    }
};

export {ctrlUser}
