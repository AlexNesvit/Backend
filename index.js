import express from 'express'

const PORT = 5000;

const app = express()

app.get('/', (req, res) => {
    console.log(req.query);
    res.status(200).json("Server is working")
})

app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))