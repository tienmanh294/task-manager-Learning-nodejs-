const express = require('express')
require('./db/mongoose')
const taskRouter=require('./router/task')
const userRouter=require('./router/user')

const app = express()
const port = process.env.PORT


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

