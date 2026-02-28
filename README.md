# Task Management API

A premium Node.js & TypeScript backend for a Task Management application, fully configured for cloud deployment on **Render** and **Neon**.

## Features

- **TypeScript**: Type-safe development.
- **Express.js**: Fast and minimalist web framework.
- **Prisma ORM**: Modern database access for PostgreSQL.
- **Cloud Ready**: Pre-configured with Docker and connection timeout settings for [Neon](https://neon.tech/).

## API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Health check |
| `GET` | `/api/tasks` | Get all tasks |
| `POST` | `/api/tasks` | Create a new task |
| `PATCH` | `/api/tasks/:id` | Update a task status or content |
| `DELETE` | `/api/tasks/:id` | Delete a task |

## Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/navyagona/Database-and-backend-deployed-on-Cloud.git
   cd Database-and-backend-deployed-on-Cloud
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://user:password@host/neondb?sslmode=require"
   PORT=5000
   ```

4. **Run migrations**:
   ```bash
   npx prisma db push
   ```

5. **Start development server**:
   ```bash
   npm run dev
   ```

## Cloud Deployment

This project is optimized for deployment on **Render**.

1. Create a new **Web Service** on Render.
2. Connect this GitHub repository.
3. Set the **Runtime** to `Docker`.
4. Add the `DATABASE_URL` (from Neon) and `PORT` (5000) to the environment variables.

## License

ISC
