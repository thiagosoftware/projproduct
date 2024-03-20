const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "..", "db", "users.json");

// Função para ler o arquivo de usuários
const getUsersFromFile = () => {
    const usersData = fs.readFileSync(usersFilePath, "utf-8");
    return JSON.parse(usersData);
};

// Função para escrever no arquivo de usuários
const writeUsersToFile = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 4));
};

// Rotina para listar todos os usuários
exports.listAllUsers = (req, res) => {
    try {
        const users = getUsersFromFile();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
};

// Rotina para listar um usuário por ID
exports.listUserID = (req, res) => {
    try {
        const users = getUsersFromFile();
        const user = users.find((user) => user.id === parseInt(req.params.id));
        if (!user) {
            res.status(404).json({ error: 'Usuário não encontrado' });
        } else {
            res.status(200).json(user);
        }
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
};

// Rotina para criar um novo usuário
exports.createUser = (req, res) => {
    try {
        const users = getUsersFromFile();
        const newUser = {
            id: users.length + 1,
            name: req.body.name,
            email: req.body.email,
            tuition: req.body.tuition,
            profile: req.body.profile
        };
        users.push(newUser);
        writeUsersToFile(users);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
};

// Rotina para atualizar um usuário por ID
exports.updateUser = (req, res) => {
    try {
        const users = getUsersFromFile();
        const index = users.findIndex((user) => user.id === parseInt(req.params.id));
        if (index === -1) {
            res.status(404).json({ error: 'Usuário não encontrado' });
        } else {
            const updatedUser = {
                id: users[index].id,
                name: req.body.name,
                email: req.body.email,
                tuition: req.body.tuition,
                profile: req.body.profile
            };
            users[index] = updatedUser;
            writeUsersToFile(users);
            res.status(200).json(updatedUser);
        }
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
};

// Rotina para deletar um usuário por ID
exports.deleteUser = (req, res) => {
    try {
        const users = getUsersFromFile();
        const index = users.findIndex((user) => user.id === parseInt(req.params.id));
        if (index === -1) {
            res.status(404).json({ error: 'Usuário não encontrado' });
        } else {
            users.splice(index, 1);
            writeUsersToFile(users);
            res.status(200).json({ msg: 'Usuário deletado com sucesso' });
        }
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
};
