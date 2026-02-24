import express from 'express'

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Olá mundo!")
})

app.listen(8000, () => {
    console.log("Meu Servidor está rodando na porta 8000");
});