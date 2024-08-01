const Voucher = require('../../models/voucherModel');

const getVoucherById = async (req, res) => {
    try {
        const voucher = await Voucher.findById(req.params.id);
        if (!voucher) {
            return res.status(404).json({
                message: "Voucher not found",
                success: false,
                error: true
            });
        }
        res.json({
            message: "Voucher found",
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

module.exports = getVoucherById;
