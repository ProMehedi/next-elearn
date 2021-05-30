const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require('http-proxy-middleware')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    // Apply Proxy for Development mode
    if (dev) {
      server.use(
        '/api',
        createProxyMiddleware({
          target: 'http://localhost:5000',
          changeOrigin: true,
        })
      )
    }

    server.all('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (error) => {
      if (error) throw error
      console.log(`Server is running on http://localhost:5000`)
    })
  })
  .catch((err) => console.log(err))
