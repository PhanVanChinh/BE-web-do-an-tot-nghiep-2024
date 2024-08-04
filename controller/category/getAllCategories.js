const Category = require('../../models/CategoryModel');

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find().sort({ position: 1 });
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = getAllCategories;
