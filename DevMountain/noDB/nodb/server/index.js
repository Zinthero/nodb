const express = require('express')
const bodyParser=require('body-parser')
const app = express();
const port = 3005;
const controllers = require('./controllers/songController')


app.use(bodyParser.json())

app.get('/api/songs', controllers.getSongs)
app.post('/api/songs', controllers.createSongs)
app.delete('/api/songs/:id', controllers.deleteSongs)
app.put('/api/songs/:id', controllers.updateSongs)


  

app.listen(port,()=>{
    console.log("Ur mum",port);
})
