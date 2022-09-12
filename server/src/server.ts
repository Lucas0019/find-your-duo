import express from 'express'

const app = express()

// localhost:3333/ads
app.get('/ads', (request, response) => {
  return response.json([
    {
      id: 1,
      title: 'Ad 1',
      description: 'Description 1',
    },
    {
      id: 2,
      title: 'Ad 2',
      description: 'Description 2',
    },
    {
      id: 3,
      title: 'Ad 3',
      description: 'Description 3',
    },
    {
      id: 5,
      title: 'Ad 5',
      description: 'Description 5',
    }
  ])
})

app.listen(3333)