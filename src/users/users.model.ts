import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreationAttrs {
  email: string;
  password: string; 
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs>  {

  @ApiProperty({example: '1', description: 'identificator'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'user@gmail.com', description: 'You email' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: 'PYd35fSe-Ev', description: 'You password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: 'true', description: 'Blocked or not' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;
  
  @ApiProperty({ example: 'for plagiarism', description: 'reason for blocking' })
  @Column({ type: DataType.BOOLEAN, allowNull: true })
  banReason: string;

}