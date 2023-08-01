/* Código de validação de formulário de login */

function acessar(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    
    if(!email || !senha){
        alert("Campos de preenchimento obrigatório. Favor preencher");
    }else{
       window.location.href = "index.html";
    }
}

/* FUNÇÃO PARA ARMAZENAR NOMES EM ARRAY*/
var dadosLista = [];

function salvarUser(){

  let nomeUser = document.getElementById("nomeUser").value;

   if(nomeUser){
    dadosLista.push(nomeUser);
    criarLista();
    document.getElementById("nomeUser").value = '';
}
}

function criarLista(){

    let tabela = document.getElementById('tabela').innerHTML =  '<tr><th>Nome Usuario</th><th>Ações</th></tr>';

    for(let i = 0;i <= (dadosLista.length - 1);i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}

// FUNÇÃO PARA EDITAR NOME

function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i-1)], 1)
}

// FUNÇÃO PARA EXCLUIR NOME
    function excluir(i){
        dadosLista.splice((i - 1), 1);
        document.getElementById('tabela').deleteRow(i);
    }
