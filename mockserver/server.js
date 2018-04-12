import express from "express"

const app = express()
const port = process.env.MOCK_SERVER_PORT || 5000

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Headers", "token, email, CLIENT_VER, engine_ver, oem, partner")
  next()
})

app.get('/api/ping' ,(req, res) => {
  res.send({ message: 'Pong From Express' })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
