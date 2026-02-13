import express from "express";
import cors from "cors"

import { client } from "@repo/db/client" 

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  return res.json({
    "message":"/ endpoint"
  })
})

app.post('/signup', async(req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = client.user.create({
    data: {
      username: username,
      password: password
    }
  })
  console.log(user);
  res.send({
    "message": "hello user, you have signed up",
    "user details": user
  })
})

app.listen(3000, () => {
  console.log("http server Listening on port 3000")
})