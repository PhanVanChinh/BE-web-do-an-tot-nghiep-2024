const Category = require('../../models/CategoryModel');

const updateCategoryStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const category = await Category.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = updateCategoryStatus;
