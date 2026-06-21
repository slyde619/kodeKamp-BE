import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

export interface Todo {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
}

@Injectable()
export class TodosService {
  todos: Todo[] = [];
  nextId: number = 1;

  create(createTodoDto: CreateTodoDto) {
    const newTodo: Todo = {
      id: this.nextId++,
      ...createTodoDto,
    };

    this.todos.push(newTodo);

    return this.todos;
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    return this.todos.find((todo) => todo.id === id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
      return `Todo with the ${id} not found`;
    }

    const updateTodo: Todo = {
      ...this.todos[todoIndex],
      ...updateTodoDto,
    };

    this.todos[todoIndex] = updateTodo;

    return updateTodo;
  }

  remove(id: number) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
      return `Todo with the id ${id} is not found`;
    }

    const deletedTodo = this.todos[todoIndex];

    this.todos = this.todos.filter((todo) => todo.id !== id);

    return deletedTodo;
  }
}
