const blogs = require('./blogs.json')
const express = require('express');
const port = 3000;

const app = express()

app.get('/posts', (req, res) => {
  res.json(blogs)
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
