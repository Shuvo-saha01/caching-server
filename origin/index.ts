import express from 'express'

const app = express()

app.get('/slow', async (_req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  res.json({ message: 'Slow response from origin server' })
})

app.get('/time', (_req, res) => {
  res.json({ time: new Date().toISOString() })
})

app.listen(4000, () => {
  console.log('Origin server listening on http://localhost:4000')
})
