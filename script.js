let form = document.getElementById('cadastroForm');
let lista = document.getElementById('listaAlunos');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const nome = document.getElementById('nomeAluno').value;
    const idade = document.getElementById('idadeAluno').value;
    const cpf = document.getElementById('cpfdoAluno').value;
    const email = document.getElementById('emaildoAluno').value;

    const novoItem = document.createElement('li');
    novoItem.innerHTML = `<strong>${nome}</strong> - ${idade} anos - ${cpf} - ${cgm}`;

    lista.appendChild(novoItem);

    form.reset(); 
});