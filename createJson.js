const fs = require('fs');
const path = require('path');

// Caminho para o diretório db
const dbDir = path.join(__dirname, 'src', 'db');

// Verifica se o diretório db existe, caso contrário, cria-o
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

// Caminho completo para o arquivo users.json
const filePath = path.join(dbDir, 'users.json');

// Conteúdo inicial do arquivo (um array vazio)
const initialData = '[]';

// Escreve o conteúdo inicial no arquivo users.json
fs.writeFile(filePath, initialData, (err) => {
    if (err) {
        console.error('Erro ao criar o arquivo users.json:', err);
    } else {
        console.log('Arquivo users.json criado com sucesso.');
    }
});
