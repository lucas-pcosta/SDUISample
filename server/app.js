const express = require('express')
const app = express()

app.get('/hello', (_, res) => {
    res.json({ message: 'Hello world!' })
})

app.listen(3000, () => {
    console.log('Server is running...')
})