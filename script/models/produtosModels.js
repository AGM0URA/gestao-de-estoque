import conn from "../config/conn.js";
import { DataTypes } from "sequelize";

const Produtos = conn.define(
    "produtos",
    {
        id_produto: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        nome_produto: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        preco_produto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        descricao_produto: {
            type: DataTypes.TEXT,
        },
        quantidade_produto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
      tableName: 'Produtos',
      timestamps: true,
    }
);

export default Produtos;
