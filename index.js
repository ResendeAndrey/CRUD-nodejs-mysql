
const customExpress = require('./config/custom-express.js');
const conexao = require('./infra/conexao.js');
const app = customExpress();
const Tabelas = require('./infra/tabelas.js');

conexao.connect( erro => {  
    if(erro) {
        console.log(erro)
    } else {
        console.log("Conectado com Sucesso");
        Tabelas.init(conexao);
        app.listen(3000, () =>
        console.log("servidor rodando na porta 3000"));
    }
})


