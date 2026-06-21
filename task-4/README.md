# Todo API

A simple CRUD REST API for managing todos, built with NestJS. Data is stored in-memory (no database).

## Setup

```bash
pnpm install
```

## Run

```bash
# development
pnpm run start:dev

# production
pnpm run start:prod
```

Server runs on `http://localhost:3000`.  
Swagger docs available at `http://localhost:3000/api`.

## Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/todos` | Create a new todo |
| GET | `/todos` | Get all todos |
| GET | `/todos/:id` | Get a todo by ID |
| PUT | `/todos/:id` | Update a todo by ID |
| DELETE | `/todos/:id` | Delete a todo by ID |

## Todo Schema

```json
{
  "title": "Learn NestJS",
  "description": "Complete NestJS Youtube videos",
  "status": "pending"
}
```

`status` must be one of: `pending`, `in-progress`, `completed`.

## Tech

- NestJS
- class-validator (request validation)
- Swagger (@nestjs/swagger)
