import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db';

class Budget extends Model {
    declare id: number;
    declare manager: string; // 기구장
    declare year: number; // 예산년도
    declare half: string; // 반기 ('spring', 'fall')
}

Budget.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        manager: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [4, 4],
            },
        },
        half: {
            type: DataTypes.ENUM('spring', 'fall'),
            allowNull: false,
        },
    },
    {
        tableName: 'budgets',
        sequelize,
    },
);

export default Budget;
