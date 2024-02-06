import express from 'express'

const PORT = 5000;

const app = express()
app.use(express.json())

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json("Server is working")
})

app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))