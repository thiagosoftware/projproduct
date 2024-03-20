const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const userRoutes = require('./src/routers/router'); // Importe as rotas corretamente

app.use(express.json());
app.use(express.static("public"));

app.use('/api', userRoutes); // Defina o prefixo '/api' para todas as rotas da área de usuário

// Inicialize o servidor na porta especificada
const server = app.listen(port, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Servidor iniciado em http://${host}:${port}`);
});
