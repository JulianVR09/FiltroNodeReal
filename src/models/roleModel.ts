import { Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    DataType,
    HasMany
} from "sequelize-typescript";
import UserModel from "./userModel";

@Table({
    tableName: "products",
    timestamps: false
})

export default class RoleModel extends Model <RoleModel> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        primaryKey: true
    })
    id!: number;

    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    name!: string;

    @HasMany(() => UserModel)
    users!: UserModel[];
}