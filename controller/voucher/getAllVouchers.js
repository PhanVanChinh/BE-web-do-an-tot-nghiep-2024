const Voucher = require('../../models/voucherModel');

const getAllVouchers = async (req, res) => {
    try {
        const vouchers = await Voucher.find();
        res.json({
            message: "All vouchers",
            success: true,
            data: vouchers,
            error: false
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false,
            error: true
        });
    }
};

module.exports = getAllVouchers;
