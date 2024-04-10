const express = require('express')
const router = express.Router()
const path = require("path")

const basePath = path.join(__dirname, '../templates') // adiciona o endereco (diretorio + pasta template) unido pelo join a variavel basePath

router.get('/about', (req, res) => {
  res.sendFile(`${basePath}/about.html`) // sendFile envia a resposta do arquivo com o caminho `${basePath}/index.html`, que e o template/index
})

module.exports = router;
