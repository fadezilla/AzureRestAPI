module.exports = (sequelize, Sequelize) => {
    const City = sequelize.define('City', {
        Name: Sequelize.DataTypes.STRING,
        Country: Sequelize.DataTypes.STRING
    },{
        timestamps: false
    });
    return City
}