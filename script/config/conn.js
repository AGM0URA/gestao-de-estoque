import { Sequelize } from "sequelize";

const conn = new Sequelize("gerenciamento","root","1234",{
    host:"localhost",
    dialect:"mysql",
});

export default conn