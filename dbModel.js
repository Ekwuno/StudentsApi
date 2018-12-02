var Sequelize = require("sequelize");

var connection = new Sequelize(
    'NodeMysql',
    'root',
    '',
    {
        dialect: 'mysql',
        host: 'localhost',
    }
);

const students = connection.define('students', {
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date_of_birth: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    phone_number: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    freezeTableName: true
});

connection.sync(()=>{
    console.log('Data models synced with MySql...');
});

module.exports = connection;