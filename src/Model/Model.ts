import { Sequelize } from 'sequelize'
import getGlobal from '../Utils/global'

const { database } = getGlobal()
const sequelize = new Sequelize(database)

export default sequelize
export * from './User'