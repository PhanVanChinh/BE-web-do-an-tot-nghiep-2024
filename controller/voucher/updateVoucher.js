const Voucher = require('../../models/voucherModel');

const updateVoucher = async (req, res) => {
    try {
        const updatedVoucher = await Voucher.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedVoucher) {
            return res.status(404).json({
                message: "Voucher not found",
                success: false,
                error: true
            });
        }
        res.json({
            message: "Voucher updated successfully",
            success: true,
            data: updatedVoucher,
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

module.exports = updateVoucher;
