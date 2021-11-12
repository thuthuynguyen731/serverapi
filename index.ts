const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req: any, res: any) => {
  let obj = {"message": "Hello"}
  res.send(obj)
})

app.put('/api', (req: any, res: any) => {
    let age = req.query["age"]
    let obj = {"age": age}
    res.send(obj)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})