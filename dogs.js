const express = require('express')
const app = express()
const axios = require('axios').default
app.use(express.json())


app.get('/', (req, res) => {
  res.send('hello')
})

app.post('/', (req, res) => {
  let dog = req.body.breed

  // format dog to be sent to axios to match
  dog = dog.replace(' ', '%20').toLowerCase()
  console.log(dog)

  axios.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${dog}`)
    .then((response) => {
      console.log(response.data.query.search[0])
      const data = response.data.query.search[0]
      res.json(data)
    })
    .catch((err) => {
      res.send('404: query incorrect, or not found')
    })
})

app.listen(process.env.PORT || 3000, () => {
  port = process.env.PORT
  console.log('connecting to server...')
  }
)