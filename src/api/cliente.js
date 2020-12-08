const listagemClientes = () => fetch("http://localhost:4000/clientes")
    .then(response => response.json()).then(json => json)

const cadastrarClientes = (nome, cpf) => {
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    });
    return fetch("http://localhost:4000/clientes/cliente", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    }).then(res => res.body);
}

const removerCliente = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, { 
        method: 'DELETE'
    });
}

const detalheCliente = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: "GET",
    })
    .then(res => res.json());
}

const editaCliente = (id, cpf, nome) => {
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    });
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
}

export {
    listagemClientes,
    editaCliente,
    detalheCliente,
    cadastrarClientes,
    removerCliente
}