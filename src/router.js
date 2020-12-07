import inicializaCadastro from './componentes/cadastro/componente-cadastro';
import inicializaTabela from './componentes/listagem/listagem-cliente';
import inicializaEditar from './componentes/edita/edita-cliente';

const rotas = {
    "/": inicializaTabela,
    "/cadastro":inicializaCadastro,
    "/editar": inicializaEditar
    
}

const rootDiv = document.querySelector('[data-container]');

const navegacao = pathName => {
    window.history.pushState({}, pathName, window.location.origin + pathName);

    rootDiv.innerHTML = "";
    const iniciarRota = rotas[window.location.pathname];
    console.log(iniciarRota);
    rootDiv.appendChild(iniciarRota)
}
window.navegacao = navegacao;

window.onpopstate = () => {
    rootDiv.innerHTML = "";
    rootDiv.appendChild(rotas[window.location.pathname]);
}

export{navegacao};