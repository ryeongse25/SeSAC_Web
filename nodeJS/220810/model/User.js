const User = (Sequelize, DataTypes) => {

    const model = Sequelize.define(
        'user',
        {
            name: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            id : {
                type: DataTypes.STRING(10),
                allowNull: false,
                primaryKey: true
            },
            pw: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(20)
            }
        },
        {
            timestamps: false,
            tableName: 'user',
            freezeTableName: true
        }
    );
    return model;
}

module.exports = User;