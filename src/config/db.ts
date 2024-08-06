import { Sequelize } from "sequelize-typescript";
import UserModel from "../models/userModel";
import ProductCartModel from "../models/productCartModel";
import ProductModel from "../models/productModel";
import OrderModel from "../models/orderModel";
import EntitiesModel from "../models/entitiesModel";
import CartModel from "../models/cartModel";
import RoleModel from "../models/roleModel";

const sequelize: Sequelize = new Sequelize({
    dialect: "mysql",
    host: "5.161.244.18",
    port: 3306,
    database: "admin9",
    username: "root",
    password:  "mypassword",
    models: [UserModel, ProductCartModel, ProductModel, OrderModel, EntitiesModel, CartModel, RoleModel]
})

export default sequelize;