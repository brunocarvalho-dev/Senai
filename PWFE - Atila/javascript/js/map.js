const endpoint = "../json/alunoList.json";
const tbody = document.getElementById('table-value');

var aluno;

const result = fetch(endpoint).then((response)=> response.json()).then(data=>{
        Aluno(data);
});  


let tr = document.createElement("tr"); 
let td_id = document.createElement("td");  
let td_nome = document.createElement("td");  
let td_email = document.createElement("td");  
let btnEditar = document.createElement("button");  
let btnExcluir = document.createElement("button"); 


function Aluno(item) {
        this.aluno = item;
        return (
            `<tr>
                <td>${aluno.id}</td>
                <td>${aluno.name}</td>
                <td>${aluno.email}</td>
            </tr>`
        );
        console.log(aluno.name)
}


