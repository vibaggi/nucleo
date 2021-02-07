import express, { Application } from 'express'

const app: Application = express()

// Incluir rotas


const port = process.env.PORT || 3000;

export const server = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})