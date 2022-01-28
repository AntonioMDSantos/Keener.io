const router = require('express').Router()

const UserController = require('./controllers/UserController')

router.post('/cadastro', UserController.cadastro)
router.post('/login', UserController.login)
router.post('/cadastroProduto', UserController.cadastroprod)
router.get('/listagemProduto', UserController.listaprod)
router.get('/listagemCadastro', UserController.todoscadastros)
router.delete('/cadastro/:id', UserController.deletarcadastros)
router.delete('/produto/:id', UserController.deletarprod)
router.put('/produto/:id', UserController.atualizarprod)
router.put('/login/:id', UserController.atualizarcadastro)


module.exports = router