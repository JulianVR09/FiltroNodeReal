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
import RoleModel from "./roleModel";


@Table({
    tableName: "users",
    timestamps: true
})
export default class UserModel extends Model <UserModel> {
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
    email!: string;

    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    password!: string;

    @ForeignKey(() => RoleModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    roleId!: number;

    @BelongsTo(() => RoleModel)
    role!: RoleModel;

    @HasMany(() => CartModel)
    carts!: CartModel[];
}