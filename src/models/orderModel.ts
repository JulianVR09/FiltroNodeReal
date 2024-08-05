import { Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    DataType,
    ForeignKey,
    BelongsTo
} from "sequelize-typescript";
import UserModel from "./userModel";
import ProductCartModel from "./productCartModel";

@Table({
    tableName: "products",
    timestamps: false
})

export default class OrderModel extends Model<OrderModel> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        primaryKey: true
    })
    id!: number;

    @ForeignKey(()=> UserModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    userId!: number;

    @ForeignKey(()=> ProductCartModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    productCartId!: number;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    totalPrice!: number;

    @BelongsTo(()=> ProductCartModel)
    productCart!: ProductCartModel;

    @BelongsTo(()=> UserModel)
    user!: UserModel;
}