const Category = require('../../models/CategoryModel');

const createCategory = async (req, res) => {
    try {
        const { name, position, bannerImage, status } = req.body;
        const category = new Category({ name, position, bannerImage, status });
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = createCategory;
