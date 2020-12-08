import { removerCliente, listagemClientes } from './../../api/cliente';
import "../../assets/css/clientes.css";

const criaCorpoTabela = (tabela) => {
    const corpoTabela = document.createElement('tbody');

    const exibeCliente = (cpf, nome, id) => {
        const linha = document.createElement('tr');
    
        const conteudoLinha = `
            <td>${cpf}</td>
            <td>${nome}</td>
            <button class="btn btn-info" onclick="navegacao('/editar?id=${id}'); return false;" type="button">Editar</button>
            `;
        
        linha.innerHTML = conteudoLinha;
        linha.appendChild(criaBotaoExcluir(id));
        return linha;
    }

    const criaBotaoExcluir = (id) => {
        const botaoExcluir = document.createElement('button');
        botaoExcluir.classList.add('btn','btn-danger');
        botaoExcluir.innerHTML = "Excluir";

        botaoExcluir.addEventListener('click',() => {
            confirmarRemoverCliente(id);
        });

        return botaoExcluir;
    }

    listagemClientes().then(exibe =>{
        exibe.forEach(indice => {
            corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id));
        })
    })
    
    tabela.appendChild(corpoTabela);
}

const inicializaTabela = () => { 
    const cabecalho = 
    `<thead class="thead-dark">
        <tr>
            <th scope="col">CPF</th>
            <th scope="col">Nome</th>
            <th scope="col"></th>
            <th scope="col">
                <a class="btn btn-primary" onclick="navegacao('/cadastro'); return false;">Novo Cliente</a>
            </th>
        </tr>
    </thead>
    `;

    const tabela = document.createElement('table');
    tabela.innerHTML = cabecalho;
    tabela.classList.add('table');
    criaCorpoTabela(tabela);
    return tabela;
}

const confirmarRemoverCliente = id =>{
    if (confirm("Você realmente deseja remover este cliente?")) {
        removerCliente(id);
        document.location.reload();
    }
}

export default inicializaTabela;