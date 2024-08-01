const Voucher = require('../../models/voucherModel');

const createVoucher = async (req, res) => {
    try {
        const voucher = new Voucher(req.body);
        await voucher.save();
        res.status(201).json({
            message: "Voucher created successfully",
            success: true,
            data: voucher,
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

module.exports = createVoucher;
