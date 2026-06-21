import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoDto {
  @ApiProperty({
    example: 'Learn NestJS',
    description: 'The title of the todo',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'Complete NestJS Youtube videos',
    description: 'Detailed description of the todo',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 'pending',
    enum: ['pending', 'in-progress', 'completed'],
    description: 'Current status of the todo',
  })
  @IsIn(['pending', 'in-progress', 'completed'])
  status: 'pending' | 'in-progress' | 'completed';
}
