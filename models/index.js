const User = require("./user");
const Plant = require("./plant");
const Review = require("./reviews");

User.hasMany(Review, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, { 
    foreignKey: 'user_id' 
});

module.exports = { User, Review, Plant};