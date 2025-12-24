import { bookingsService } from "./bookings.service.js";
import { role } from "../../utils/role.js";
const createBooking = async (req, res) => {
    // console.log(req.body);
    try {
        const result = await bookingsService.createBooking(req.body);
        res.status(201).json({
            success: true,
            message: "Booking created successfully",
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
const getAllBookings = async (req, res) => {
    try {
        const result = await bookingsService.getAllBookings(req.users);
        res.status(200).json({
            success: true,
            message: req.users?.role === role.admin
                ? "Bookings retrieved successfully"
                : "Your bookings retrieved successfully",
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
// ========================================
const updateBookings = async (req, res) => {
    try {
        const bookingId = req.params.id;
        const user = req.users;
        const result = await bookingsService.updateBookings(bookingId, req.body, user);
        res.status(200).json({
            success: true,
            message: result.status === "cancelled"
                ? "Booking cancelled successfully"
                : "Booking marked as returned. Vehicle is now available",
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
// ===========================================
const autoReturnBookings = async (req, res) => {
    try {
        const updatedBookings = await bookingsService.autoReturnBookings();
        return res.status(200).json({
            success: true,
            message: "Auto-return process completed",
            updatedBookings,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Something went wrong",
        });
    }
};
export const bookingsController = {
    createBooking,
    getAllBookings,
    updateBookings,
    autoReturnBookings,
};
