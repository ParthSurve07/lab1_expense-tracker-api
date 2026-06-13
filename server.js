import express from 'express'
import dotenv from 'dotenv'
import { PrismaPg } from '@prisma/adapter-pg'

dotenv.config()

import { PrismaClient } from './generated/prisma/index.js'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
})

const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())

app.post('/api/users', async (req, res) => {
  try {
    const {
      name,
      email
    } = req.body

    if (!name || !email) {
      return res.status(400).json({
        message: 'Both fields required.'
      })
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (existingUser) {
      return res.status(409).json({
        message: 'User already exists.'
      })
    }

    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    })

    return res.status(201).json({
      message: 'User created successfully.',
      user
    })
  } catch (error) {
    console.error('Error: ', error)

    return res.status(500).json({
      message: 'Internal Server Error...'
    })
  }
})

app.get('/api/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    
    res.status(200).json({
      users
    })
  } catch (error) {
    console.error('Error: ', error)

    return res.status(500).json({
      message: 'Internal Server Error...'
    })
  }
})

app.get('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    if (!user) {
      return res.status(404).json({
        message: 'User not found.'
      })
    }

    return res.status(200).json({
      user
    })
  } catch (error) {
    console.error('Error: ', error)

    return res.status(500).json({
      message: 'Internal Server Error...'
    })
  }
})

app.get('/health', (req, res) => {
  res.json({
    Health: 'OK',
    Status: 'Expense Tracker API running...'
  })
})

app.listen(PORT, () => {
  console.log(`Expense Tracker API running on http://localhost:${PORT}`)
})