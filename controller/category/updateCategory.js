const Category = require('../../models/CategoryModel');

const updateCategory = async (req, res) => {
    try {
        const { name, position, bannerImage, status } = req.body;
        const category = await Category.findByIdAndUpdate(req.params.id, { name, position, bannerImage, status }, { new: true });
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = updateCategory;
