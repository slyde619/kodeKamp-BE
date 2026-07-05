# Products API

A simple CRUD API for managing products. Built with NestJS, TypeORM, and PostgreSQL.

## What it does

- Create a product
- List products (with pagination)
- Get one product by id
- Update a product
- Delete a product

## Tech used

- NestJS (backend framework)
- TypeORM (talks to the database)
- PostgreSQL (database)
- class-validator (checks incoming data)
- Swagger (API docs)

## Product fields

| Field       | Type     | Notes                  |
| ----------- | -------- | ---------------------- |
| id          | number   | set automatically      |
| name        | string   | required               |
| description | string   | required               |
| cost        | number   | required               |
| pictures    | string[] | optional, list of URLs |
| createdAt   | date     | set automatically      |
| updatedAt   | date     | set automatically      |

## Setup

1. Install packages:

   ```bash
   pnpm install
   ```

2. Create a `.env` file in the project root with your database details:

   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=products_db
   ```

3. Make sure PostgreSQL is running and the database in `DB_NAME` exists.

## Run the app

```bash
# development, restarts on file changes
pnpm run start:dev

# normal start
pnpm run start

# production
pnpm run start:prod
```

The app runs on `http://localhost:3000` by default.

## API docs

Once the app is running, open `http://localhost:3000/api` to see the Swagger docs and try out each endpoint.

## Endpoints

| Method | Path          | What it does                       |
| ------ | ------------- | ---------------------------------- |
| GET    | /products     | List products (`?page=1&limit=10`) |
| GET    | /products/:id | Get one product                    |
| POST   | /products     | Create a product                   |
| PUT    | /products/:id | Update a product                   |
| DELETE | /products/:id | Delete a product                   |
