import { authService } from "./auth.service.js";
const signup = async (req, res) => {
    try {
        const result = await authService.signup(req.body);
        res
            .status(201)
            .json({
            success: true,
            message: "User registered successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await authService.signin(email, password);
        res.status(200).json({
            success: true,
            message: "Login successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
export const authController = {
    signup,
    signin,
};
