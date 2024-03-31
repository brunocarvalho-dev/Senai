var alunosLista = fetch("js/json/listaAlunos.json").then((response)=>{return response.json()});

function buscarAluno(){
    let id = document.querySelector("#inputID").value;
    try{
        alunosLista.map((idAluno) => {
        if(id==idAluno) mostrarAluno(idAluno); 
        });  
    }catch(e){
        console.log("Erro ao procurar o Aluno: "+ e);
        mostrarListaAlunos();
    };
};

function mostrarAluno(id){
    document.createElement("td")
    .appendChild(
    `<th >ID: ${id.id}</th>`
    `<th >Nome: ${id.nome}</th>`
    `<th >Curso: ${id.curso}</th>`
    `<th >E-mail: ${id.email}</th>`
    `<button class='btn-1' onclick='removerAluno(id)'>Excluir Aluno</button>`
    )
}
function mostrarListaAlunos(){
    document.body.innerHTML =
    alunosLista.map((listaDeAlunos) => {
        return ("<td>"+
        `<th >ID: ${listaDeAlunos.id}</th>`
        `<th >Nome: ${listaDeAlunos.nome}</th>`
        `<th >Curso: ${listaDeAlunos.curso}</th>`
        `<th >E-mail: ${listaDeAlunos.email}</th>`
        +"</td>")
})

};

function removerAluno(id){
    try {
        listaAluno.map((idAluno) => 
        {
            if (idAluno.id === id){
                const index = listaAluno.indexOf(idAluno);
                listaAluno.splice(index, 1);
            }
        })
        alert('Aluno Removido com Sucesso!');
        location.reload()
    }catch{
            console.log(`Ocorreu um erro na exclusão do Aluno de ID ${id}`);
    }finally{
            mostrarTabelaAlunos();
    };
};

/*
function adicionarAluno() {
  //Criando um novo aluno com base nos dados do formulário e o próximo índice da lista
  var novoAluno = {
    'id': parseInt(Math.random() * 100),
    'nome' : document.getElementById('txtNome').value,
    'idade' : document.getElementById('txtIdade').value|0,
    'curso' : document.getElementById('txtCurso').value,
    'email' : document.getElementById('txtEmail').value,
  };
    
    JavaScript. location.reload ();
};
  
  //Adiciona o novo aluno à lista
  this.listaAluno.push(novoAluno);*/