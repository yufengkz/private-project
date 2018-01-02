const express = require('express')
const app = express()

app.use(express.static('vue-sy'))

const port = 8082
app.listen(port, () => {
    console.log(`localhost:${port}`)
})