const express = require('express')
const app = express()

require('marko/node-require')
var markoExpress = require("marko/express")
app.use(markoExpress())

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded())

const AlunoDao = require('./DAO/aluno-dao')
const dao = new AlunoDao()

const session = require('express-session')
const flash = require('connect-flash')
app.use(session({
    secret:'geekforgeeks',
    saveUninitialized: true,
    resave: true 
}))
app.use(flash())

app.get('/',(req, res) => {

    let response = {
        error_messages: req.flash('error'),
        success_messages: req.flash('success'),
        results: []
    }

    console.log(response)

    dao.list().then( (results) => {

        response.results = results
        res.marko(require('./templates/alunos.marko'), response)
    }).catch((err) => {
        console.log(err)
        response.error_messages.push('Ocorreu um erro no servidor')
        res.marko(require('./templates/alunos.marko'), response )
    })

})

app.get('/form',(req, res) => {
    res.marko(require('./templates/form.marko'))
})

app.get('/form/:id',(req, res) => {
    
dao.findById(req.params.id).then( (result)=> {
    if(result.length > 0){
        aluno = result[0]
        res.marko(require('./templates/form.marko'), aluno)
    }else{
        req.flash('error', 'Não foi encontrado aluno com id = ' + req.params.id)
        res.redirect('/')
    }

    }).catch((err) => {
        console.log(err)
        req.flash('error', 'Ocorreu um erro ao buscar o aluno com id = ' + req.params.id)
        res.redirect('/')
    })

})

app.get('/alunos/delete/:id',(req, res) => {
    dao.delete(req.params.id).then((result) => {
        req.flash('success', 'Usuário removido com sucesso')
        res.redirect('/')
    }).catch((err) => {
        console.log(err)
        req.flash('error', 'Ocorreu um erro ao remover o usuário')
        res.redirect('/')
    })
})

app.post('/alunos', function(req,res){
    if(req.body.id){
        dao.update(req.body).then((result) => {
            req.flash('success', 'Dados do aluno atualizados com sucesso.')
            res.redirect('/')
        }).catch((err) => {
            console.log(err)
            req.flash('error', 'Ocorreu um erro ao atualizar os dados do aluno: ' + aluno.nome)
            res.redirect('/')
        })
    }else{
        dao.save(req.body).then((result) => {
            req.flash('success', 'Aluno salvo com sucesso')
            res.redirect('/')
        }).catch((err) => {
            console.log(err)
            req.flash('error', 'Ocorreu um erro ao salvar o aluno.')
            res.redirect('/')
        })
    }
})

app.listen(3001, '0.0.0.0', ()=>{
    console.log("servidor iniciado em (localhost:3001)")
})