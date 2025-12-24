import { userService } from "./user.service.js";
const getAllUser = async (req, res) => {
    try {
        const result = await userService.getAllUser();
        res.status(200).json({
            success: true,
            message: "User retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: error.message,
        });
    }
};
// ---------------
// ---------------------
const updateUser = async (req, res) => {
    try {
        // console.log(req.body);
        const result = await userService.updateUser(req.params.id, req.body, {
            id: req.users?.id,
            role: req.users?.role,
        });
        res.status(200).json({
            success: true,
            message: "User updated  successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: error.message,
        });
    }
};
const deleteUser = async (req, res) => {
    try {
        // console.log(req.body);
        const result = await userService.deleteUser(req.params.id);
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: error.message,
        });
    }
};
export const userController = {
    getAllUser,
    updateUser,
    deleteUser,
};
