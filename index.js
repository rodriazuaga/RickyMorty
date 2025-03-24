import express from 'express'
import axios from 'axios'

const app = express()

app.get('/personaje', async (req, res)=>{
  const {data} = await axios.get('https://rickandmortyapi.com/api/character')
  return res.json(data)
})

app.listen(3000, () =>{
  console.log('Sirviendo en puerto 3000')
})
