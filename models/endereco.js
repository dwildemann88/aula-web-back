const {Sequelize, DataTypes} = require('requelize');
const sequelize = new Sequelize ('sqlite::memory:');

const User = sequelize.define(
    'User',
    {
        firstName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName:{
            type: DataTypes.STRING
        },
    },
    {

    },
);

const { Model, DataTypes} = require ('sequelize');

class Endereco extends Model{}

Endereco.init(
    Id,{
        type: DataTypes.STRING
    },
    Cep,{
        type: DataTypes.STRING
    },
    Logradouro,{
        type: DataTypes.STRING
    },
    Numero,{
        type: DataTypes.STRING
    },
    Complemento,{
        type: DataTypes.STRING
    },
    Bairro,{
        type: DataTypes.STRING
    },
    Cidade,{
        type: DataTypes.STRING
    },
    Estado,{
        type: DataTypes.STRING
    },
    Ibge,{
        type: DataTypes.STRING
    }
);