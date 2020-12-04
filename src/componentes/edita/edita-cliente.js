import validaCPF from '../validacao/validaCPF.js';
import { detalheCliente, editaCliente } from '../../api/cliente.js';

const eventoForm = formEdicao => {
    const pegaURL = new URL(window.location);
    const id = pegaURL.searchParams.get('id');
    console.log(formEdicao);
    const inputCPF = formEdicao.querySelector('[data-cpf]');
    const inputNome = formEdicao.querySelector('[data-nome]');

    detalheCliente(id).then(dados => {
        inputCPF.value = dados[0].cpf;
        inputNome.value = dados[0].nome;
    });

    
    formEdicao.addEventListener('submit', e =>{
        e.preventDefault();

        if(!validaCPF(inputCPF.value)) {
            alert('CPF inválido.');
            return;
        }
        editaCliente(id, inputCPF.value, inputNome.value)
            .then(() => formEdicao.appendChild(alerta("success","Cliente editado com sucesso!")))
            .catch(() => formEdicao.appendChild(alerta("warning","Erro ao editar cliente!")));
    });

    const alerta = (classe, mensagem) => {
        const linha = document.createElement('section');
        const conteudoLinha = `
        <div class="alert alert-${classe}" role="alert">
            ${mensagem}
        </div>
        `;
        linha.innerHTML = conteudoLinha;
        return linha;
    }

}

export default eventoForm;