import { Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    DataType,
    HasMany
} from "sequelize-typescript";
import ProductCartModel from "./productCartModel";

@Table({
    tableName: "products",
    timestamps: true
})

export default class ProductModel extends Model <ProductModel> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    name!: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false
    })
    price!: number;

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    description!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    stock!: number;

    @HasMany(() => ProductCartModel)
    productCarts!: ProductCartModel[];
}