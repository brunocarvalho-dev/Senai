const endpointGet = '../json/alunoList.json';
const tbody = document.getElementById('table_value_map');
const btn_Lista = document.getElementById('btn-lista');
const load = document.getElementById('carregando');

//GET posts
async function getAllPosts(url) {
    
    const response = await fetch(url);
    const data = await response.json();

    load.classList.add("hide");

    

    data.map((aluno) => {

        const div = document.createElement("div");
        const td_id = document.createElement("p");
        const td_name = document.createElement("p");
        const td_email = document.createElement("p");
        const br = document.createElement("br");

        
        td_id.innerText = `ID: ${aluno.id}`;
        td_name.innerText = `Nome: ${aluno.name}`;
        td_email.innerText = `E-mail: ${aluno.email}`;
        br.innerHTML = "<br>";


        tbody.appendChild(div);
        
        div.appendChild(td_id);
        div.appendChild(td_name);
        div.appendChild(td_email);
        div.appendChild(br);

    })
}



function mostrarLista() {
   
    getAllPosts(endpointGet);
}

function addAluno(params) {
    
}

function removeAluno(params) {
    
}