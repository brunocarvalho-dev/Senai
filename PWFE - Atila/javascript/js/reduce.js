var vencedores = [
    {
        id: 1,
        nome: 'Equipe A',
        pais: 'Brasil'
    },
    {
        id: 2,
        nome: 'Equipe B',
        pais: 'Itália'
    },
    {
        id: 3,
        nome: 'Equipe C',
        pais: 'Egito'
    }
];
var pais = vencedores.map(function(item){
    //return item.nome;
    return `<tr><td>${item.id}</td><td>${item.nome}</td><td>${item.pais}</td></tr>
`
}
).join('');
// opções de output
// 1. console
//console.log(pais);

// 2. DOM
document.getElementById('corpo').innerHTML = pais;

// 3. document.write
//document.write(pais);