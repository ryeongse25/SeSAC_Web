const Visitor = (Sequelize, DataTypes) => {
    // Sequelize는 model/index.js에서의 sequelize
    // DataTypes는 model/index.js에서의 Sequelize

    const model = Sequelize.define(
        'visitor',
        {
            id : {
                // int
                type: DataTypes.INTEGER,
                // not null
                allowNull: false,
                // primary key
                primaryKey: true,
                // auto_increment
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            comment: {
                type: DataTypes.TEXT('medium')
            }
        },
        {
            // true로 지정하게 되면 등록된 시간과 수정된 시간을 갖는 컬럼이 만들어진다
            timestamps: false,
            tableName: 'visitor',
            // sequelize에서 자동으로 table이름 뒤에 s를 붙이는데 freezeTableName 속성을 true로 주면 테이블 이름을 바꾸지 않는다.
            freezeTableName: true
        }
    );
    return model;
}

module.exports = Visitor;