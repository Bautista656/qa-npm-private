import express from 'express'
// A private package: the install gets it only with NPM_TOKEN, a build secret.
import privateGreeting from '@bautista656/qa-private-greeting'

const app = express()

app.get('/', (_req, res) => {
  res.send(`<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"><title>QA app: private npm package</title></head>
  <body>
    <h1>QA app: private npm package</h1>
    <p>${privateGreeting.greeting()}</p>
    <p><a href="/api/status">/api/status</a></p>
  </body>
</html>`)
})

app.get('/api/status', (_req, res) => {
  res.json({ greeting: privateGreeting.greeting(), instance_url: process.env.CXF_INSTANCE_URL || null })
})

// Traffic arrives on PORT, on every interface.
const port = Number(process.env.PORT) || 3000
app.listen(port, '0.0.0.0', () => console.log(`Listening on ${port}`))
