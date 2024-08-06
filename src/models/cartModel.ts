import { Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    DataType,
    ForeignKey,
    BelongsTo,
    HasMany
} from "sequelize-typescript";
import UserModel from "./userModel";
import ProductCartModel from "./productCartModel";

@Table({
    tableName: "cart",
    timestamps: true
})

export default class CartModel extends Model <CartModel>{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        primaryKey: true
    })
    id!: number;

    @ForeignKey (() => UserModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    userId!: number;

    @BelongsTo(() => UserModel)
    user!: UserModel;

    @HasMany(()=> ProductCartModel)
    productCarts!: ProductCartModel[];
}