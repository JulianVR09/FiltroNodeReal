import { Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    DataType
} from "sequelize-typescript";

@Table({
    tableName: "entities",
    timestamps: true
})

export default class EntitiesModel extends Model<EntitiesModel> {
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
}