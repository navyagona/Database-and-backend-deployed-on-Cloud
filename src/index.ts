import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Task Manager API is running!' });
});

// Get all tasks
app.get('/api/tasks', async (req: Request, res: Response) => {
    try {
        const tasks = await prisma.task.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});

// Create task
app.post('/api/tasks', async (req: Request, res: Response) => {
    const { title, description } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    try {
        const task = await prisma.task.create({
            data: { title, description }
        });
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create task' });
    }
});

// Update task
app.patch('/api/tasks/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    try {
        const task = await prisma.task.update({
            where: { id },
            data: { title, description, completed }
        });
        res.json(task);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update task' });
    }
});

// Delete task
app.delete('/api/tasks/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await prisma.task.delete({ where: { id } });
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: 'Failed to delete task' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
