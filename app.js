const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => console.log("aplicacion corriendo en el puerto", port))

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index.html')
})