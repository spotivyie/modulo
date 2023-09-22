const form = document.getElementById('form-contato');
const contato = [];
const tel = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumTelefone = document.getElementById('num-telefone');

    if(contato.includes(inputNomeContato.value)){
        alert(`O contato ${inputNomeContato.value} ja foi inserido`);
    } else{
        contato.push(inputNomeContato.value);
        tel.push(inputNumTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
