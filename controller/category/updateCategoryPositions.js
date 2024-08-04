const Category = require('../../models/CategoryModel');

const updateCategoryPositions = async (req, res) => {
    try {
        const { positions } = req.body; // positions should be an array of { id, position } objects
        const updatePromises = positions.map(pos =>
            Category.findByIdAndUpdate(pos.id, { position: pos.position })
        );
        await Promise.all(updatePromises);
        res.status(200).json({ message: 'Positions updated' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = updateCategoryPositions;
