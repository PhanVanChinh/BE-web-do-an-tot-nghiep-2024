const Voucher = require('../../models/voucherModel');

const deleteVoucher = async (req, res) => {
    try {
        const deletedVoucher = await Voucher.findByIdAndDelete(req.params.id);
        if (!deletedVoucher) {
            return res.status(404).json({
                message: "Voucher not found",
                success: false,
                error: true
            });
        }
        res.json({
            message: "Voucher deleted successfully",
            success: true,
            data: deletedVoucher,
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

module.exports = deleteVoucher;
