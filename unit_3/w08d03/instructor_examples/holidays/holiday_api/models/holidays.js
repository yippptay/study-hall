const { Schema, model } = require('mongoose');

const holidaySchema = new Schema({
    name: { type: String, required: true },
    celebrated: { type: Boolean, default: false },
    description: { type: String, default: 'Best holiday ever!' },
    likes: { type: Number, default: 0 },
    tags: [{ type: String }],
});

const Holiday = model('holiday', holidaySchema);

module.exports = Holiday;
