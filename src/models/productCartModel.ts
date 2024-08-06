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
import CartModel from "./cartModel";
import ProductModel from "./productModel";
import OrderModel from "./orderModel";


@Table({
    tableName: "products-cart",
    timestamps: true
})

export default class ProductCartModel extends Model <ProductCartModel> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        primaryKey: true
    })
    id!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    quantity!: number;

    @ForeignKey(()=> CartModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    cartId!: number;

    @ForeignKey(()=> ProductModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    productId!: number;

    @BelongsTo(()=> ProductModel)
    product!: ProductModel;

    @BelongsTo(()=> CartModel)
    cart!: CartModel;

    @HasMany(() => OrderModel)
    orders!: OrderModel[];
}