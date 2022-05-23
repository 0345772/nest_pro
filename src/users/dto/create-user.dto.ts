import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty({ example: "user@gmail.com", description: "You email" })
  readonly email: string;

  @ApiProperty({ example: "dE38-s7sk", description: "Enter Password" })
  readonly password: string;
}