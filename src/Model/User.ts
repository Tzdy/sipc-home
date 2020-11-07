import sequelize from './Model'
import { DataTypes } from 'sequelize'
import { hashSync } from 'bcrypt'
const UserModel = sequelize.define(
  "users",
  {
    username: DataTypes.STRING(16),
    password: {
      type: DataTypes.STRING(64),
      set(value) {
        this.setDataValue("password", hashSync(value, 10));
      },
    },
    name: DataTypes.STRING(32),
    gender: DataTypes.TINYINT,
    student_number: DataTypes.INTEGER,
    grade: DataTypes.STRING(32),
    phone: DataTypes.CHAR(11),
    college: DataTypes.STRING(32),
    email: DataTypes.STRING(32)
  },
  {}
);
export { UserModel }