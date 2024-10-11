const express = require('express');
const app = express();
app.use(express.json());

let users = [];

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  users.push({ name, email, password });
  console.log('Usuários:', users);
  res.send({ message: 'Usuário cadastrado!' });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.send({ message: 'Login bem-sucedido!' });
  } else {
    res.status(401).send({ message: 'Falha no login!' });
  }
});

app.listen(5000, () => console.log('Servidor rodando na porta 5000'));
