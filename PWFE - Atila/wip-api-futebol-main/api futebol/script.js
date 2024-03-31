const tdiv = document.getElementById('values');
const url = 'https://api-football-v1.p.rapidapi.com/v3/teams?';
let nomeTime;
let time ={};


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '676f01a9ffmshf64c1bd99e061f5p140743jsna5672c0fda88',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',

    } 
};

function pegarDados(){
    data();
}

async function data() {

    nomeTime = document.getElementById("nomeTime").value;
    nomeTime = nomeTime.toLowerCase();
    
    try {
        const response = await fetch(url+`name=${nomeTime}`, options);
        const results = await response.json();
        time = results.response[0];

        console.log(time);


        const div = document.createElement("div");
        const section = document.createElement("section");
        const p_nome = document.createElement("p");
        const p_pais = document.createElement("p");
        const p_fundado = document.createElement("p");
        const p_nomeEstadio = document.createElement("p");
        const p_capacidade = document.createElement("p");
        const p_endereco = document.createElement("p");
        const p_cidade = document.createElement("p");
        const img_escudo = document.createElement("img");
        const img_estadio = document.createElement("img");

        img_escudo.src = time.team.logo;
        img_estadio.src = time.venue.image;
        p_nome.innerText = `NOME: ${time.team.name}`;
        p_pais.innerText = `PAÌS: ${time.team.country}`;
        p_fundado.innerText = `ANO DE FUNDAÇÃO: ${time.team.founded}`;
        p_nomeEstadio.innerText = `ESTÁDIO: ${time.venue.venue}`;
        p_endereco.innerText = `LOCAL: ${time.venue.address}`;
        p_cidade.innerText = `CIDADE: ${time.venue.city}`;
        p_capacidade.innerText = `CAPACIDADE: ${time.venue.capacity} PESSOAS`;

                
        tdiv.appendChild(div);

        div.appendChild(section);
        section.appendChild(img_escudo);
        section.appendChild(p_nome);
        section.appendChild(p_fundado);
        section.appendChild(p_pais);

        tdiv.appendChild(div);

        div.appendChild(section);
        section.appendChild(p_nomeEstadio);
        section.appendChild(p_capacidade);
        section.appendChild(img_estadio);
        section.appendChild(p_endereco);
        section.appendChild(p_cidade);
    
    } catch (error) {
        console.error(error);
    };

};

/*
{"get":"teams","parameters":{"name":"corinthians"},"errors":[],"results":1,"paging":{"current":1,"total":1},"response":[{"team":{"id":131,
"name":"Corinthians",
"code":"COR",
"country":"Brazil",
"founded":1910,
"national":false,
"logo":"https:\/\/media.api-sports.io\/football\/teams\/131.png"},
"venue":{"id":11531,"name":"Neo Qu\u00edmica Arena",
"address":"Avenida Miguel In\u00e1cio Curi, 111, Vila Carmosina, Itaquera",
"city":"S\u00e3o Paulo, S\u00e3o Paulo",
"capacity":49205,
"surface":"grass",
"image":"https:\/\/media.api-sports.io\/football\/venues\/11531.png"}}]}
*/
// CAMPO DE TESTE
/*
async  function pegarDados() {
    try {
        nomeTime = document.getElementById("nomeTime").value;
        nomeTime = nomeTime.toLowerCase();
        
    }catch
    {
        alert("valor não encontrado");
    }

    console.log(url+`name=${nomeTime}`);
    console.log(nomeTime);
    console.log(typeof(nomeTime));
    
}
*/