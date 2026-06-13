import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 8000

const app = express()

app.get('/health', (req, res) => {
  res.json({
    Health: 'OK',
    Status: 'Expense Tracker API running...'
  })
})

app.listen(PORT, () => {
  console.log(`Expense Tracker API running on http://localhost:${PORT}`)
})