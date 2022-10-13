const User = (Sequelize, DataTypes) => {
    
    const model = Sequelize.define(
        'user',
        {
            id : {
                type: DataTypes.STRING(20),
                allowNull: false,
                primaryKey: true,
            },
            password: {
                type: DataTypes.STRING(200),
                allowNull: false
            },
            salt: {
                type: DataTypes.STRING(200),
                allowNull: false
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