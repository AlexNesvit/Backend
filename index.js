import express from 'express'

const PORT = 5000;

const app = express()

///app.get()

app.listen(PORT, () => console.log('SERVER STARTED ON PORT' + PORT))