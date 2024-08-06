const Category = require('../../models/CategoryModel');

const updateCategoryPositions = async (req, res) => {
    const { positions } = req.body;

    try {
        if (!Array.isArray(positions)) {
            return res.status(400).json({ message: 'Invalid data format' });
        }

     
        const updates = positions.map(({ _id, position }) => {
         
            if (!ObjectId.isValid(_id)) {
                throw new Error(`Invalid ObjectId: ${_id}`);
            }

            return Category.findByIdAndUpdate(_id, { position }, { new: true });
        });

        const results = await Promise.all(updates);

        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = updateCategoryPositions;
