import User from "./user_model.js"

export const createUser = async (req, res) => {
    try {
        const { name, username } = req.body;
        const newUser = new User({
            name,
            username
        });
        const savedUser = await newUser.save();
        return res.status(201).send({
            success: true,
            data: savedUser
        }); // Cambiado a 201 para indicar que se creó un nuevo recurso en el servido
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message
        });
    }
};

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Usuario no encontrado'
            });
        }
        res.status(200).send({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};
